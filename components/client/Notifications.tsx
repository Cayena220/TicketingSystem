'use client';

const sampleNotifications = [
  { id: 1, title: 'Request #123', message: 'Your request is already responded as of ...', time: '9:41 AM Feb 25, 2026' },
  { id: 2, title: 'ICPR & DCPR Announcement', message: 'Lorem ipsum dolor sit amet, consectetur ...', time: '9:41 AM Feb 25, 2026' },
  { id: 3, title: 'Request #42', message: 'Your request is already responded as of ...', time: '9:41 AM Feb 25, 2026' },
  { id: 4, title: 'Technical Report Updates', message: 'Lorem ipsum dolor sit amet, consectetur ...', time: '9:41 AM Feb 25, 2026' },
  { id: 5, title: 'ICTD APP is now Available!', message: 'Experience the future technical tools for ...', time: '9:41 AM Feb 25, 2026' }
];

export default function Notifications() {
  const hasNotifications = sampleNotifications.length > 0;

  return (
    <div className="p-8 bg-[#f0fdf4] min-h-screen">
      <div className="rounded-2xl border border-emerald-200 bg-white p-4 text-emerald-900 font-semibold text-lg shadow-sm">Notification</div>
      <div className="mt-2 rounded-2xl border border-emerald-200 bg-white p-4 min-h-[calc(100vh-10rem)] shadow-sm">
        {!hasNotifications ? (
          <div className="flex flex-col items-center justify-center h-80 text-center text-slate-500">
            <div className="mb-4 h-24 w-24 rounded-full bg-slate-100 flex items-center justify-center text-4xl">🔔</div>
            <p className="text-xl font-semibold">No notification yet</p>
          </div>
        ) : (
          <div className="space-y-2">
            {sampleNotifications.map((note) => (
              <button key={note.id} className="w-full rounded-xl border border-slate-200 p-3 text-left hover:border-emerald-500 hover:shadow-sm transition">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-800">{note.title}</p>
                  <span className="text-xs text-slate-500">{'>'}</span>
                </div>
                <p className="text-sm text-slate-500 mt-0.5">{note.message}</p>
                <p className="text-[11px] text-slate-400 mt-1">{note.time}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
