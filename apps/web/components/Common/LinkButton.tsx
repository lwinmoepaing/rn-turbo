"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { PropsWithChildren } from "react";
import Button from "ui/src/Atoms/Button/Button.web";

interface LinkButtonProps extends PropsWithChildren {
  href: string;
  title: string;
  className?: string;
  variant?: "default" | "dark" | "outlined" | null;
  isNeededAuth?: boolean;
}
function LinkButton({ href, title, className, variant }: LinkButtonProps) {
  const {auth} = useAuth()
  return (
    <Link href={!!auth ? href : "/login"}>
      <Button variant={variant} className={className} title={title} />
    </Link>
  );
}
export default LinkButton;
