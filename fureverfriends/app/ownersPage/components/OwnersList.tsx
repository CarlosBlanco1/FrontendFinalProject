"use client";

import { Owner } from "@/app/models/Owner";
import ToastList from "@/app/toasts/ToastList";
import { useToastContext } from "@/app/toasts/useToastContext";

export default function OwnersList({ owners }: { owners: Owner[] }) {
  const toastContext = useToastContext();

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
        {owners.map((owner) => (
          <div
            key={owner.id}
            className="flex gap-4 items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            ={" "}
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl font-semibold">
              {owner.firstname[0]}
              {owner.lastname[0]}
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">
                {owner.firstname} {owner.lastname}
              </p>
              <p className="text-sm text-gray-500">{owner.email}</p>
              <p className="text-sm text-gray-600">{owner.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
