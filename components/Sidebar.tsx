interface SidebarProps {
  role: 'admin' | 'client' | 'operator' | 'technician';
  activeTab: string;
  onTabChange: (tab: string) => void;
  onNavigate?: () => void;
}

const menuItems = {
admin: [
{ id: 'dashboard', label: 'Dashboard', icon: '📊' },
{ id: 'users', label: 'User Management', icon: '👥' },
{ id: 'tickets', label: 'All Tickets', icon: '🎫' },
{ id: 'reports', label: 'Reports', icon: '📈' },
{ id: 'settings', label: 'Settings', icon: '⚙️' },
],
client: [
{ id: 'dashboard', label: 'Dashboard', icon: '📊' },
{ id: 'tickets', label: 'My Tickets', icon: '🎫' },
{ id: 'messages', label: 'Messages', icon: '💬' },
{ id: 'logs', label: 'Activity Logs', icon: '📝' },
],
operator: [
{ id: 'dashboard', label: 'Dashboard', icon: '📊' },
{ id: 'tickets', label: 'Assigned Tickets', icon: '🎫' },
{ id: 'queue', label: 'Ticket Queue', icon: '📋' },
{ id: 'reports', label: 'Reports', icon: '📈' },
],
technician: [
{ id: 'dashboard', label: 'Dashboard', icon: '📊' },
{ id: 'tickets', label: 'My Tickets', icon: '🎫' },
{ id: 'messages', label: 'Messages', icon: '💬' },
{ id: 'tools', label: 'Tools', icon: '🔧' },
],
};

export default function Sidebar({ role, activeTab, onTabChange, onNavigate }: SidebarProps) {
  const items = menuItems[role];

  return (
    <div className="w-56 bg-linear-to-b from-emerald-900 via-emerald-800 to-emerald-900 text-white h-full md:h-screen border-r border-emerald-700 shadow-lg overflow-y-auto">
      <div className="p-6">
        <div className="mb-5 rounded-xl bg-white/10 p-3 text-center">
          <span className="text-xl">🛡️</span>
        </div>
        <h2 className="text-2xl font-bold mb-6 capitalize">{role} Panel</h2>
        <nav className="space-y-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onTabChange(item.id);
                onNavigate?.();
              }}
              className={`w-full text-left px-4 py-3 rounded-xl transition-colors flex items-center space-x-3 text-sm font-semibold ${
                activeTab === item.id
                  ? 'bg-emerald-500 text-white shadow-inner'
                  : 'text-emerald-100 hover:bg-emerald-700 hover:text-white'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}