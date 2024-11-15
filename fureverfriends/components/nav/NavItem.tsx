"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavItem({
  text,
  icon,
  link,
}: {
  text: string;
  icon: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <div className="flex gap-1 items-center">
        <Image src={icon} alt={text} width={24} height={24} />
        <p>{text}</p>
      </div>
    </Link>
  );
}
