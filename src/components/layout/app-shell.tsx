import { ReactNode } from "react";

import { AppNavbar } from "./app-navbar";
import { AppSidebar } from "./app-sidebar";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <AppSidebar />

      <div className="flex flex-1 flex-col">
        <AppNavbar />

        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}