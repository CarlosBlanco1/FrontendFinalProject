import { ReactNode } from "react";

type CenteredLayoutProps = {
  children: ReactNode;
};

export default function CenteredLayout({ children }: CenteredLayoutProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-md">{children}</div>
    </div>
  );
}
