import React from "react";
import {
  HomeIcon,
  UsersIcon,
  TicketIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ChatBubbleLeftEllipsisIcon,
  DocumentTextIcon,
  QueueListIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  role: "admin" | "client" | "operator" | "technician";
  activeTab: string;
  onTabChange: (tab: string) => void;
  onNavigate?: () => void;
}

const menuItems: Record<
  SidebarProps["role"],
  { id: string; label: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[]
> = {
  admin: [
    { id: "dashboard", label: "Dashboard", icon: HomeIcon },
    { id: "users", label: "User Management", icon: UsersIcon },
    { id: "tickets", label: "All Tickets", icon: TicketIcon },
    { id: "reports", label: "Reports", icon: ChartBarIcon },
    { id: "settings", label: "Settings", icon: Cog6ToothIcon },
  ],
  client: [
    { id: "dashboard", label: "Dashboard", icon: HomeIcon },
    { id: "tickets", label: "My Tickets", icon: TicketIcon },
    { id: "messages", label: "Messages", icon: ChatBubbleLeftEllipsisIcon },
    { id: "logs", label: "Activity Logs", icon: DocumentTextIcon },
  ],
  operator: [
    { id: "dashboard", label: "Dashboard", icon: HomeIcon },
    { id: "tickets", label: "Assigned Tickets", icon: TicketIcon },
    { id: "queue", label: "Ticket Queue", icon: QueueListIcon },
    { id: "reports", label: "Reports", icon: ChartBarIcon },
  ],
  technician: [
    { id: "dashboard", label: "Dashboard", icon: HomeIcon },
    { id: "tickets", label: "My Tickets", icon: TicketIcon },
    { id: "messages", label: "Messages", icon: ChatBubbleLeftEllipsisIcon },
    { id: "tools", label: "Tools", icon: WrenchScrewdriverIcon },
  ],
};

export default function Sidebar({ role, activeTab, onTabChange, onNavigate }: SidebarProps) {
  const items = menuItems[role];

  return (
    <div className="w-full bg-white border-r border-slate-200 text-slate-900 min-h-screen shadow-sm overflow-y-auto">
      <div className="px-4 py-5">
        <div className="mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-indigo-500 flex items-center justify-center text-white font-bold">JD</div>
            <div>
              <p className="text-sm font-semibold text-slate-900">John Doe</p>
              <p className="text-xs text-slate-500">Client - IT Support</p>
              <p className="text-xs text-slate-500">ID: CLT-0012</p>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-4 capitalize">{role} panel</h2>
        <nav className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  onNavigate?.();
                }}
                className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-200 text-slate-900"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
