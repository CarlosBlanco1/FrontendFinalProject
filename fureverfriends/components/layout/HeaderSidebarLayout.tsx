import { ReactNode } from "react";

type HeaderSidebarLayoutProps = {
  children: ReactNode;
  header: ReactNode;
  sidebar: ReactNode;
};

export default function HeaderSidebarLayout({
  children,
  header,
  sidebar,
}: HeaderSidebarLayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
        {header}
      </header>

      <div className="flex flex-1">
        <aside className="w-64 bg-gray-200 p-4 border-r border-gray-300">
          {sidebar}
        </aside>

        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
