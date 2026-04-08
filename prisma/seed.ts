import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // Create admin account
    const admin = await prisma.user.createOrUpdate({
      where: { email: "admin@example.com" },
      update: {},
      create: {
        email: "admin@example.com",
        name: "Admin",
        role: ADMIN,
        password: "hashed_password", 
        emailVerified: new Date(),
      },
    });

    console.log("Seed data injected successfully");
  } catch (e) {
    console.error("Error seeding database:", e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
