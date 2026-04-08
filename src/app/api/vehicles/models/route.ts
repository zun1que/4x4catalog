import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/prisma";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const brandId = searchParams.get("brandId");
    if (!brandId) {
      return NextResponse.json({ error: "brandId is required" }, { status: 400 });
    }

    const models = await prisma.vehicle.findMany({
      where: { brandId: brandId },
      select: { id: true, name: true },
    });
    return NextResponse.json(models);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch models" },
      { status: 500 }
    );
  }
}
