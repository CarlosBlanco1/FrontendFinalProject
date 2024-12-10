"use server";

import { Adopter } from "@/models/Adopter";
import { adopterService } from "@/services/adopterService";
import { revalidatePath } from "next/cache";

export async function createAdopter(adopter : Adopter)
{
    await adopterService.createAdopter(adopter);
    revalidatePath("/adoptersPage");
}