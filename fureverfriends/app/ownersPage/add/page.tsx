"use server";

import AddOwnerForm from "@/forms/AddOwnerForm";
import { createOwnerAction } from "@/useServerActions/ownerActions";

export default async function AddOwnerPage() {

  return (
    <div>
      <AddOwnerForm handleSubmit={createOwnerAction} />
    </div>
  );
}
