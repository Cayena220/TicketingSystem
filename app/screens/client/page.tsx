"use client";

import { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ClientDashboard from "../../../components/client/ClientDashboard";
import MyTickets from "../../../components/client/MyTickets";
import MessagesPanel from "../../../components/client/MessagesPanel";
import ActivityLogs from "../../../components/client/ActivityLogs";
import Notifications from "../../../components/client/Notifications";
import { Ticket } from "@/types";

export default function ClientPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedResponder, setSelectedResponder] = useState<string | null>(
    null,
  );
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    priority: "medium" as "low" | "medium" | "high",
  });

  const stats = {
    totalTickets: 24,
    completedTickets: 18,
    pendingTickets: 3,
    inProgressTickets: 3,
    averageResolutionTime: "2.5 days",
    satisfactionRate: "95%",
  };

  const recentTickets: Ticket[] = [
    {
      id: "1",
      title: "Computer not starting",
      description: "My computer won't turn on after the recent update",
      status: "completed",
      technician: "John Doe",
      createdAt: new Date("2024-01-15"),
      priority: "high",
    },
    {
      id: "2",
      title: "Software installation",
      description: "Need to install Adobe Creative Suite",
      status: "in-progress",
      technician: "Jane Smith",
      createdAt: new Date("2024-01-12"),
      priority: "medium",
    },
    {
      id: "3",
      title: "Network connectivity issues",
      description: "WiFi keeps disconnecting randomly",
      status: "pending",
      technician: "Jane Smith",
      createdAt: new Date("2024-01-10"),
      priority: "high",
    },
  ];

  const submitTicket = () => {
    if (newTicket.title && newTicket.description) {
      console.log("Submitting ticket:", newTicket);
      setNewTicket({ title: "", description: "", priority: "medium" });
      setShowTicketModal(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <ClientDashboard
            stats={stats}
            recentTickets={recentTickets}
            onOpenModal={() => setShowTicketModal(true)}
          />
        );
      case "tickets":
        return (
          <MyTickets
            tickets={recentTickets}
            onResponderClick={(responder) => {
              setSelectedResponder(responder);
              setActiveTab("messages");
            }}
          />
        );
      case "messages":
        return <MessagesPanel selectedResponder={selectedResponder} />;
      case "notifications":
        return <Notifications />;
      case "logs":
        return <ActivityLogs />;
      default:
        return (
          <ClientDashboard
            stats={stats}
            recentTickets={recentTickets}
            onOpenModal={() => setShowTicketModal(true)}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-emerald-50 via-white to-emerald-100">
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-20 bg-black/30 md:hidden"
        />
      )}

      <div className="flex">
        {mobileMenuOpen && (
          <div className="fixed inset-y-0 left-0 z-30 w-56 overflow-y-auto bg-white/95 shadow-xl md:hidden">
            <Sidebar
              role="client"
              activeTab={activeTab}
              onTabChange={setActiveTab}
              onNavigate={() => setMobileMenuOpen(false)}
            />
          </div>
        )}

        <div className="hidden md:block w-56 h-screen sticky top-0 left-0 border-r border-emerald-200 bg-white/95 shadow-xl overflow-y-auto">
          <Sidebar
            role="client"
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onNavigate={() => setMobileMenuOpen(false)}
          />
        </div>

        <div className="flex-1 md:ml-56">
          <header className="sticky top-0 z-20 border-b border-emerald-200 bg-white/90 backdrop-blur p-3 md:p-4 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="rounded-md border border-emerald-300 bg-white p-2 md:hidden"
              >
                ☰
              </button>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-500">
                  Client Panel
                </p>
                <h1 className="text-xl md:text-2xl font-bold text-emerald-900">
                  Support Dashboard
                </h1>
              </div>
            </div>
            <button
              className="hidden md:flex items-center gap-2 rounded-full border border-emerald-300 bg-white px-3 py-2 text-sm font-semibold text-emerald-700 shadow-sm hover:bg-emerald-50"
              onClick={() => setActiveTab("notifications")}
            >
              🔔 Notifications
              <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white">
                3
              </span>
            </button>
          </header>

          <main className="p-3 md:p-4 pt-4">{renderContent()}</main>
        </div>
      </div>

      {showTicketModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full mx-3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Submit New Ticket
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newTicket.title}
                  onChange={(e) =>
                    setNewTicket({ ...newTicket, title: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Brief description of the issue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Priority
                </label>
                <select
                  value={newTicket.priority}
                  onChange={(e) =>
                    setNewTicket({
                      ...newTicket,
                      priority: e.target.value as "low" | "medium" | "high",
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={newTicket.description}
                  onChange={(e) =>
                    setNewTicket({ ...newTicket, description: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 h-28"
                  placeholder="Detailed description of the issue"
                />
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setShowTicketModal(false)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={submitTicket}
                className="flex-1 px-3 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
