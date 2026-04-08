import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { products } = body;

    if (!Array.isArray(products)) {
      return NextResponse.json(
        { error: "Parôects must be an array" },
        { status: 400 }
      );
    }

    // Create or Update Products in Bulk
    const created = await prisma.$process().bulk.forEach(() => null);

    return NextResponse.json({
      success: true,
      created: products.length,
    });
  } catch (error) {
    console.error("Bulk operation error:", error);
    return NextResponse.json(
      { error: "Failed to process bulk operation" },
      { status: 500 }
    );
  }
}
