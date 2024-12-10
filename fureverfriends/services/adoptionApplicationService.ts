import { AdoptionApplication } from "@/models/AdoptionApplication";
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
    petid,
    adopterid,
    ownerid,
    message,
    status,
    submittedat,
  }: {
    petid: string;
    adopterid: string;
    ownerid: string;
    message?: string;
    status: "pending" | "approved" | "rejected";
    submittedat: Date;
  }) => {
    await pool.query(
      `insert into AdoptionApplication
        (petId, adopterId, ownerId, message, status, submittedAt)
        values
        ($1, $2, $3, $4, $5, $6)`,
      [petid, adopterid, ownerid, message, status, submittedat]
    );
  },
  getAllApplicationsForOwner: async ({ ownerId }: { ownerId: string }) => {
    const res = await pool.query<AdoptionApplication>(
      `
            SELECT 
              applicationId,
              petId,
              adopterId,
              ownerId,
              message,
              status,
              submittedAt
            FROM AdoptionApplication
            WHERE ownerId = $1
          `,
      [ownerId]
    );
    return res.rows;
  },
  getAllApplicationsForAdopter: async ({ adopterId }: { adopterId: string }) => {
    const res = await pool.query<AdoptionApplication>(
      `
            SELECT 
              applicationId,
              petId,
              adopterId,
              ownerId,
              message,
              status,
              submittedAt
            FROM AdoptionApplication
            WHERE adopterId = $1
          `,
      [adopterId]
    );
    return res.rows;
  },
  getApplicationWithId: async ({
    applicationId,
  }: {
    applicationId: string;
  }) => {
    const res = await pool.query<AdoptionApplication>(
      `
      SELECT 
        applicationId,
        petId,
        adopterId,
        ownerId,
        message,
        status,
        submittedAt
      FROM AdoptionApplication
      WHERE applicationId = $1
      `,
      [applicationId]
    );

    return res.rows[0]
  },

  updateApplicationStatus: async ({
    applicationId,
    newStatus,
  }: {
    applicationId: number;
    newStatus: string;
  }) => {

    await pool.query(
      `UPDATE AdoptionApplication
      SET status = $1
      WHERE applicationId = $2`,
      [newStatus, applicationId]
    );
  },
};
