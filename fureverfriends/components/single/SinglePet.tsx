"use client";

import { Owner } from "@/models/Owner";
import { Pet } from "@/models/Pet";
import Link from "next/link";
import { useEffect } from "react";

export default function SinglePet({
  petToDisplay,
  owners,
  userRole,
}: {
  petToDisplay: Pet;
  owners: Owner[];
  userRole: string | undefined;
}) {
  useEffect(() => {
    const viewedPets = JSON.parse(localStorage.getItem("viewedPets") || "[]");

    const petExists = viewedPets.some((pet: Pet) => pet.id === petToDisplay.id);

    if (!petExists) {
      let newViewedPets;
      if (viewedPets.length === 3) {
        newViewedPets = [...viewedPets.slice(1), petToDisplay];
      } else {
        newViewedPets = [...viewedPets, petToDisplay];
      }

      localStorage.setItem("viewedPets", JSON.stringify(newViewedPets));
    } else {
      console.log("Pet already viewed");
    }
  }, [petToDisplay]);

  const petOwner = owners.find(
    (owner) => Number(owner.id) == petToDisplay.ownerid
  );

  return (
    <>
      <div className="bg-gray-100 p-10 rounded-lg shadow-lg border-4 border-black">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Hello! My Name is{" "}
            <span className="text-black">{petToDisplay.name}</span>!
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center border-r-4 border-black">
            <img
              src={petToDisplay.pictureurl || "/default-pet.jpg"}
              alt={petToDisplay.name}
              className="w-96 h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-between gap-6 p-6">
            <div className="border-b-4 border-black pb-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Some fun facts about me:
              </h2>
              <p className="text-gray-600">
                I am a <span className="font-medium">{petToDisplay.breed}</span>{" "}
                {petToDisplay.animal}!
              </p>
              <p className="text-gray-600">
                I am {petToDisplay.age} years old!
              </p>
            </div>

            <div className="border-b-4 border-black pb-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Description:
              </h2>
              <p className="text-gray-600">{petToDisplay.description}</p>
            </div>

            <div className="border-b-4 border-black pb-4 mt-4">
              <h2 className="text-2xl font-bold text-gray-500 mb-4">
                Wish to know more about{" "}
                <span className="text-black">{petToDisplay.name}</span>?
              </h2>
              <h3 className="text-lg text-gray-700 mb-4">
                Contact <span className="font-medium">{petOwner?.firstname}</span>{" "}
                now!
              </h3>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col items-start gap-5">
              <Link href={`/ownersPage/${petOwner?.id}`}>
                <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition">
                  Contact Owner
                </button>
              </Link>

              {userRole ? (
                userRole == "Adopter" ? (
                  <Link href={`/petAdoptionFormPage/${petToDisplay?.id}`}>
                    <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition">
                      Adopt {petToDisplay.name}
                    </button>
                  </Link>
                ) : (
                  <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition">
                    You need to be registered as an adopter to apply
                  </button>
                )
              ) : (
                <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition">
                  You need to sign in to submit an application
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
