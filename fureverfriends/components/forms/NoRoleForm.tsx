"use server";

import ReusableSelectInput from "../reusables/input/ReusableSelectInput";
import { createAdopter } from "@/useServerActions/adopterActions";
import { createOwnerAction } from "@/useServerActions/ownerActions";

export const NoRoleForm = async ({
  user,
}: {
  user: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
  };
}) => (
  <div>
    <h2>You don't have a role, register as:</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const selectedRole = (
          form.elements.namedItem("role") as HTMLSelectElement
        ).value;

        if (selectedRole === "Adopter") {
          createAdopter(user);
        } else {
          createOwnerAction({ ...user, address: "some address" });
        }
      }}
    >
      <ReusableSelectInput
        label="Role"
        name="role"
        options={["Adopter", "Owner"]}
      />
      <button type="submit">Select</button>
    </form>
  </div>
);
