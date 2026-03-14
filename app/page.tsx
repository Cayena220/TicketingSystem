export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-100 text-slate-800">
      <div className="mx-auto w-full max-w-4xl px-4 py-6">
        <header className="rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-600 p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center font-bold">J</div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">User</p>
                <p className="text-2xl font-bold">Doe, John N.</p>
                <p className="text-xs text-emerald-200">ICTD</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <button className="rounded-full bg-white/20 p-2">🔔</button>
              <button className="rounded-full bg-white/20 p-2">✉️</button>
            </div>
          </div>
        </header>

        <main className="mt-4 grid gap-3 md:grid-cols-2">
          <section className="rounded-2xl bg-white p-4 shadow-md border border-emerald-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg font-semibold">Announcement #3</p>
                <p className="text-xs text-slate-500">January 1, 2026</p>
              </div>
              <span className="rounded-full bg-green-500 px-2 py-1 text-xs text-white">📅</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet feugiat ut integer sed tincidunt sed.</p>
          </section>

          <section className="rounded-2xl bg-slate-50 p-4 shadow-md border border-slate-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg font-semibold">Announcement #2</p>
                <p className="text-xs text-slate-500">February 15, 2026</p>
              </div>
              <span className="rounded-full bg-green-500 px-2 py-1 text-xs text-white">📅</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet feugiat ut integer sed tincidunt sed.</p>
          </section>

          <section className="md:col-span-2 rounded-2xl bg-slate-50 p-4 shadow-md border border-slate-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg font-semibold">Announcement</p>
                <p className="text-xs text-slate-500">January 1, 2026</p>
              </div>
              <span className="rounded-full bg-green-500 px-2 py-1 text-xs text-white">📅</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio amet feugiat ut integer sed tincidunt sed. Fusce vulputate sed commodo, sed lorem. Mi semper orci, semper vestibulum.</p>
          </section>
        </main>

        <footer className="mt-4 rounded-2xl bg-white p-3 shadow-inner border border-slate-200">
          <div className="flex items-center justify-around text-slate-600">
            <button className="flex flex-col items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900">📊<span>Chart</span></button>
            <button className="flex flex-col items-center gap-1 text-xs font-medium text-emerald-700">🏠<span>Home</span></button>
            <button className="flex flex-col items-center gap-1 text-xs font-medium text-slate-500">✨<span>AI</span></button>
          </div>
        </footer>
      </div>
    </div>
  );
}
