import React from 'react';
import { User, Shield, Mail, Phone, MapPin, ChevronRight, MoreVertical } from 'lucide-react';

const AgentGrid = () => {
  // Sample agent data - in a real app, this would come from an API
const agents = [
    {
        id: 1,
        name: "Chinedu Okafor",
        email: "chinedu@realestate.com.ng",
        role: "Super Agent",
        department: "Sales",
        phone: "+234 803 123 4567",
        location: "Lagos, NG",
        avatar: "/placeholder.svg",
        lastActive: "2 hours ago",
        propertiesManaged: 24,
        status: "active"
    },
    {
        id: 2,
        name: "Aisha Bello",
        email: "aisha@realestate.com.ng",
        role: "Agent",
        department: "Leasing",
        phone: "+234 802 987 6543",
        location: "Abuja, NG",
        avatar: "/placeholder.svg",
        lastActive: "1 day ago",
        propertiesManaged: 15,
        status: "active"
    },
    {
        id: 3,
        name: "Emeka Nwosu",
        email: "emeka@realestate.com.ng",
        role: "Facility Manager",
        department: "Operations",
        phone: "+234 701 456 7890",
        location: "Port Harcourt, NG",
        avatar: "/placeholder.svg",
        lastActive: "3 days ago",
        propertiesManaged: 10,
        status: "inactive"
    },
    {
        id: 4,
        name: "Ngozi Uche",
        email: "ngozi@realestate.com.ng",
        role: "Agent",
        department: "Sales",
        phone: "+234 806 789 0123",
        location: "Enugu, NG",
        avatar: "/placeholder.svg",
        lastActive: "5 hours ago",
        propertiesManaged: 18,
        status: "active"
    },
    {
        id: 5,
        name: "Tunde Bakare",
        email: "tunde@realestate.com.ng",
        role: "Agent",
        department: "Leasing",
        phone: "+234 805 234 5678",
        location: "Ibadan, NG",
        avatar: "/placeholder.svg",
        lastActive: "1 week ago",
        propertiesManaged: 11,
        status: "inactive"
    },
    {
        id: 6,
        name: "Fatima Yusuf",
        email: "fatima@realestate.com.ng",
        role: "Super Agent",
        department: "Sales",
        phone: "+234 809 345 6789",
        location: "Kano, NG",
        avatar: "/placeholder.svg",
        lastActive: "30 minutes ago",
        propertiesManaged: 27,
        status: "active"
    }
];

  // Role badge colors
  const getRoleBadgeColor = (role) => {
    switch(role) {
      case 'Super Agent': return 'bg-purple-100 text-purple-800';
      case 'Agent': return 'bg-blue-100 text-blue-800';
      case 'Facility Manager': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Status indicator colors
  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-500' : 'bg-gray-400';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <User className="w-8 h-8 text-indigo-600" />
            Agent Management
          </h1>
          <p className="text-gray-600 mt-2">View and manage all agent accounts</p>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search agents..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <select className="flex h-10 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">All Roles</option>
              <option value="Super Agent">Super Agent</option>
              <option value="Agent">Agent</option>
              <option value="Facility Manager">Facility Manager</option>
            </select>

            <select className="flex h-10 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">All Statuses</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              {/* Agent Header */}
              <div className="p-5 border-b border-gray-100 flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
                      <img 
                        src={agent.avatar} 
                        alt={agent.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(agent.status)}`}></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${getRoleBadgeColor(agent.role)}`}>
                      {agent.role}
                    </span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              {/* Agent Details */}
              <div className="p-5 space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="truncate">{agent.email}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{agent.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 mr-2 text-gray-400" />
                  <span>{agent.department} Department</span>
                </div>
              </div>

              {/* Agent Footer */}
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-gray-700">{agent.propertiesManaged}</span> properties
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">Last active {agent.lastActive}</span>
                  <button className="text-gray-400 hover:text-indigo-600">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">24</span> agents
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 rounded-md border border-indigo-500 bg-indigo-50 text-indigo-600">
              1
            </button>
            <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentGrid;