import { TrendingUp, FileText, Scissors, Calendar, Zap } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: 'trends', label: 'Trend Identification', icon: TrendingUp },
    { id: 'content', label: 'Content Creation', icon: FileText },
    { id: 'clipping', label: 'Video Clipping', icon: Scissors },
    { id: 'scheduling', label: 'Scheduling & Uploading', icon: Calendar },
    { id: 'optimization', label: 'Viral Optimization', icon: Zap },
  ];

  return (
    <nav
      className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg p-6"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">Video Automation</h1>
        <p className="text-sm text-gray-500 mt-1">Dashboard</p>
      </div>

      <ul className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`nav-item w-full ${activeSection === item.id ? 'active' : ''}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
                aria-label={item.label}
              >
                <Icon className="w-5 h-5 mr-3" aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs text-gray-600 font-semibold mb-1">Quick Stats</p>
          <p className="text-sm text-gray-700">
            <span className="font-bold text-primary">24</span> videos scheduled
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-bold text-secondary">12</span> trends tracked
          </p>
        </div>
      </div>
    </nav>
  );
}
