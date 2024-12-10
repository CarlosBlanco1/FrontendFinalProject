"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NextStepsContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") as string;
  const petName = searchParams.get("petName") as string;

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {status === "approved" ? (
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-extrabold text-green-400 mb-6">
            Congratulations! 🎉
          </h1>
          <p className="text-xl mb-4">
            Your adoption request for{" "}
            <span className="font-bold text-cyan-400">{petName}</span> has been{" "}
            <span className="text-green-400">accepted</span>!
          </p>
          <p className="text-lg text-gray-300">Here’s what you need to do next:</p>
          <ul className="list-disc list-inside text-left mt-6 space-y-4 text-lg text-gray-300">
            <li>
              📧 <span className="font-semibold">Check your email</span> for
              detailed instructions about the adoption process.
            </li>
            <li>
              🗓️{" "}
              <span className="font-semibold">
                Schedule a pickup or home visit
              </span>{" "}
              with the shelter team at your earliest convenience.
            </li>
            <li>
              📋{" "}
              <span className="font-semibold">
                Prepare the required documents
              </span>
              , such as ID or proof of residence.
            </li>
            <li>
              💖 Get ready to welcome{" "}
              <span className="font-bold text-cyan-400">{petName}</span> into
              your family!
            </li>
          </ul>
          <p className="mt-8 text-gray-500">
            If you have any questions or need assistance, don’t hesitate to
            reach out to us.
          </p>
        </div>
      ) : (
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-extrabold text-red-400 mb-6">
            We&apos;re Sorry 😔
          </h1>
          <p className="text-xl mb-4">
            Unfortunately, your adoption request for{" "}
            <span className="font-bold text-cyan-400">{petName}</span> was{" "}
            <span className="text-red-400">not successful</span>.
          </p>
          <p className="text-lg text-gray-300">
            But don&apos;t worry, there are still many pets waiting for a loving
            home like yours! Here&apos;s what you can do:
          </p>
          <ul className="list-disc list-inside text-left mt-6 space-y-4 text-lg text-gray-300">
            <li>
              🐾{" "}
              <span className="font-semibold">
                Browse through our available pets
              </span>{" "}
              to find another furry friend.
            </li>
            <li>
              🔄{" "}
              <span className="font-semibold">
                Review and update your profile or application
              </span>
              , if needed.
            </li>
            <li>
              💌 Reach out to us if you’d like feedback or assistance with your
              next steps.
            </li>
          </ul>
          <Link
            href="/petsPage"
            className="mt-6 inline-block px-6 py-3 text-lg text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition-all"
          >
            Browse More Pets
          </Link>
        </div>
      )}
    </div>
  );
}
