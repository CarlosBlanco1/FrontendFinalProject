"use server";

import PetList from "@/components/lists/PetList";
import { petService } from "@/services/petService";

export default async function PetsPage() {
  const pets = await petService.getAllPets();
  return (
    <>
      <h1 className="text-5xl font-bold mb-8">Pet Page</h1>
      <PetList pets={pets}></PetList>
    </>
  );
}
