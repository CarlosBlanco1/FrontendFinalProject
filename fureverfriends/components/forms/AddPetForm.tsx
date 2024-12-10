"use client";

import { Pet } from "@/models/Pet";
import formToPet from "@/transformers/formToPet";
import { ReusableForm } from "../reusables/input/ReusableForm";
import ReusableTextInput from "../reusables/input/ReusableTextInput";

export default function AddPetForm({
  handleSubmit,
  ownerId,
}: {
  handleSubmit: (pet: Pet) => Promise<void>;
  ownerId: string;
}) {
  return (
    <>
      <ReusableForm
        formTitle={"Add a new Pet"}
        buttonText="Add New Pet"
        onSubmitFunction={handleSubmit}
        serializeForm={(e: React.FormEvent<HTMLFormElement>) => {
          const pet = formToPet(e);
          pet.ownerid = ownerId;
          return pet;
        }}
        successUrl={"petsPage"}
      >
        <ReusableTextInput
          label="What type of animal is it"
          name="animal"
          placeholder="i.e., Dog, Cat, Snake, Chicken"
        />
        <ReusableTextInput
          label="What's the pet's name?"
          name="name"
          placeholder="i.e., Sparky, Noodles, Snoopy"
        />
        <ReusableTextInput
          label="What's the breed of your animal"
          name="breed"
          placeholder="i.e., Labrador Retriever, Persian Cat, German Shepherd, Siamese Cat"
        />
        <ReusableTextInput
          label="What's your pet's age (in years)"
          name="age"
          placeholder="i.e., 1, 2, 3, 4, 5"
        />
        <ReusableTextInput
          label="Provide a picture url for your pet xd"
          name="pictureurl"
          placeholder="i.e., https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg"
        />
        <ReusableTextInput
          label={"Provide a brief description of your pet"}
          name={"description"}
          placeholder={"i.e., Friendly and loves people, Curious and playful"}
        ></ReusableTextInput>
      </ReusableForm>
    </>
  );
}
