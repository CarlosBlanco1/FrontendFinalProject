export default function formToOwner(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);

    return {
        id: "0",
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        address: formData.get("address") as string
    };
}