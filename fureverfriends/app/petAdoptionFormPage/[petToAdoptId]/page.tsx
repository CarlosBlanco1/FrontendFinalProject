"use server";

import AdoptAPetForm from "@/components/forms/AdoptAPetForm";
import { Adopter } from "@/models/Adopter";
import { ownerService } from "@/services/ownerService";
import { petService } from "@/services/petService";
import { createAdoptionApplication } from "@/useServerActions/adoptionApplicationActions";
import {
  getUserRoleAndObject,
  validateAndGetUser,
} from "@/useServerActions/tokenValidation";

type AdoptionFormPageProps = Promise<{ petToAdoptId: string }>;

export default async function PetAdoptionFormPage(props: {
  params: AdoptionFormPageProps;
}) {
  const params = await props.params;
  const petToAdoptId = params.petToAdoptId;

  const pets = await petService.getAllPets();
  const petToAdopt = pets.find((pet) => pet.id == Number(petToAdoptId));

  const owners = await ownerService.getAllOwners();
  const petOwner = owners.find(
    (owner) => Number(owner.id) == petToAdopt?.ownerid
  );

  const validatedUser = await validateAndGetUser();

  let petAdopter : Adopter | undefined = undefined

  try {

    petAdopter = (await getUserRoleAndObject(validatedUser.email)).object;
  }
  catch(error)
  {
    return <>
        <div className="bg-white text-black">
            <h2 className="text-xl">You&apos;re not an adopter!</h2>    
            { error instanceof Error && (<div>{error.message}</div>)}
        </div>
    </>
  }

  console.log(petAdopter)
  console.log(petToAdopt)
  console.log(petOwner)

  return (
    <>
      {petOwner && petToAdopt && petAdopter && (
        <AdoptAPetForm
          petOwner={petOwner}
          petToAdopt={petToAdopt}
          petAdopter={petAdopter}
          handleSubmit={createAdoptionApplication}
        ></AdoptAPetForm>
      )}
    </>
  );
}
