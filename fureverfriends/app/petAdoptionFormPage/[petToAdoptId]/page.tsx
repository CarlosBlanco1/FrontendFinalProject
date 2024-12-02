"use server";

import AdoptAPetForm from "@/components/forms/AdoptAPetForm";
import { Adopter } from "@/models/Adopter";
import { ownerService } from "@/services/ownerService";
import { petService } from "@/services/petService";
import { createAdoptionApplication } from "@/useServerActions/adoptionApplicationActions";
import {
  getAdopterAfterValidating,
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

    petAdopter = await getAdopterAfterValidating(validatedUser.email);
  }
  catch(error)
  {
    return <>
        <div>
            <h2 className="bg-white text-black text-xl">You're not an adopter!</h2>
        </div>
    </>
  }


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
