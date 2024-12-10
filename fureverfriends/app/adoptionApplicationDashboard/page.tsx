"use server";

import AdoptersApplicationslist from "@/components/lists/AdoptersApplicationsList";
import AdoptionFormsList from "@/components/lists/AdoptionFormsList";
import HorizontalPetList from "@/components/lists/HorizontalPetList";
import { adopterService } from "@/services/adopterService";
import { adoptionApplicationService } from "@/services/adoptionApplicationService";
import { ownerService } from "@/services/ownerService";
import { petService } from "@/services/petService";
import {
  getUserRoleAndObject,
  validateAndGetUser,
} from "@/useServerActions/tokenValidation";
import Link from "next/link";

export default async function adoptionApplicationDashboard() {
  let user = undefined;
  let userRoleAndObject = undefined;

  try {
    user = await validateAndGetUser();

    if (user) {
      userRoleAndObject = await getUserRoleAndObject(user.email);
    }
  } catch (error) {
    return (
      <>
        <p className="text-gray-500 text-center">
          You need to sign in / Register to view this page
        </p>
        { error instanceof Error && (<div>{error.message}</div>)}
        </>
    );
  }
  const owners = await ownerService.getAllOwners();
  const pets = await petService.getAllPets();
  const adopters = await adopterService.getAllAdopters();

  if (userRoleAndObject?.role == "Adopter") {
    const applicationsForAdopter =
      await adoptionApplicationService.getAllApplicationsForAdopter({
        adopterId: userRoleAndObject!.object.id,
      });

    return (
      <>
        <AdoptersApplicationslist
          applications={applicationsForAdopter}
          owners={owners}
          pets={pets}
        ></AdoptersApplicationslist>
        <HorizontalPetList></HorizontalPetList>
      </>
    );
  }

  const applicationsForOwner =
    await adoptionApplicationService.getAllApplicationsForOwner({
      ownerId: userRoleAndObject!.object.id,
    });

  return (
    <>
      <Link
        href={`adoptionApplicationDashboard/addPetPage/${
          userRoleAndObject!.object.id
        }`}
      >
        <button className="rounded-lg bg-blue-600 text-white px-6 py-3 font-medium shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200">
          Add a new pet
        </button>
      </Link>
      <AdoptionFormsList
        adoptionForms={applicationsForOwner}
        pets={pets}
        adopters={adopters}
      ></AdoptionFormsList>
    </>
  );
}
