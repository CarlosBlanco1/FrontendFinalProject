"use server";

import { Owner } from "@/models/Owner";
import { ownerService } from "@/services/ownerService";
import { revalidatePath } from "next/cache";

export async function createOwnerAction(owner : Owner) {
    await ownerService.createOwner(owner);
    revalidatePath("/ownersPage");
}