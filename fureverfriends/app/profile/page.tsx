import { validateAndGetUser } from "@/useServerActions/tokenValidation";

export default async function ProfilePage() {
  const user = await validateAndGetUser();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-gray-800">Profile Page</h1>

        {user ? (
          <div className="flex flex-col gap-4 text-gray-700">
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
          </div>
        ) : (
          <p className="text-gray-500 text-center">You are not logged in</p>
        )}
      </div>
    </div>
  );
}
