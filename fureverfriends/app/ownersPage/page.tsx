"use server";

import Link from "next/link";
import { postgresService } from "../services/ownerService";
import OwnersList from "./components/OwnersList";

export default async function OwnersPage() {

  const owners = await postgresService.getAllOwners();

  return (
    <div>
      <h1>Owners Page</h1>
      <Link href="/ownersPage/add">
          Add Owner
      </Link>
      <OwnersList owners={owners} />
    </div>
  );
}