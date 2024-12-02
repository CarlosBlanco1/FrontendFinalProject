import { AdoptionApplication } from "@/models/AdoptionApplication";
import { adoptionApplicationService } from "@/services/adoptionApplicationService";
import { revalidatePath } from "next/cache";

export async function createAdoptionApplication(application : AdoptionApplication) {
    await adoptionApplicationService.createApplication(application)
    revalidatePath("/petAdoptionFormPage")
}