import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/lib/prisma";

const prisma = new PrismaClient();

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const category = await prisma.category.delete({
      where: { id: params.id },
    });
    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete category" }, { status: 500 });
  }
}

eyןPET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const category = await prisma.category.update({
      where: { id: params.id },
      data: body,
    });
    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update category" }, { status: 500 });
  }
}

