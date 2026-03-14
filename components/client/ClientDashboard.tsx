'use client';

import { Ticket } from '@/types';

interface ClientDashboardProps {
  stats: {
    totalTickets: number;
    completedTickets: number;
    pendingTickets: number;
    inProgressTickets: number;
    averageResolutionTime: string;
    satisfactionRate: string;
  };
  recentTickets: Ticket[];
  onOpenModal: () => void;
}

export default function ClientDashboard({ stats, recentTickets, onOpenModal }: ClientDashboardProps) {
  return (
    <div className="p-8 bg-[#ecfdf3] min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-emerald-900 mb-2">Client Dashboard</h1>
        <p className="text-emerald-700">Welcome back! Here&apos;s an overview of your support requests.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-600">Total Tickets</p>
              <p className="text-3xl font-bold text-emerald-900">{stats.totalTickets}</p>
            </div>
            <div className="text-3xl">🎫</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-600">Completed</p>
              <p className="text-3xl font-bold text-emerald-900">{stats.completedTickets}</p>
            </div>
            <div className="text-3xl">✅</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-600">In Progress</p>
              <p className="text-3xl font-bold text-emerald-900">{stats.inProgressTickets}</p>
            </div>
            <div className="text-3xl">🔄</div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-600">Pending</p>
              <p className="text-3xl font-bold text-emerald-900">{stats.pendingTickets}</p>
            </div>
            <div className="text-3xl">⏳</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
          <h3 className="text-lg font-semibold text-emerald-700 mb-2">Average Resolution Time</h3>
          <p className="text-2xl font-bold text-emerald-900">{stats.averageResolutionTime}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
          <h3 className="text-lg font-semibold text-emerald-700 mb-2">Satisfaction Rate</h3>
          <p className="text-2xl font-bold text-emerald-900">{stats.satisfactionRate}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Tickets</h3>
        <div className="space-y-4">
          {recentTickets.map((ticket) => (
            <div key={ticket.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{ticket.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{ticket.description}</p>
                <div className="flex items-center mt-2 space-x-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    ticket.status === 'completed' ? 'bg-green-100 text-green-800' :
                    ticket.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {ticket.status}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    ticket.priority === 'high' ? 'bg-red-100 text-red-800' :
                    ticket.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {ticket.priority} priority
                  </span>
                  <span className="text-sm text-gray-500">{ticket.createdAt.toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onOpenModal}
          className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors text-lg font-semibold shadow-lg"
        >
          🚀 Submit New Ticket Request
        </button>
      </div>
    </div>
  );
}
