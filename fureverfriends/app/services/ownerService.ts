import { Pool } from "pg";
import { Owner } from "../models/Owner";

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT ?? "5432"),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});


export const postgresService = {
//   createPet: async ({
//     first_name,
//     last_name,
//     phone,
//     email,
//     first_name_status,
//     last_name_status,
//     phone_status,
//     email_status,
//   }: {
//     first_name: string;
//     last_name: string;
//     phone: string;
//     email: string;
//     first_name_status: AttributeStatus;
//     last_name_status: AttributeStatus;
//     phone_status: AttributeStatus;
//     email_status: AttributeStatus;
//   }) => {
//     console.log("creating user in service");
//     await pool.query(
//       `insert into directory_user
//         (first_name, last_name, phone, email, first_name_status, last_name_status, phone_status, email_status) 
//       values
//         ($1, $2, $3, $4, $5, $6, $7, $8)
//       `,
//       [
//         first_name,
//         last_name,
//         phone,
//         email,
//         first_name_status,
//         last_name_status,
//         phone_status,
//         email_status,
//       ]
//     );
//   },
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
    console.log(res.rows);
    return res.rows;
  },
  
//   editUser: async (userId: number, updatedUser: Partial<DirectoryUser>): Promise<DirectoryUser | null> => {
//     // Ensure we are not updating the primary key
//     if (updatedUser.id !== undefined) {
//         delete updatedUser.id; // Prevent changing the ID
//     }

//     // Prepare the fields for the update query
//     const fields = Object.keys(updatedUser).map((key, index) => `${key} = $${index + 2}`).join(', ');

//     // If no fields to update, return null
//     if (fields.length === 0) {
//         return null; // No updates to make
//     }

//     // Create the query
//     const query = `
//       UPDATE directory_user
//       SET ${fields}
//       WHERE id = $1
//       RETURNING *
//     `;

//     // Execute the query
//     const res = await pool.query<DirectoryUser>(query, [userId, ...Object.values(updatedUser)]);

//     // Return the updated user or null if not found
//     return res.rows.length > 0 ? res.rows[0] : null;
// }

};

