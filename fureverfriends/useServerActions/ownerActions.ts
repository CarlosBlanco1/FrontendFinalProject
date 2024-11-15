"use server";

import { Owner } from "@/models/Owner";
import { postgresService } from "@/services/ownerService";
import { revalidatePath } from "next/cache";

export async function createOwnerAction(owner : Owner) {
    await postgresService.createOwner(owner);
    revalidatePath("/ownersPage");
}