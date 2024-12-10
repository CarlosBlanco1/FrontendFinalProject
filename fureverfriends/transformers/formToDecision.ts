export default function formToDecision(
  event: React.FormEvent<HTMLFormElement>
) {
  const formData = new FormData(event.currentTarget);

  return formData.get("decision") as string;
}
