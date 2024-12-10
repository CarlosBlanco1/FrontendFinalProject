"use client";

import { Pet } from "@/models/Pet";
import Link from "next/link";
import { useToastContext } from "../toasts/useToastContext";
import ToastList from "../toasts/ToastList";

export default function PetList({ pets }: { pets: Pet[] }) {
  const toastContext = useToastContext();

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="z-index-5">
          <ToastList
            data={toastContext.toasts}
            position={toastContext.position}
            removeToast={toastContext.removeToast}
          />
        </div>
        <div className="flex flex-col gap-4">
          {pets.map((pet) => {
            return (
              <>
                <Link href={`petsPage/${pet.id}`}>
                  <div
                    key={pet.id}
                    className="rounded p-3 bg-gray-200 flex gap-2 text-black"
                  >
                    <div >
                      <img className="w-20 h-20 rounded-full font-semibold bg-white flex items-center justify-center text-gray-500 text-xl" src={pet.pictureurl!} alt=""/>
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
      </div>
    </>
  );
}
