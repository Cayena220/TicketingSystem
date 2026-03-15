import LoginCard from "../components/LoginCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-4 py-10">
        <div className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <div className="flex flex-col justify-center gap-4 text-slate-900">
              <p className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-500">ICTD Ticketing System</p>
              <h1 className="text-3xl font-bold md:text-4xl">Secure login for support requests</h1>
              <p className="max-w-lg text-slate-500">Sign in to create tickets, track progress, and collaborate with technicians.</p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-1">Fast Ticketing</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Easy to navigate</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Brought to you by ICTD dept</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <LoginCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
