import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const supabase = await createClient();

  let data = await req.json();
  data = data.formData;

  const { data: authData, error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  // Handle authentication error
  if (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }

  // Handle case where no user was found (valid credentials format but no matching account)
  if (!authData.user) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }

  // User authenticated successfully
  const userRole = await prisma.users.findUnique({
    where: {
      id: authData.user.id,
    },
    select: {
      role: true,
    },
  });

  const cookieStore = await cookies();

  cookieStore.set("userId", authData.user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });

  cookieStore.set("userRole", userRole?.role || "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });

  return NextResponse.json({ message: userRole }, { status: 200 });
}
