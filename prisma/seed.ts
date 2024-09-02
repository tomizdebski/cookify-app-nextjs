import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

async function deleteAllData() {
  const modelNames = [
    "users",
    "categories",
    "dishes",
    "ingredients",
    "recipes",
    "instructions",
    "recipeIngredients",
    "follows",
    "reviews",
  ];

  console.log("Deleting all data...");

  for (const modelName of modelNames) {
    const model: any = prisma[modelName as keyof typeof prisma];
    if (model) {
      try {
        await model.deleteMany({});
        console.log(`Cleared data from ${modelName}`);
      } catch (error) {
        console.error(`Error clearing data from ${modelName}:`, error);
      }
    } else {
      console.error(
        `Model ${modelName} not found. Please ensure the model name is correctly specified.`
      );
    }
  }
}

async function seedData() {
  const dataDirectory = path.join(__dirname, "seedData");

  const files = [
    "users.json",
    "categories.json",
    "dishes.json",
    "ingredients.json",
    "recipes.json",
    "instructions.json",
    "recipeIngredients.json",
    "reviews.json",
    "follows.json",
  ];

  for (const fileName of files) {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const modelName = path.basename(fileName, path.extname(fileName));
    const model: any = prisma[modelName as keyof typeof prisma];

    if (!model) {
      console.error(`No Prisma model matches the file name: ${fileName}`);
      continue;
    }

    for (const data of jsonData) {
      // Ensure date fields are in the correct format
      if (data.date_of_birth) {
        data.date_of_birth = new Date(data.date_of_birth).toISOString();
      }
      if (data.created_at) {
        data.created_at = new Date(data.created_at).toISOString();
      }
      if (data.date) {
        data.date = new Date(data.date).toISOString();
      }

      await model.create({
        data,
      });
    }

    console.log(`Seeded ${modelName} with data from ${fileName}`);
  }
}

async function main() {
  await deleteAllData();
  await seedData();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
