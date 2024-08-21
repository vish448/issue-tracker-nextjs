"use client";

import Link from "next/link";
import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import classnames from "classnames";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Avatar, Box, Container, DropdownMenu, Flex } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  const links = [
    { label: "Issues", href: "/issues/list" },
    { label: "Service Report", href: "/servicereport" },
    { label: "Admin", href: "/admin" },
  ];

  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
      <Flex justify="between">
        <Flex align="center" gap="3">
          <Link href="/" className="flex gap-2">
            {" "}
            <FaHeartPulse className="text-lg" />
            CI
          </Link>
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  className={classnames({
                    "text-zinc-900": link.href === currentPath,
                    "text-zinc-500": link.href !== currentPath,
                    "hover:text-zinc-800 transition-colors": true,
                  })}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Flex>
        <Box>
          {status === "authenticated" && (
            //<Link href={"/api/auth/signout"}>Log out</Link>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Avatar src={session.user!.image!} fallback="?" size="2" radius="full" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Label>
                  {session.user?.email}
                </DropdownMenu.Label>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          )}
          {status === "unauthenticated" && (
            <Link href={"/app/auth/signin"}>Log In</Link>
          )}
        </Box>
      </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
