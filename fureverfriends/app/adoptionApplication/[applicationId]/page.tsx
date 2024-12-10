"use server";

import SingleAdoptionApplication from "@/components/single/SingleAdoptionApplication";
import { adopterService } from "@/services/adopterService";
import { adoptionApplicationService } from "@/services/adoptionApplicationService";
import { petService } from "@/services/petService";

type ApplicationPageParams = Promise<{ applicationId: string }>;

export default async function SinglePetPage(props: {
  params: ApplicationPageParams;
}) {
  const params = await props.params;
  const applicationId = params.applicationId;

  const pets = await petService.getAllPets();
  const adopters = await adopterService.getAllAdopters();
  const application = await adoptionApplicationService.getApplicationWithId({
    applicationId,
  });

  const petInApplication = pets.find(
    (p) => p.id.toString() == application.petid
  );
  const adopterInApplication = adopters.find(
    (a) => a.id == application.adopterid
  );

  return (
    <>
      {application && petInApplication && adopterInApplication && (
        <SingleAdoptionApplication
          application={application}
          pet={petInApplication}
          adopter={adopterInApplication}
        ></SingleAdoptionApplication>
      )}
    </>
  );
}
