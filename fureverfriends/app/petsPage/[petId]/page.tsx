"use server";

import SinglePet from "@/components/single/SinglePet";
import { ownerService } from "@/services/ownerService";
import { petService } from "@/services/petService";

type PetPageParams = Promise<{ petId: string }>;

export default async function SinglePetPage(props: { params: PetPageParams }) {
  const params = await props.params;
  const petId = params.petId;

  const pets = await petService.getAllPets();
  const owners = await ownerService.getAllOwners();

  const petToDisplay = pets.find((pet) => pet.id == Number(petId));

  return (
    <>
      {petToDisplay && (
        <SinglePet petToDisplay={petToDisplay} owners={owners}></SinglePet>
      )}
    </>
  );
}
