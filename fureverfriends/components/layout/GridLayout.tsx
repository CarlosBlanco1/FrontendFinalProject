import { ReactNode } from "react";

type GridLayoutProps = {
  children: ReactNode;
  columns?: number;
  gap?: string;
};

export default function GridLayout({
  children,
  columns = 3,
  gap = "1rem",
}: GridLayoutProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
      }}
      className="p-6"
    >
      {children}
    </div>
  );
}
