import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const supabase = await createClient();

  let data = await req.json();
  data = data.formData;

  const { data: authData, error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });

  if (error) {
    return NextResponse.json({ message: "HERE IS ERROR" }, { status: 500 });
  } else if (authData.user !== null) {
    const res = await prisma.users.create({
      data: {
        id: authData.user.id.toString(),
        name: data.name,
        email: data.email,
        role: data.role,
        updatedAt: new Date(),
      },
    });
  }
  
  return NextResponse.json({ message: data.role }, { status: 200 });
}
