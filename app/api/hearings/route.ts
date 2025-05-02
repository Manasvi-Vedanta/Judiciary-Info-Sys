import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Create the hearing
    const hearing = await prisma.hearings.create({
      data: {
        title: data.title,
        description: data.description,
        type: data.type,
        date: new Date(data.date),
        duration: data.duration,
        location: data.location,
        status: "SCHEDULED",
        notes: data.notes,
        caseId: data.caseId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      include: {
        cases: true,
      },
    });

    return NextResponse.json(hearing, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to schedule hearing", details: error.message },
      { status: 500 }
    );
  }
}
