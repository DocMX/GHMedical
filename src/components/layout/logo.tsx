export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img src="/logo.jpg" alt="Logo" className="h-10 w-10 rounded-lg" />

      <div>
        <h2 className="font-bold text-lg">Plataforma</h2>

        <p className="text-xs text-slate-500">de cotizaciones</p>
      </div>
    </div>
  );
}
