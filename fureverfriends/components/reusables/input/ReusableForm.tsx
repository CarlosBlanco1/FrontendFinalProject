"use client";

import { useToastContext } from "@/components/toasts/useToastContext";
import { useRouter } from "next/navigation";

export function ReusableForm({
  formTitle,
  buttonText,
  onSubmitFunction,
  serializeForm,
  children,
  successUrl,
}: {
  formTitle: string;
  buttonText: string;
  onSubmitFunction: (obj: any) => Promise<void>;
  serializeForm: (event: React.FormEvent<HTMLFormElement>) => any;
  children: React.ReactNode;
  successUrl: string;
}) {
  const toast = useToastContext();
  const router = useRouter();

  return (
    <>
      <form
        onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          const objectToSubmit = serializeForm(event);

          try {
            await onSubmitFunction(objectToSubmit);
            toast.showToast("Operation Sucessful", "success");
          } catch (error) {
            {
              error instanceof Error &&
                toast.showToast("Not Successful Operation", "failure");
            }
          }

          router.push(`/${successUrl}`);
        }}
        className="bg-white flex flex-col gap-4 py-8 px-9 text-black"
      >
        <h2 className="text-black text-xl self-center font-bold">{formTitle}</h2>
        <hr className="border-t-3 border-black w-full"></hr>
        {children}
        <button
          type="submit"
          className="text-yellow-500 border border-yellow-500 hover:text-white hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center transition-all duration-300 ease-in-out"
        >
          {buttonText}
        </button>
      </form>
    </>
  );
}
