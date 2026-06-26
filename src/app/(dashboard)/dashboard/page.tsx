import { siteConfig } from "@/config/site";

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p className="mt-2 text-slate-600">
        Welcome to {siteConfig.name}.
      </p>
    </>
  );
}