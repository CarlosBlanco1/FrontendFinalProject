import { Pool } from "pg";

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT ?? "5432"),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

export const adoptionApplicationService = {
  createApplication: async ({
    applicationId,
    petId,
    adopterId,
    ownerId,
    message,
    status,
    submittedAt,
  }: {
    applicationId: string;
    petId: string;
    adopterId: string;
    ownerId: string;
    message?: string;
    status: "pending" | "approved" | "rejected";
    submittedAt: Date;
  }) => {
    await pool.query(`insert into AdoptionApplication
        (applicationId, petId, adopterId, ownerId, message, status, submittedAt)
        values
        ($1, $2, $3, $4, $5, $6, $7)`
    , [applicationId, petId, adopterId, ownerId, message, status, submittedAt])
  },
};
