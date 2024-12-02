export default function formToApplication(
  event: React.FormEvent<HTMLFormElement>
) {
  const formData = new FormData(event.currentTarget);

  return {
    message: ((formData.get("firstName") as string) +
      formData.get("firstName")) as string,
    status: "pending",
    submittedAt: new Date (Date.now()),
  };
}
