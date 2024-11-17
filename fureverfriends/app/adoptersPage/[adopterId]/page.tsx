"use server";

import SinglePerson from "@/components/single/SinglePerson";
import { adopterService } from "@/services/adopterService";

type AdopterPageProps = Promise<{ adopterId: string }>;

export default async function singleAdopterPage(props: {
  params: AdopterPageProps;
}) {
  const params = await props.params;
  const adopters = await adopterService.getAllAdopters();
  const adopterToDisplay = adopters.find(
    (adopter) => adopter.id == params.adopterId
  );

  return (
    <>
      {adopterToDisplay && (
        <SinglePerson person={adopterToDisplay}></SinglePerson>
      )}
    </>
  );
}
