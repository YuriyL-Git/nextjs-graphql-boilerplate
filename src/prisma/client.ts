import { PrismaClient } from "@prisma/client";

declare const global: {
  prisma: PrismaClient;
};

let client: PrismaClient;

if (process.env.NODE_ENV === "production") {
  client = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  client = global.prisma;
}
export { client };
