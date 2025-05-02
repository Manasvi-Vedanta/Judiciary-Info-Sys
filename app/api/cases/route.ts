import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const currentYear = new Date().getFullYear();

    // Get the latest case number for this year
    const latestCase = await prisma.cases.findFirst({
      where: {
        caseNumber: {
          startsWith: `CR-${currentYear}-`,
        },
      },
      orderBy: {
        caseNumber: "desc",
      },
      select: {
        caseNumber: true,
      },
    });

    // Generate the next case number
    let nextNumber = 1;
    if (latestCase?.caseNumber) {
      const lastNumber = parseInt(latestCase.caseNumber.split("-")[2]);
      nextNumber = lastNumber + 1;
    }

    const caseNumber = `CR-${currentYear}-${nextNumber
      .toString()
      .padStart(4, "0")}`;

    // Calculate next hearing date (30 days from now)
    const nextHearingDate = new Date();
    nextHearingDate.setDate(nextHearingDate.getDate() + 30);

    // Convert date strings to Date objects
    const caseData = {
      ...data,
      caseNumber,
      filedDate: new Date(data.filedDate),
      crimeDate: data.crimeDate ? new Date(data.crimeDate) : null,
      arrestDate: data.arrestDate ? new Date(data.arrestDate) : null,
      updatedAt: new Date(),
      nextHearing: nextHearingDate, // Set to 30 days from now
    };

    const newCase = await prisma.cases.create({
      data: caseData,
    });

    return NextResponse.json(newCase, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to create case", details: error.message },
      { status: 500 }
    );
  }
}
