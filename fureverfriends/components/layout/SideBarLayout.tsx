import { ReactNode } from "react";

type SidebarLayoutProps = {
  children: ReactNode;
  sidebar: ReactNode;
};

export default function SidebarLayout({ children, sidebar }: SidebarLayoutProps) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300">
        {sidebar}
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
