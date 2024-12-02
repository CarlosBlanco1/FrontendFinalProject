export default function SingleProfile({
  user,
}: {
  user: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
  };
}) {
  return (
    <>
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
        <p className="font-semibold">ID:</p>
        <p>{user?.id}</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
        <p className="font-semibold">Name:</p>
        <p>
          {user?.firstname} {user?.lastname}
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
        <p className="font-semibold">Email:</p>
        <p>{user?.email}</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
        <p className="font-semibold">Phone:</p>
        <p>{user?.phone}</p>
      </div>
    </>
  );
}
