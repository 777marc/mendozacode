import { prisma } from "~/db.server";

export async function getExperiences() {
  try {
    return prisma.experience.findMany();
  } catch (err) {
    console.log("err", err);
  }
}
