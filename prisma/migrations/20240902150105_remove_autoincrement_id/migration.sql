-- AlterTable
ALTER TABLE "Categories" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Categories_id_seq";

-- AlterTable
ALTER TABLE "Dishes" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Dishes_id_seq";

-- AlterTable
ALTER TABLE "Instructions" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Instructions_id_seq";

-- AlterTable
ALTER TABLE "Recipes" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Recipes_id_seq";

-- AlterTable
ALTER TABLE "Reviews" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Reviews_id_seq";

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Users_id_seq";
