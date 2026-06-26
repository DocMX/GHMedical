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

import { Logo } from "./logo";

const menu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    href: "/products",
    icon: Package,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Suppliers",
    href: "/suppliers",
    icon: Building2,
  },
  {
    title: "Quotations",
    href: "/quotations",
    icon: FileText,
  },
  {
    title: "Inventory",
    href: "/inventory",
    icon: Boxes,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="border-b p-6">
        <Logo />
      </div>

      <nav className="flex-1 p-4">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="mb-2 flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-slate-100"
          >
            <item.icon size={18} />
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}