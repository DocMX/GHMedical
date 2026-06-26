export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
        GH
      </div>

      <div>
        <h2 className="font-bold">GH Medical</h2>

        <p className="text-xs text-slate-500">
          Trauma
        </p>
      </div>
    </div>
  );
}