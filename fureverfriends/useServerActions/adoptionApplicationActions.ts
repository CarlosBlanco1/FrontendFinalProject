"use server";

import { AdoptionApplication } from "@/models/AdoptionApplication";
import { adoptionApplicationService } from "@/services/adoptionApplicationService";
import { revalidatePath } from "next/cache";

export async function createAdoptionApplication(
  application: AdoptionApplication
) {
  await adoptionApplicationService.createApplication(application);
  revalidatePath("/petAdoptionFormPage");
}

export async function updateApplicationStatusAction({
  newStatus,
  applicationToUpdateId,
}: {
  newStatus: string;
  applicationToUpdateId: number;
}) {

  await adoptionApplicationService.updateApplicationStatus({
    applicationId:applicationToUpdateId,
    newStatus,
  });
}