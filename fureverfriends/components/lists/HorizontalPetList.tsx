"use client";

import { Pet } from "@/models/Pet";
import Link from "next/link";

export default function HorizontalPetList() {
  const recentlyViewedPets: Pet[] = JSON.parse(
    localStorage.getItem("viewedPets") || "[]"
  );

  console.log(recentlyViewedPets)

  return (
    <>
      {recentlyViewedPets ? (
        <div>
          <h2 className="text-3xl font-bold text-white tracking-wide text-center shadow-lg">
            Your Recently Viewed Pets
          </h2>
          <div className="flex space-x-6 overflow-x-auto p-4">
            {recentlyViewedPets.map((pet) => (
              <div
                key={pet.id}
                className="w-72 bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img src={pet.pictureurl!}
                  alt={pet.name}
                  className="w-full h-48 object-cover rounded-t-lg mb-4">
                    </img>
                <h3 className="text-xl font-semibold text-white">{pet.name}</h3>
                <p className="text-gray-300 text-sm">
                  {pet.animal} - {pet.breed}
                </p>
                <p className="text-gray-400 text-sm">{pet.age} years old</p>
                <p className="text-gray-500 text-sm mt-2">{pet.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Link
          href="/petsPage"
          className="mt-6 inline-block px-6 py-3 text-lg text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition-all"
        >
          Browse Some Pets
        </Link>
      )}
    </>
  );
}
