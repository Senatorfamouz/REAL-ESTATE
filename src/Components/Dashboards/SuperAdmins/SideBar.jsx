import React, { useState, useEffect } from 'react';
import { 
  FiHome, FiPieChart, FiLayers, FiUsers, 
  FiShoppingBag, FiDollarSign, FiSettings, 
  FiChevronDown, FiX
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  // State management
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Menu items configuration with paths
  const menuItems = [
    { 
      name: 'Dashboard', 
      icon: <FiPieChart />, 
      path: '/analytics',
      subItems: [
        { name: 'Analytics', path: '/analytics' }
      ] 
    },
    { 
      name: 'Property', 
      icon: <FiLayers />, 
      path: '/propertyList',
      subItems: [
        { name: 'PropertyList', path: '/propertyList' },
        { name: 'AddProperty', path: '/add-Property' }
      ] 
    },
    { 
      name: 'SubAdmins', 
      icon: <FiUsers />, 
      path: '/listviews',
      subItems: [
        { name: 'ListViews', path: '/listViews' },
        { name: 'AgentDetails', path: '/agent-details' },
        { name: 'Add Agent', path: '/add-agent' }
      ] 
    },
    { 
      name: 'AllOrderList', 
      icon: <FiShoppingBag />, 
      path: '/allOrderList',
      subItems: [] 
    },
    { 
      name: 'Transaction', 
      icon: <FiDollarSign />, 
      path: '/transact',
      subItems: [] 
    },
    { 
      name: 'Setting', 
      icon: <FiSettings />, 
      path: '/setting',
      subItems: [
        { name: 'Setting', path: '/setting' }
      ] 
    }
  ];

  // Handlers
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (windowWidth < 768) {
      setMobileSidebarOpen(false);
    }
  };

  // Effects
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setSidebarOpen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper functions
  const getIconColor = (itemName) => {
    if (activeMenu === itemName && !darkMode) return 'text-blue-600';
    return darkMode ? 'text-gray-300' : 'text-gray-600';
  };

  const getButtonClasses = (itemName) => {
    const baseClasses = 'w-full flex items-center p-3 rounded-lg ';
    const hoverClass = darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100';
    const activeClass = activeMenu === itemName 
      ? (darkMode ? 'bg-gray-700' : 'bg-blue-50 text-blue-600') 
      : '';
    
    return `${baseClasses} ${hoverClass} ${activeClass}`;
  };

  return (
    <div className={`flex h-screen font-sans ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      {/* Mobile Overlay */}
      {mobileSidebarOpen && windowWidth < 768 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          ${sidebarOpen ? 'w-64' : 'w-20'} 
          ${windowWidth < 768 ? (mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full') : ''}
          fixed md:relative z-30 transition-all duration-300 ease-in-out 
          ${darkMode ? 'bg-gray-800' : 'bg-white'} 
          border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'} 
          shadow-lg h-full
        `}
      >
        {/* Mobile Close Button */}
        {windowWidth < 768 && (
          <button 
            onClick={() => setMobileSidebarOpen(false)}
            className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FiX className="text-lg" />
          </button>
        )}

        {/* Logo Section */}
        <header className={`p-4 flex items-center ${sidebarOpen ? 'justify-start' : 'justify-center'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} h-16`}>
          <div className="flex items-center">
            <FiHome 
              className={`text-blue-600 text-2xl ${!sidebarOpen && 'mx-auto'}`} 
              onClick={() => handleNavigation('/')} 
            />
            {sidebarOpen && (
              <div className="ml-3">
                <h1 className="font-bold text-lg leading-tight">Fdee Home</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">and comfort estate</p>
              </div>
            )}
          </div>
        </header>
        
        {/* Navigation Menu */}
        <nav className="mt-6 px-2 overflow-y-auto h-[calc(100%-4rem)]">
          {menuItems.map((item) => (
            <div key={item.name} className="mb-2">
              <button
                onClick={() => {
                  toggleMenu(item.name);
                  if (item.subItems.length === 0) {
                    handleNavigation(item.path);
                  }
                }}
                className={getButtonClasses(item.name)}
              >
                <span className={`text-lg ${getIconColor(item.name)}`}>
                  {item.icon}
                </span>
                {sidebarOpen && (
                  <>
                    <span className="ml-3 text-sm font-medium">{item.name}</span>
                    {item.subItems.length > 0 && (
                      <FiChevronDown className={`ml-auto transition-transform ${activeMenu === item.name ? 'rotate-180' : ''}`} />
                    )}
                  </>
                )}
              </button>
              
              {/* Submenu Items */}
              {sidebarOpen && activeMenu === item.name && item.subItems.length > 0 && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.name}
                      onClick={() => handleNavigation(subItem.path)}
                      className="w-full text-left block py-2 px-3 text-sm rounded-md hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-700"
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;