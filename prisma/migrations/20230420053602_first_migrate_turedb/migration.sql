-- CreateTable
CREATE TABLE "Administrators" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "document_type" TEXT NOT NULL,
    "document_number" TEXT NOT NULL,
    "date_birth" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profile_picture_url" TEXT NOT NULL,
    "document_picture_url" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Administrators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pacients" (
    "id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "document_type" TEXT NOT NULL,
    "document_number" TEXT NOT NULL,
    "date_birth" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profile_picture_url" TEXT NOT NULL,
    "document_picture_url" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "administratorId" TEXT NOT NULL,

    CONSTRAINT "Pacients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalConsultations" (
    "id" TEXT NOT NULL,
    "doctor_name" TEXT NOT NULL,
    "doctor_id" TEXT NOT NULL,
    "pacient_name" TEXT NOT NULL,
    "pacient_id" TEXT NOT NULL,
    "number_Chart" TEXT NOT NULL,
    "exams_list" TEXT[],
    "attachments_url" TEXT[],
    "administratorsId" TEXT NOT NULL,

    CONSTRAINT "MedicalConsultations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Administrators_email_key" ON "Administrators"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pacients_email_key" ON "Pacients"("email");

-- AddForeignKey
ALTER TABLE "Pacients" ADD CONSTRAINT "Pacients_administratorId_fkey" FOREIGN KEY ("administratorId") REFERENCES "Administrators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalConsultations" ADD CONSTRAINT "MedicalConsultations_administratorsId_fkey" FOREIGN KEY ("administratorsId") REFERENCES "Administrators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
