"use client";
import { Adopter } from "@/models/Adopter";
import { AdoptionApplication } from "@/models/AdoptionApplication";
import { Pet } from "@/models/Pet";
import ToastList from "../toasts/ToastList";
import { useToastContext } from "../toasts/useToastContext";
import Link from "next/link";

export default function AdoptionFormsList({
  adoptionForms,
  pets,
  adopters,
}: {
  adoptionForms: AdoptionApplication[];
  pets: Pet[];
  adopters: Adopter[];
}) {

  const toastContext = useToastContext();

  return (
    <>
      <div className="flex gap-3">
        <div className="z-index-5">
          <ToastList
            data={toastContext.toasts}
            position={toastContext.position}
            removeToast={toastContext.removeToast}
          />
        </div>
        {adoptionForms.map((af) => {
          const pet = pets.find((p) => p.id === Number(af.petid));
          const adopter = adopters.find((a) => a.id === af.adopterid);
          console.log(af)

          return (
            pet &&
            adopter && (
              <Link href={`/adoptionApplication/${af?.applicationid}`}>
                <div className="flex flex-col gap-4 bg-white shadow-lg text-gray-800 rounded-lg w-full p-6">
                  <h2 className="text-xl font-extrabold text-blue-600">
                    Adoption Request for {pet.name}
                  </h2>
                  <h4 className="text-lg font-medium">
                    Submitted by:{" "}
                    <span className="text-gray-700">
                      {adopter.firstname} {adopter.lastname}
                    </span>
                  </h4>
                  <h5 className="text-sm text-gray-500">
                    Submitted on: {new Date(af.submittedat).toLocaleString()}
                  </h5>
                  <div className="mt-4">
                    {af.status === "pending" ? (
                      <div className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-center font-semibold">
                        PENDING
                      </div>
                    ) : af.status === "rejected" ? (
                      <div className="px-4 py-2 rounded-full bg-red-100 text-red-700 text-center font-semibold">
                        REJECTED
                      </div>
                    ) : (
                      <div className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-center font-semibold">
                        APPROVED
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            )
          );
        })}
      </div>
    </>
  );
}
