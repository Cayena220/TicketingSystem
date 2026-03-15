'use client';

import { Ticket } from '@/types';

interface MyTicketsProps {
  tickets: Ticket[];
  onResponderClick: (responder: string) => void;
}

export default function MyTickets({ tickets, onResponderClick }: MyTicketsProps) {
  return (
    <div className="px-3 py-4 md:px-6 md:py-6 min-h-full">
      <div className="mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-emerald-900">
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-emerald-600">My Requests</p>
          <h1 className="text-2xl md:text-3xl font-bold text-emerald-900">Hardware Repair Support</h1>
        </div>
        <button className="text-xs sm:text-sm px-3 py-2 rounded-lg border border-emerald-300 bg-white text-emerald-700 hover:bg-emerald-50">Back</button>
      </div>

      <div className="space-y-4">
        {tickets.map((ticket) => {
          const statusStyle = ticket.status === 'completed'
            ? 'text-green-700 bg-green-100 border-green-300'
            : ticket.status === 'in-progress'
              ? 'text-amber-700 bg-amber-100 border-amber-300'
              : 'text-sky-700 bg-sky-100 border-sky-300';

          const indicatorColor = ticket.status === 'completed'
            ? 'bg-green-500'
            : ticket.status === 'in-progress'
              ? 'bg-amber-500'
              : 'bg-sky-500';

          return (
            <div key={ticket.id} className="border rounded-2xl p-4 bg-white shadow-sm border-emerald-200">
              <div className="flex flex-wrap justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-lg text-emerald-900">{ticket.title}</p>
                    <span className={`px-2 py-1 rounded-full border text-xs font-semibold ${statusStyle}`}>
                      {ticket.status === 'completed' ? 'Done' : ticket.status === 'in-progress' ? 'Processing' : 'Requested'}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-600 mt-1">TRID202602230001</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-emerald-600">{ticket.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} PM</p>
                  <p className="text-xs text-emerald-600">{ticket.createdAt.toLocaleDateString()}</p>
                </div>
              </div>

              <p className="mt-3 text-emerald-800">{ticket.description}</p>

              <div className="mt-3 border-t border-emerald-200 pt-3">
                <div className="flex items-center gap-2 text-sm text-emerald-800">
                  <span className="text-emerald-600">Response By:</span>
                  <button
                    onClick={() => onResponderClick(ticket.technician || 'Support Team')}
                    className="font-semibold text-emerald-700 underline hover:text-emerald-800"
                  >
                    {ticket.technician || 'Support Team'}
                  </button>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl border border-dashed border-emerald-200 bg-emerald-50">
                <div className="flex items-center justify-between text-xs text-emerald-700 font-semibold mb-2">
                  <span>Request Activity</span>
                  <span className="inline-flex items-center gap-1">
                    <span className={`h-2 w-2 rounded-full ${indicatorColor}`} />
                    {ticket.status === 'completed' ? 'Done' : ticket.status === 'in-progress' ? 'Processing' : 'Requested'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 border-t border-emerald-300" />
                  <div className="h-2 w-2 rounded-full bg-emerald-600" />
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <div className="mt-2 grid grid-cols-3 text-[11px] text-emerald-600">
                  <span className="text-left">Created</span>
                  <span className="text-center">Requested</span>
                  <span className="text-right">Processing</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
