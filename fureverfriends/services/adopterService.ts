import { Adopter } from "@/models/Adopter";
import { Pool } from "pg";

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT ?? "5432"),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

export const adopterService = {
  getAllAdopters: async () => {
    const res = await pool.query<Adopter>(`
            select 
              id,
              firstName,
              lastName,
              email,
              phone
            from Adopter
          `);
    return res.rows;
  },
  createAdopter: async ({
    firstname,
    lastname,
    email,
    phone
  }: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
  }) => {
    await pool.query(
      `insert into Adopter
          (firstName, lastName, email, phone) 
        values
          ($1, $2, $3, $4)
        `,
      [firstname, lastname, email, phone]
    );
  },
};
