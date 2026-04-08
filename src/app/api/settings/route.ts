import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/prisma";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const settings = await prisma.settings.findMany();
    return NextResponse.json(settings || []);
  } catch (error) {
    console.error("Settings Error:", error);
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

port async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const settings = await prisma.settings.findUniqueOrCreate({
      where: { id: 1 },
      create: body,
      update: body,
    });
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
