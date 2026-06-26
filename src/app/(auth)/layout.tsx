import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            GH Medical Trauma
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Medical Products Management System
          </p>
        </div>

        {children}
      </div>
    </main>
  );
}