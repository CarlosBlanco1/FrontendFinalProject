"use server";

import SinglePet from "@/components/single/SinglePet";
import { ownerService } from "@/services/ownerService";
import { petService } from "@/services/petService";
import {
  getUserRoleAndObject,
  validateAndGetUser,
} from "@/useServerActions/tokenValidation";

type PetPageParams = Promise<{ petId: string }>;

export default async function SinglePetPage(props: { params: PetPageParams }) {
  const params = await props.params;
  const petId = params.petId;

  const pets = await petService.getAllPets();
  const owners = await ownerService.getAllOwners();

  const petToDisplay = pets.find((pet) => pet.id == Number(petId));

  let userRoleAndObject = undefined;

  try {

    const user = await validateAndGetUser();
    userRoleAndObject = await getUserRoleAndObject(user.email);

  } catch (error) {
    console.log("error while getting user:");
    { error instanceof Error && (<div>{error.message}</div>)}
  }

  return (
    <>
      {petToDisplay && (
        <SinglePet petToDisplay={petToDisplay} owners={owners} userRole={userRoleAndObject ? userRoleAndObject.role : undefined}></SinglePet>
      )}
    </>
  );
}
