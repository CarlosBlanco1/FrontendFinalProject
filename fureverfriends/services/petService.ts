import { Pet } from "@/models/Pet";
import { Pool } from "pg";

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT ?? "5432"),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

export const petService = {
  getAllPets: async () => {
    const res = await pool.query<Pet>(`
      select 
        id,
        ownerId,
        name,
        animal,
        breed,
        age,
        pictureUrl,
        description
      from Pet
    `);
    return res.rows;
  },
  createPet: async ({ pet }: { pet: Pet }) => {
    console.log(pet)
    await pool.query<Pet>(`
      insert into Pet
      (ownerId, animal, name, breed, age, pictureUrl, description)
      values
      ($1, $2, $3, $4, $5, $6, $7)
      `,
      [pet.ownerid, pet.animal, pet.name, pet.breed, pet.age, pet.pictureurl, pet.description]
    );
  },
};
