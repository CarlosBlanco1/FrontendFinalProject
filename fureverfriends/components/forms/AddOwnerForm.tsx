"use client";

import { Owner } from "@/models/Owner";
import ReusableTextInput from "@/components/reusables/input/ReusableTextInput";
import formToOwner from "@/transformers/formToOwner";
import { useToastContext } from "../toasts/useToastContext";
import { useRouter } from "next/navigation";


export default function AddOwnerForm({handleSubmit}: {handleSubmit : (owner : Owner) => Promise<void>}) {

  const toast = useToastContext();
  const router = useRouter();
  
  return (
    <>
      <form onSubmit={ async (event : React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const ownerToSubmit = formToOwner(event);
        await handleSubmit(ownerToSubmit)
        toast.showToast("Owner added successfully", "success");
        router.push("/ownersPage");

        }}
        className="bg-white flex flex-col gap-4 py-8 px-9">
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
        <button className="bg-yellow-400 p-3 text-lg text-black rounded-lg" type="submit">Add Owner</button>
      </form>
    </>
  );
}
