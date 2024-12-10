"use server"

import { Pet } from "@/models/Pet";
import { petService } from "@/services/petService";
import { revalidatePath } from "next/cache";

export async function createPetAction(pet : Pet)
{
    await petService.createPet({pet})
    revalidatePath("/petsPage");
}