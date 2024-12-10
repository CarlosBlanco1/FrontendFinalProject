import { AdoptionApplication } from "@/models/AdoptionApplication";
import { Owner } from "@/models/Owner";
import { Pet } from "@/models/Pet";
import Link from "next/link";

export default function AdoptersApplicationsList({
  applications,
  owners,
  pets,
}: {
  applications: AdoptionApplication[];
  owners: Owner[];
  pets: Pet[];
}) {
  return (
    <div className="bg-black text-white px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Your Recently Submitted Applications
      </h1>
      <div className="space-y-8">
        {applications.map((application) => {
          const ownerForApplication = owners.find((o) => o.id == application.ownerid);
          const petForApplication = pets.find((p) => p.id == Number(application.petid));

          return (
            <div
              key={application.applicationid}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4">
                Application for: <span className="text-cyan-400">{petForApplication?.name}</span>
              </h2>
              <div className="mb-6">
                <h3 className="text-lg font-medium">Status:</h3>
                {application.status === "pending" ? (
                  <div className="px-4 py-2 rounded-full bg-yellow-500 text-yellow-100 text-center font-semibold">
                    PENDING (Estimated response time: 2 - 3 Days)
                  </div>
                ) : application.status === "rejected" ? (
                  <div className="px-4 py-2 rounded-full bg-red-500 text-red-100 text-center font-semibold">
                    We’re sorry, but your adoption request was rejected.
                  </div>
                ) : (
                  <div className="px-4 py-2 rounded-full bg-green-500 text-green-100 text-center font-semibold">
                    Congratulations! Your Adoption Request was approved!
                  </div>
                )}
              </div>
              <div className="mb-4">
                <Link href={`/ownersPage/${ownerForApplication?.id}`}>
                  <div className="text-cyan-400 hover:underline">
                    Have questions? Contact {ownerForApplication?.firstname}{" "}
                    {ownerForApplication?.lastname}.
                  </div>
                </Link>
              </div>
              <div>
                <Link
                  href={
                    application.status == "approved"
                      ? `nextStepsPage?status=approved&petName=${petForApplication?.name}`
                      : `nextStepsPage?status=rejected&petName=${petForApplication?.name}`
                  }
                >
                  <div className="block mt-4 px-6 py-3 text-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-md transition-all">
                    Learn More About the Next Steps
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
