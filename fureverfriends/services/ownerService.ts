import { Pool } from "pg";
import { Owner } from "../models/Owner";

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT ?? "5432"),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

export const ownerService = {
  getAllOwners: async () => {
    const res = await pool.query<Owner>(`
          select 
            id,
            firstName,
            lastName,
            email,
            phone,
            address
          from Owner
        `);
    return res.rows;
  },
  createOwner: async ({
    firstname,
    lastname,
    email,
    phone,
    address,
  }: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    address: string;
  }) => {
    await pool.query(
      `insert into Owner
        (firstName, lastName, email, phone, address) 
      values
        ($1, $2, $3, $4, $5)
      `,
      [firstname, lastname, email, phone, address]
    );
  },
};
