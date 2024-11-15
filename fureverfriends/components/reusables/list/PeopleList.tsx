"use client";

import { Adopter } from "@/models/Adopter";
import { Owner } from "@/models/Owner";
import ToastList from "@/components/toasts/ToastList";
import { useToastContext } from "@/components/toasts/useToastContext";

export default function PeopleList({
  people,
}: {
  people: Owner[] | Adopter[];
}) {
  const toastContext = useToastContext();
  console.log((people[0] as Owner).address ? "Owner" : "Adopter");

  return (
    <div className="flex flex-col gap-4">
      <div className="z-index-5">
        <ToastList
          data={toastContext.toasts}
          position={toastContext.position}
          removeToast={toastContext.removeToast}
        />
      </div>
      <div className="space-y-6">
        {people.map((person) => (
          <div
            key={person.id}
            className="flex gap-4 items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            ={" "}
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl font-semibold">
              {person.firstname[0]}
              {person.lastname[0]}
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {person.firstname} {person.lastname}
              </p>
              <p className="text-sm text-gray-500">{person.email}</p>
              <p className="text-sm text-gray-600">{person.phone}</p>
              {(person as Owner).address ? (
                <p className="text-sm text-gray-600">
                  {(person as Owner).address}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
