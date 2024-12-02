import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { GiSelfLove } from "react-icons/gi";
import NavLink from "./NavLink";


export default async function TopNav() {
  return (
    <>
      <Navbar
        maxWidth="full"
        className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-600"
        classNames={{
          item: [
            "text-xl",
            "text-white",
            "uppercase",
            "data-[active=true]:text-yellow-200",
          ],
        }}
      >
        <NavbarBrand as={Link} href="/">
          <GiSelfLove
            size={40}
            className="text-gray-200"
          />
          <div className="font-bold text-3xl flex">
            <span className="text-gray-200">
              Mango
            </span>
          </div>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavLink href="/Matches"
        label="Matches"
        />
          <NavLink href="/Lists"
          label="Lists"
          />
            <NavLink href="/messages"
          label="Messages"
          />
        </NavbarContent>

        <NavbarContent justify="end">
          <Button
            as={Link}
            href="/login"
            variant="bordered"
            className="text-white"
          >
            Login
          </Button>
          <Button
            as={Link}
            href="/register"
            variant="bordered"
            className="text-white"
          >
            Register
          </Button>
        </NavbarContent>
        
      </Navbar>
    </>
  );
}