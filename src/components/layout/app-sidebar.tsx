import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  Users,
  Building2,
  FileText,
  Boxes,
  Settings,
} from "lucide-react";
import { sidebarNavigation } from "@/config/navigation";

import { Logo } from "./logo";

export function AppSidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="border-b p-6">
        <Logo />
      </div>

      <nav className="flex-1 p-4">
        {sidebarNavigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="mb-2 flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-slate-100"
          >
            <item.icon size={18} />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
