"use server";

import { postgresService } from "../services/ownerService";
import OwnersList from "./components/OwnersList";

export default async function OwnersPage() {

  const owners = await postgresService.getAllOwners();

  return (
    <div>
      <h1>Owners Page</h1>
      <OwnersList owners={owners} />
    </div>
  );
}