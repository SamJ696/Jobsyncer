"use client";
import React from "react";
import logo from "@/assets/logo.jpg";
import Link from "next/link";
import Image from "next/image";
import links from "@/utils/links";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

function Sidebar() {
  const pathName = usePathname();
  return (
    <aside className="py-4 px-8 bg-muted h-full">
      <Image src={logo} alt="Logo" className="mx-auto h-20 w-44" />
      <div className="flex flex-col mt-20 gap-y-4">
        {links.map((link) => {
          return (
            <Button
              asChild
              key={link.href}
              variant={pathName === link.href ? "default" : "link"}
            >
              <Link href={link.href} className="flex items-center gap-x-2">
                {link.icon} <span className="capitalize">{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
