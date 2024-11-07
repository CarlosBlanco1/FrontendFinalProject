"use server";

import { Owner } from "@/app/models/Owner";
import { postgresService } from "@/app/services/ownerService";
import { revalidatePath } from "next/cache";

export async function createOwnerAction(owner : Owner) {
    await postgresService.createOwner(owner);
    revalidatePath("/ownersPage");
}