"use client";
import { useFormStatus } from "react-dom";
import logout from "@/actions/login/logout-action";

export function ButtonLogout({ children, className }: any) {
  const status = useFormStatus();
  return (
    <form action={logout}>
      <button type="submit" disabled={status.pending} className={className}>
        {children}
      </button>
    </form>
  );
}
