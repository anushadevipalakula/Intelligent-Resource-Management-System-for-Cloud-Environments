import React from 'react';
import { 
  Cloud, 
  Cpu, 
  Database, 
  HardDrive, 
  Network, 
  BarChart3, 
  AlertCircle 
} from 'lucide-react';

const ResourceCard = ({ title, value, icon: Icon, trend }: {
  title: string;
  value: string;
  icon: React.ElementType;
  trend?: { value: number; isPositive: boolean };
}) => (
  <div className="bg-white rounded-lg p-6 shadow-md">
    <div className="flex items-center justify-between mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
      <div className={`text-sm font-medium ${trend?.isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {trend && `${trend.isPositive ? '+' : '-'}${trend.value}%`}
      </div>
    </div>
    <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
  </div>
);

const AlertItem = ({ message, level }: { message: string; level: 'warning' | 'critical' }) => (
  <div className={`flex items-center gap-3 p-3 rounded-md ${
    level === 'critical' ? 'bg-red-100' : 'bg-yellow-100'
  }`}>
    <AlertCircle className={`w-5 h-5 ${
      level === 'critical' ? 'text-red-600' : 'text-yellow-600'
    }`} />
    <span className={`text-sm ${
      level === 'critical' ? 'text-red-700' : 'text-yellow-700'
    }`}>{message}</span>
  </div>
);

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Cloud className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Cloud Resource Dashboard</h1>
          </div>
          <p className="text-gray-600">Monitor and manage your cloud infrastructure</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <ResourceCard
            title="CPU Usage"
            value="78%"
            icon={Cpu}
            trend={{ value: 12, isPositive: false }}
          />
          <ResourceCard
            title="Memory Usage"
            value="5.2 GB"
            icon={HardDrive}
            trend={{ value: 8, isPositive: true }}
          />
          <ResourceCard
            title="Network Traffic"
            value="2.1 GB/s"
            icon={Network}
          />
          <ResourceCard
            title="Storage Used"
            value="234 GB"
            icon={Database}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Resource Usage Trends</h2>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg">
              <span className="text-gray-500">Resource usage graph will be displayed here</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Alerts</h2>
            <div className="space-y-3">
              <AlertItem
                message="High CPU usage detected on instance i-123456"
                level="critical"
              />
              <AlertItem
                message="Storage capacity reaching threshold (85%)"
                level="warning"
              />
              <AlertItem
                message="Network latency spike detected"
                level="warning"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;