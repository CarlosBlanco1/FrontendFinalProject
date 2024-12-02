import { Owner } from "@/models/Owner";
import { Pet } from "@/models/Pet";
import { ReusableForm } from "../reusables/input/ReusableForm";
import ReusableTextInput from "../reusables/input/ReusableTextInput";
import { AdoptionApplication } from "@/models/AdoptionApplication";
import { Adopter } from "@/models/Adopter";
import ReusableSelectInput from "../reusables/input/ReusableSelectInput";

export default function AdoptAPetForm({
  petOwner,
  petToAdopt,
  petAdopter,
  handleSubmit,
}: {
  petOwner: Owner;
  petToAdopt: Pet;
  petAdopter: Adopter;
  handleSubmit: (application: AdoptionApplication) => Promise<void>;
}) {
  return (
    <>
      <ReusableForm
        formTitle={`${petToAdopt.animal} Adoption Application Form`}
        onSubmitFunction={handleSubmit}
        serializeForm={(e: React.FormEvent<HTMLFormElement>) => {
          const formData = new FormData(e.currentTarget);

          let application: AdoptionApplication = {
            applicationId: "0",
            petId: `${petToAdopt.id}`,
            adopterId: `${petAdopter.id}`,
            ownerId: `${petOwner.id}`,
            message: `
        Adults in household and ages: ${formData.get("adults") as string}
        Children in household ang ages: ${formData.get("children") as string}
        Household Description: ${formData.get("household") as string}
        Allergies: ${formData.get("allergy") as string}
        Care Provision: ${formData.get("provision") as string} `,
            status: "pending",
            submittedAt: new Date(Date.now()),
          };

          return application;
        }}
        successUrl={"petsPage"}
      >
        <ReusableTextInput
          label={"How many adults are there in your family (with ages)?"}
          name={"adults"}
          placeholder={"i.e, 3 adults, aged 39, 46 and 45"}
        ></ReusableTextInput>
        <ReusableTextInput
          label={"How many children (ages)?"}
          name={"children"}
          placeholder={"i.e, 2 children aged 8 and 6"}
        ></ReusableTextInput>
        <ReusableSelectInput
          label={"Please describe your household"}
          name={"household"}
          options={["Active", "Noisy", "Quiet", "Average"]}
        ></ReusableSelectInput>
        <ReusableTextInput
          label={`Does anyone in the family have a known allergy to ${petToAdopt.animal}? Explain`}
          name={"allergy"}
          placeholder={"i.e, Yes, my husband does but he takes medicine daily"}
        ></ReusableTextInput>
        <ReusableTextInput
          label={`Do you have time to provide adequate love an attention to ${petToAdopt.name}? Explain`}
          name={"provision"}
          placeholder={"i.e, Yes, I'm a stay at home mom"}
        ></ReusableTextInput>
      </ReusableForm>
    </>
  );
}
