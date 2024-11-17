"use server";

import SinglePerson from "@/components/single/SinglePerson";
import { ownerService } from "@/services/ownerService";

type OwnerPageProps = Promise<{ ownerId: string }>;

export default async function singleOwnerPage(props: {
  params: OwnerPageProps;
}) {
  const params = await props.params;
  const owners = await ownerService.getAllOwners();
  const ownerToDisplay = owners.find(
    (owner) => owner.id == params.ownerId
  );

  return (
    <>
      {ownerToDisplay && (
        <SinglePerson person={ownerToDisplay}></SinglePerson>
      )}
    </>
  );
}
