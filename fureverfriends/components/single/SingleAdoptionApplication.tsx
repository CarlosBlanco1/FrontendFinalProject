"use client";

import { Adopter } from "@/models/Adopter";
import { AdoptionApplication } from "@/models/AdoptionApplication";
import { Pet } from "@/models/Pet";
import { ReusableForm } from "../reusables/input/ReusableForm";
import ReusableSelectInput from "../reusables/input/ReusableSelectInput";
import formToDecision from "@/transformers/formToDecision";
import { updateApplicationStatusAction } from "@/useServerActions/adoptionApplicationActions";

export default function SingleAdoptionApplication({
  application,
  pet,
  adopter,
}: {
  application: AdoptionApplication;
  pet: Pet;
  adopter: Adopter;
}) {
  console.log(JSON.stringify(application.message));
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 bg-white p-5 rounded-lg">
          Application for: {pet.name}
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Adopter Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Potential Adopter: {adopter.firstname} {adopter.lastname}
            </h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-600">Contact:</h3>
              <p className="text-gray-800">{adopter.email}</p>
              <p className="text-gray-800">{adopter.phone}</p>
            </div>
          </div>

          {/* Application Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Application Description:
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Submitted at:</strong>{" "}
              {new Date(application.submittedat).toLocaleString()}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Current Status:</strong> {application.status}
            </p>
            <p className="text-gray-600">
              <strong>Adoption Questionnaire:</strong>
            </p>
            {application.message && (
              <p
                className="text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: application.message.replace(/\n/g, "<br />"),
                }}
              />
            )}{" "}
          </div>

          {/* Review Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2">
            <ReusableForm
              formTitle={"Review Adoption Application"}
              buttonText={"Submit Decision"}
              onSubmitFunction={updateApplicationStatusAction}
              serializeForm={(e: React.FormEvent<HTMLFormElement>) => {
                const newStatus = formToDecision(e);
                const applicationToUpdateId = Number(application.applicationid);
                return { newStatus, applicationToUpdateId };
              }}
              successUrl={"adoptionApplicationDashboard"}
            >
              <ReusableSelectInput
                label={"Finalize Adoption Status"}
                name={"decision"}
                options={["approved", "rejected"]}
              />
            </ReusableForm>
          </div>
        </div>
      </div>
    </>
  );
}
