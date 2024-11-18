"use client";

import { Pet } from "@/models/Pet";
import Link from "next/link";

export default function PetList({ pets }: { pets: Pet[] }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        {pets.map((pet) => {
          return (
            <>
              <Link href={`petsPage/${pet.id}`}>
                <div
                  key={pet.id}
                  className="rounded p-3 bg-gray-200 flex gap-2 text-black"
                >
                  <div className="w-20 h-20 rounded-full font-semibold bg-white flex items-center justify-center text-gray-500 text-xl">
                    {pet.name[0].toUpperCase()}
                    {pet.name[1].toUpperCase()}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-lg font-semibold">
                      Hello, my name is {pet.name}!
                    </span>
                    <span className="text-sm">
                      I&apos;m a {pet.breed} {pet.animal}
                    </span>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
