import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body = await req.json();
  body = body.fileData;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user !== null) {
    const response = await prisma.documents.create({
      data: {
        title: body.title,
        fileUrl: body.fileUrl,
        category: body.category,
        fileSize: body.fileSize,
        uploadedById: user?.id,
        caseId: parseInt(body.caseId),
        updatedAt: new Date(),
      },
    });
    return NextResponse.json({ message: response }, { status: 200 });
  }
}
