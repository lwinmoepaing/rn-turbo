-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "LoveLetter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "letter" TEXT NOT NULL,
    "beloved_name" TEXT NOT NULL,
    "short_link" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "is_public" BOOLEAN NOT NULL DEFAULT true,
    "key_of_letter" TEXT NOT NULL DEFAULT '',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "LoveLetter_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
