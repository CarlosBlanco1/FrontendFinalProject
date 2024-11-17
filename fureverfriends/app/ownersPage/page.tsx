"use server";

import Link from "next/link";
import { ownerService } from "@/services/ownerService";
import PeopleList from "@/components/lists/PeopleList";

export default async function OwnersPage() {

  const owners = await ownerService.getAllOwners();

  return (
    <div>
      <h1 className="text-5xl font-semibold text-white mb-5">Owners Page</h1>
      <Link href="/ownersPage/add">
        <button className="bg-blue-500 text-white font-medium py-1 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
          Add Owner
        </button>
      </Link>
      <PeopleList people={owners} />
    </div>
  );
}