import AddPetForm from "@/components/forms/AddPetForm";
import { createPetAction } from "@/useServerActions/petActions";

type AddPageProps = Promise<{ ownerId: string }>;

export default async function addAPetPage(props: { params: AddPageProps }) {
  const params = await props.params;
  const ownerId = params.ownerId;

  return (
    <>
      <AddPetForm handleSubmit={createPetAction} ownerId={ownerId}></AddPetForm>
    </>
  );
}
