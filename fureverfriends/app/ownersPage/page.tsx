"use server";

import { ownerService } from "@/services/ownerService";
import PeopleList from "@/components/lists/PeopleList";

export default async function OwnersPage() {

  const owners = await ownerService.getAllOwners();

  return (
    <div>
      <h1 className="text-5xl font-semibold text-white mb-5">Owners Page</h1>
      <PeopleList people={owners} />
    </div>
  );
}