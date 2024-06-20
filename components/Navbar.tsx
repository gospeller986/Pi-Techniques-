"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarComponent() {
  return (

      <Navbar className="top-10" />

  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>

        <HoveredLink href="/">Home</HoveredLink>
        <HoveredLink href="/about">About</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/sw-app">Software Applications</HoveredLink>
            <HoveredLink href="/web-design">Website Designs</HoveredLink>
            <HoveredLink href="/seo">SEO</HoveredLink>
            <HoveredLink href="/it-infra">IT Infrastructure </HoveredLink>
          </div>
        </MenuItem>
        <HoveredLink href="/careers">Careers</HoveredLink>
        <HoveredLink href="/contact">Contact</HoveredLink>
      </Menu>
    </div>
  );
}
