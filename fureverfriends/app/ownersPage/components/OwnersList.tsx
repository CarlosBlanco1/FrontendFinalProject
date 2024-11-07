"use client";

import { Owner } from "@/app/models/Owner";

export default function OwnersList({ owners } : { owners: Owner[] }) {
  return (
    <div className="flex flex-col gap-4">
      {owners.map((owner) => (
        <div key={owner.id} className="flex gap-4 items-center">
          <div className="w-20 h-20 rounded-full bg-gray-300"></div>
          <div>
            <h2 className="text-xl">
              {owner.firstName} {owner.lastName}
            </h2>
            <p className="text-sm">{owner.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
