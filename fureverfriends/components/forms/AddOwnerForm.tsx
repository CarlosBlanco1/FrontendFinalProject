"use client";

import { Owner } from "@/models/Owner";
import ReusableTextInput from "@/components/reusables/input/ReusableTextInput";
import formToOwner from "@/transformers/formToOwner";
import { ReusableForm } from "../reusables/input/ReusableForm";

export default function AddOwnerForm({
  handleSubmit,
}: {
  handleSubmit: (owner: Owner) => Promise<void>;
}) {
  return (
    <>
      <ReusableForm formTitle={"Add an owner"} buttonText="Add New Owner" onSubmitFunction={handleSubmit} serializeForm={formToOwner} successUrl={"ownersPage"}>
        <ReusableTextInput
          label="First Name"
          name="firstName"
          placeholder="John"
        />
        <ReusableTextInput
          label="Last Name"
          name="lastName"
          placeholder="Doe"
        />
        <ReusableTextInput
          label="Email"
          name="email"
          placeholder="john@example.com"
        />
        <ReusableTextInput
          label="Phone"
          name="phone"
          placeholder="123-456-7890"
        />
        <ReusableTextInput
          label="Address"
          name="address"
          placeholder="123 Elm St, Springfield"
        />
      </ReusableForm>
    </>
  );
}
