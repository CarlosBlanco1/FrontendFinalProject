"use client";

import { useToastContext } from "@/components/toasts/useToastContext";
import { useRouter } from "next/navigation";

export function ReusableForm({
  formTitle,
  onSubmitFunction,
  serializeForm,
  children,
  successUrl,
}: {
  formTitle: string;
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
              toast.showToast("Not Successful Operation", "failure");
            }
            
            router.push(`/${successUrl}`);
          }}
          className="bg-white flex flex-col gap-4 py-8 px-9"
        >
          <h2 className="text-black text-xl self-center">{formTitle}</h2>
          {children}
          <button
            className="bg-yellow-400 p-3 text-lg text-black rounded-lg hover:bg-yellow-500 transition"
            type="submit"
          >
            Submit Form
          </button>
        </form>
    </>
  );
}
