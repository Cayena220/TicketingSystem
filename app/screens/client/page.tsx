'use client';

import { useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import ClientDashboard from '../../../components/client/ClientDashboard';
import MyTickets from '../../../components/client/MyTickets';
import MessagesPanel from '../../../components/client/MessagesPanel';
import ActivityLogs from '../../../components/client/ActivityLogs';
import Notifications from '../../../components/client/Notifications';
import { Ticket } from '@/types';

export default function ClientPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [selectedResponder, setSelectedResponder] = useState<string | null>(null);
  const [newTicket, setNewTicket] = useState({
    title: '',
    description: '',
    priority: 'medium' as 'low' | 'medium' | 'high'
  });

  const stats = {
    totalTickets: 24,
    completedTickets: 18,
    pendingTickets: 3,
    inProgressTickets: 3,
    averageResolutionTime: '2.5 days',
    satisfactionRate: '95%'
  };

  const recentTickets: Ticket[] = [
    { id: '1', title: 'Computer not starting', description: 'My computer won\'t turn on after the recent update', status: 'completed', technician: 'John Doe', createdAt: new Date('2024-01-15'), priority: 'high' },
    { id: '2', title: 'Software installation', description: 'Need to install Adobe Creative Suite', status: 'in-progress', technician: 'Jane Smith', createdAt: new Date('2024-01-12'), priority: 'medium' },
    { id: '3', title: 'Network connectivity issues', description: 'WiFi keeps disconnecting randomly', status: 'pending', technician: 'Jane Smith', createdAt: new Date('2024-01-10'), priority: 'high' }
  ];

  const submitTicket = () => {
    if (newTicket.title && newTicket.description) {
      console.log('Submitting ticket:', newTicket);
      setNewTicket({ title: '', description: '', priority: 'medium' });
      setShowTicketModal(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <ClientDashboard stats={stats} recentTickets={recentTickets} onOpenModal={() => setShowTicketModal(true)} />;
      case 'tickets':
        return <MyTickets tickets={recentTickets} onResponderClick={(responder) => { setSelectedResponder(responder); setActiveTab('messages'); }} />;
      case 'messages':
        return <MessagesPanel selectedResponder={selectedResponder} />;
      case 'notifications':
        return <Notifications />;
      case 'logs':
        return <ActivityLogs />;
      default:
        return <ClientDashboard stats={stats} recentTickets={recentTickets} onOpenModal={() => setShowTicketModal(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-emerald-50 via-white to-emerald-100">
      <div className="flex">
        <Sidebar role="client" activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex-1">
          <div className="sticky top-0 z-20 border-b border-emerald-200 bg-white/80 backdrop-blur p-4 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-500">Client Panel</p>
              <h1 className="text-2xl font-bold text-emerald-900">Support Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 rounded-full border border-emerald-300 bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm hover:bg-emerald-50" onClick={() => setActiveTab('notifications')}>
                🔔 Notifications
                <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white">3</span>
              </button>
            </div>
          </div>
          <div className="p-4 pt-6">{renderContent()}</div>
        </div>
      </div>

      {showTicketModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/bg.jpg)' }}>
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Submit New Ticket</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input type="text" value={newTicket.title} onChange={(e) => setNewTicket({ ...newTicket, title: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Brief description of the issue" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                <select value={newTicket.priority} onChange={(e) => setNewTicket({ ...newTicket, priority: e.target.value as 'low' | 'medium' | 'high' })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea value={newTicket.description} onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32" placeholder="Detailed description of the issue" />
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button onClick={() => setShowTicketModal(false)} className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">Cancel</button>
              <button onClick={submitTicket} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Submit Ticket</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
