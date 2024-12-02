"use client";

import { NoRoleForm } from "@/components/forms/NoRoleForm";
import SingleProfile from "@/components/single/SingleProfile";

import {
  isRoleAssigned,
  validateAndGetUser,
} from "@/useServerActions/tokenValidation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState<
    | {
        id: string;
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
      }
    | undefined
  >(undefined);

  const [doesUserHaveARole, setDoesUserHaveARole] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUser = await validateAndGetUser();
        setUser(fetchedUser);

        if (fetchedUser) {
          const roleAssigned = await isRoleAssigned(fetchedUser.email);
          setDoesUserHaveARole(roleAssigned);
        }
      } catch (error) {
        console.error("Error fetching user or role:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {user ? (
        <div className="flex flex-col gap-4 text-gray-700">
          <SingleProfile user={user}></SingleProfile>
        </div>
      ) : (
        <p className="text-gray-500 text-center">You are not logged in</p>
      )}
      {doesUserHaveARole === null ? (
        <p>Loading...</p>
      ) : doesUserHaveARole ? (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              Profile Page
            </h1>
          </div>
        </div>
      ) : (
        user && <NoRoleForm user={user} />
      )}
    </>
  );
}
