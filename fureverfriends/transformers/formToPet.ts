export default function formToPet(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);

    return {
        id: "0",
        ownerid: "0",
        animal: formData.get("animal") as string,
        name: formData.get("name") as string,
        breed: formData.get("breed") as string,
        age: formData.get("age") as string,
        pictureurl: formData.get("pictureurl") as string,
        description: formData.get("description") as string
    };
}