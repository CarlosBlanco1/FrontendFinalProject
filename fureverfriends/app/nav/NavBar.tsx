import { LogInLogOut } from "@/authentication/AuthSetUp";
import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <div className="flex gap-4 items-center bg-black">
        <NavItem text="Home" icon="/home.svg" link="/"/>
        <NavItem text="Owners" icon="/owners.svg" link="/ownersPage" />
        <LogInLogOut></LogInLogOut>
    </div>
  );
}