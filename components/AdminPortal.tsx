"use client";
import React, { useState } from "react";
import {
  Calendar,
  Users,
  DollarSign,
  Building,
  BarChart3,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Bed,
  ShoppingCart,
  Wifi,
  TrendingUp,
  AlertCircle,
  CheckCircle
} from "lucide-react";

const AdminPortal = () => {
  const [activeModule, setActiveModule] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const modules = [
    { id: "dashboard", name: "Dashboard", icon: BarChart3, color: "bg-blue-500" },
    { id: "pms", name: "PMS", icon: Building, color: "bg-green-500" },
    { id: "booking", name: "Booking Engine", icon: Calendar, color: "bg-purple-500" },
    { id: "pos", name: "Point of Sale", icon: ShoppingCart, color: "bg-orange-500" },
    { id: "crm", name: "CRM", icon: Users, color: "bg-pink-500" },
    { id: "analytics", name: "Analytics", icon: TrendingUp, color: "bg-indigo-500" },
    { id: "integrations", name: "Integrations", icon: Wifi, color: "bg-teal-500" },
    { id: "settings", name: "Settings", icon: Settings, color: "bg-gray-500" }
  ];

  const kpiCards = [
    { title: "Today's Revenue", value: "$28,450", change: "+12%", icon: DollarSign, color: "text-green-600" },
    { title: "Occupancy Rate", value: "89%", change: "+5%", icon: Bed, color: "text-blue-600" },
    { title: "Active Guests", value: "234", change: "+8%", icon: Users, color: "text-purple-600" },
    { title: "Avg Daily Rate", value: "$189", change: "+3%", icon: TrendingUp, color: "text-orange-600" }
  ];

  const recentActivities = [
    { type: "booking", message: "New booking from Expedia - Room 301", time: "2 min ago", status: "success" },
    { type: "checkin", message: "Guest checked in - John Smith, Room 205", time: "5 min ago", status: "success" },
    { type: "payment", message: "Payment processed - $345 for Room 118", time: "8 min ago", status: "success" },
    { type: "maintenance", message: "Maintenance request - Room 405 AC unit", time: "12 min ago", status: "warning" },
    { type: "checkout", message: "Guest checked out - Sarah Johnson, Room 310", time: "15 min ago", status: "info" }
  ];

  const integrationStatus = [
    { name: "Expedia", status: "connected", lastSync: "2 min ago" },
    { name: "Stripe Payments", status: "connected", lastSync: "1 min ago" },
    { name: "Smart Locks", status: "connected", lastSync: "5 min ago" },
    { name: "Booking.com", status: "error", lastSync: "1 hour ago" },
    { name: "Email Service", status: "connected", lastSync: "30 sec ago" }
  ];

  const roomStatus = [
    { type: "Occupied", count: 156, color: "bg-red-500" },
    { type: "Vacant Clean", count: 23, color: "bg-green-500" },
    { type: "Vacant Dirty", count: 18, color: "bg-yellow-500" },
    { type: "Out of Order", count: 3, color: "bg-gray-500" }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((kpi, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                <p className={`text-sm ${kpi.color}`}>{kpi.change} from yesterday</p>
              </div>
              <div className={`p-3 rounded-full ${kpi.color.replace("text-", "bg-").replace("-600", "-100")}`}>
                <kpi.icon className={`h-6 w-6 ${kpi.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Room Status */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Room Status Overview</h3>
          <div className="space-y-4">
            {roomStatus.map((status, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${status.color}`}></div>
                  <span className="text-sm font-medium text-gray-700">{status.type}</span>
                </div>
                <span className="text-lg font-bold text-gray-900">{status.count}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="text-sm text-gray-600">
              Total Rooms: <span className="font-semibold">200</span>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div
                  className={`mt-1 w-2 h-2 rounded-full ${
                    activity.status === "success"
                      ? "bg-green-500"
                      : activity.status === "warning"
                      ? "bg-yellow-500"
                      : activity.status === "error"
                      ? "bg-red-500"
                      : "bg-blue-500"
                  }`}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration Status */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Integration Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrationStatus.map((integration, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-3 h-3 rounded-full ${
                    integration.status === "connected" ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{integration.name}</p>
                  <p className="text-xs text-gray-500">Last sync: {integration.lastSync}</p>
                </div>
              </div>
              {integration.status === "connected" ? (
                <CheckCircle className="h-4 w-4 text-green-500" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

  );

  const renderModuleContent = () => {
    switch (activeModule) {
      case "pms":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Management System</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Today’s Arrivals</h4>
                  <p className="text-2xl font-bold text-blue-600">47</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Today’s Departures</h4>
                  <p className="text-2xl font-bold text-green-600">52</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">In-House Guests</h4>
                  <p className="text-2xl font-bold text-purple-600">234</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">View Reservations</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Housekeeping</button>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">Guest Folios</button>
              </div>
            </div>
          </div>
        );
      case "booking":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Engine</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Today’s Bookings</h4>
                  <p className="text-2xl font-bold text-green-600">23</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Conversion Rate</h4>
                  <p className="text-2xl font-bold text-blue-600">3.8%</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Avg. Booking Value</h4>
                  <p className="text-2xl font-bold text-purple-600">$189</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Channel Performance</h4>
                  <p className="text-2xl font-bold text-orange-600">92%</p>
                </div>
              </div>
            </div>
          </div>
        );
      case "analytics":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics & Reporting</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Revenue Trends</h4>
                  <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">Revenue Chart Placeholder</p>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Occupancy Trends</h4>
                  <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">Occupancy Chart Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-64" : "w-16"} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            {sidebarOpen && <h1 className="text-xl font-bold text-gray-900">Vendoora</h1>}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100">
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                activeModule === module.id ? "bg-blue-50 text-blue-700 border border-blue-200" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className={`p-1.5 rounded-md ${module.color}`}>
                <module.icon className="h-4 w-4 text-white" />
              </div>
              {sidebarOpen && <span className="font-medium">{module.name}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 capitalize">
                {activeModule === "dashboard" ? "Dashboard" : modules.find((m) => m.id === activeModule)?.name}
              </h2>
              <p className="text-sm text-gray-600">Grand Plaza Hotel - Main Property</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
                <span className="text-sm font-medium text-gray-900">John Doe</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">{renderModuleContent()}</main>
      </div>
    </div>
  );
};

export default AdminPortal;
