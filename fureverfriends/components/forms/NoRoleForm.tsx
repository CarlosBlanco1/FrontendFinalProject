"use client";

import { Adopter } from "@/models/Adopter";
import { Owner } from "@/models/Owner";
import { ReusableForm } from "../reusables/input/ReusableForm";

export default function NoRoleForm({
  user,
  createAdopterFunc,
  createOwnerFunc,
}: {
  user: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
  };
  createAdopterFunc: (adopter: Adopter) => Promise<void>;
  createOwnerFunc: (owner: Owner) => Promise<void>;
}) {
  return (
    <>
      <div>
        <h2>You don&apos;t have a role, register as:</h2>
        <ReusableForm
          formTitle={"Register as an Adopter"}
          buttonText="Select Adopter Role"
          onSubmitFunction={createAdopterFunc}
          serializeForm={function (event: React.FormEvent<HTMLFormElement>) {
            event.preventDefault();
            return user;
          }}
          successUrl={"adoptersPage"}
        ><></></ReusableForm>
        <ReusableForm
          formTitle={"Register as a Owner"}
          buttonText="Select Owner Role"
          onSubmitFunction={createOwnerFunc}
          serializeForm={function (event: React.FormEvent<HTMLFormElement>) {
            event.preventDefault();
            return user;
          }}
          successUrl={"ownersPage"}
        ><></></ReusableForm>
      </div>
    </>
  );
}
