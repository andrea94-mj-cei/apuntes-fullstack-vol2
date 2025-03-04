/*
  Warnings:

  - Added the required column `usuarioId` to the `Tareas` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "description" TEXT,
    "imagen" TEXT NOT NULL DEFAULT 'no-image.jpg',
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tareas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tarea" TEXT NOT NULL,
    "isCompletada" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Tareas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tareas" ("createdAt", "id", "isCompletada", "tarea", "updatedAt") SELECT "createdAt", "id", "isCompletada", "tarea", "updatedAt" FROM "Tareas";
DROP TABLE "Tareas";
ALTER TABLE "new_Tareas" RENAME TO "Tareas";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
