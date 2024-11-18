import { Owner } from "@/models/Owner";
import { Pet } from "@/models/Pet";
import Link from "next/link";

export default function SinglePet({
  petToDisplay,
  owners,
}: {
  petToDisplay: Pet;
  owners: Owner[];
}) {
  const petOwner = owners.find(
    (owner) => Number(owner.id) == petToDisplay.ownerid
  );

  return (
    <>
      <div className="bg-gray-100 p-10 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Hello! My Name is{" "}
            <span className="text-black">{petToDisplay.name}</span>!
          </h1>
        </div>

        <div className="flex gap-6">
          <div className="w-24 h-24 bg-black text-white text-4xl font-bold flex items-center justify-center rounded-full">
            {petToDisplay.name[0].toUpperCase()}
            {petToDisplay.name[1].toUpperCase()}
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div>
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

            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Description:
              </h2>
              <p className="text-gray-600">{petToDisplay.description}</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-500 mb-4">
            Wish to know more about{" "}
            <span className="text-black">{petToDisplay.name}</span>?
          </h2>
          <h3 className="text-lg text-gray-700 mb-4">
            Contact <span className="font-medium">{petOwner?.firstname}</span>{" "}
            now!
          </h3>
          <Link href={`/ownersPage/${petOwner?.id}`}>
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition">
              Contact Owner
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
