import PeopleList from "@/components/reusables/list/PeopleList";
import { adopterService } from "@/services/adopterService";

export default async function AdoptersPage() {
  const adopters  = await adopterService.getAllAdopters()

  return (
    <>
      <h2 className="text-5xl font-semibold text-white mb-5">Adopters Page</h2>
      <PeopleList people={adopters} />
    </>
  );
}
