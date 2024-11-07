"use client";

import { Owner } from "@/app/models/Owner";
import ReusableTextInput from "@/reusables/ReusableTextInput";
import formToOwner from "@/transformers/formToOwner";

export default function AddOwnerForm({handleSubmit}: {handleSubmit : (owner : Owner) => Promise<void>}) {
  return (
    <>
      <form onSubmit={ async (event : React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const ownerToSubmit = formToOwner(event);
        await handleSubmit(ownerToSubmit)

        }}>
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
        <button type="submit">Add Owner</button>
      </form>
    </>
  );
}
