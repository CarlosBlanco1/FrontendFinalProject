"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Link href="/ownersPage">
        <div className="flex flex-col items-center justify-center gap-4 bg-white shadow-md rounded-lg p-4">
          <Image
            src="/globe.svg"
            width={48}
            height={48}
            alt="profile"
            className="rounded-full border border-gray-300"
          />
          <div className="text-gray-800 font-semibold">
            See owners
          </div>
        </div>
      </Link>
    </>
  );
}
