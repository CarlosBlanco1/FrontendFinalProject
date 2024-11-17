"use client";

import { LogInLogOut } from "@/authentication/AuthSetUp";
import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <div className="flex gap-4 items-center bg-black">
        <NavItem text="Home" icon="/home.svg" link="/"/>
        <NavItem text="Owners" icon="/owners.svg" link="/ownersPage" />
        <NavItem text="Adopters" icon="/adopters.svg" link="/adoptersPage" />
        <NavItem text="Pet Page" icon="/pet.svg" link="/petsPage"></NavItem>
        <NavItem text="My Profile" icon="/profile.svg" link="/profile" />
        <LogInLogOut></LogInLogOut>
    </div>
  );
}
