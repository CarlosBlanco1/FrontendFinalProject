"use server";

import AddOwnerForm from "@/app/forms/AddOwnerForm";
import { createOwnerAction } from "@/useServerActions/ownerActions";

export default async function AddOwnerPage() {

  return (
    <div>
      <AddOwnerForm handleSubmit={createOwnerAction} />
    </div>
  );
}
