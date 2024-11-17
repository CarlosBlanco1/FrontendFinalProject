"use client";

import { Adopter } from "@/models/Adopter";
import { Owner } from "@/models/Owner";

export default function SinglePerson({ person }: { person: Owner | Adopter }) {
  const isOwner = Boolean((person as Owner).address);

  return (
    <>
      <div className="flex items-center justify-center h-full bg-white text-white">
        <div className="flex gap-8 p-6 bg-gray-900 rounded-lg shadow-lg text-white max-w-4xl w-full mx-4">
          <div className="flex-shrink-0">
            <div className="rounded-full w-40 h-40 bg-gray-800 flex items-center justify-center font-bold text-3xl uppercase text-white border-4 border-gray-700">
              {person.firstname[0]} {person.lastname[0]}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 w-full">
            <h1 className="text-4xl font-semibold text-white">
              {person.firstname} {person.lastname}
            </h1>
            <p className="text-gray-400">{person.email}</p>
            <p className="text-gray-400">{person.phone}</p>
            {isOwner && (
              <p className="text-gray-500 italic">
                {(person as Owner).address}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
