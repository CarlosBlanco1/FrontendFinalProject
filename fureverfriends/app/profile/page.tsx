"use server";

import NoRoleForm from "@/components/forms/NoRoleForm";
import SingleProfile from "@/components/single/SingleProfile";
import { createAdopter } from "@/useServerActions/adopterActions";
import { createOwnerAction } from "@/useServerActions/ownerActions";

import {
  getUserRoleAndObject,
  validateAndGetUser,
} from "@/useServerActions/tokenValidation";

export default async function ProfilePage() {
  let user = undefined;
  let userRoleAndObject = undefined;

  try {
    user = await validateAndGetUser();

    if (user) {
      userRoleAndObject = await getUserRoleAndObject(user.email);
    }
  } catch (error) {
    console.error("Error fetching user or role:", error);
  }

  return (
    <>
      {user ? (
        <div className="flex flex-col gap-4 text-gray-700">
          <SingleProfile user={user}></SingleProfile>
        </div>
      ) : (
        <p className="text-gray-500 text-center">You are not logged in</p>
      )}
      {userRoleAndObject === null ? (
        <p>Loading...</p>
      ) : userRoleAndObject ? (
        <></>
      ) : (
        user && (
          <NoRoleForm
            user={user}
            createAdopterFunc={createAdopter}
            createOwnerFunc={createOwnerAction}
          />
        )
      )}
    </>
  );
}
