import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Bell, User, Moon, Sun, LogOut, Settings } from 'lucide-react';
import AdminProfile from './AdminProfile';

const Header = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New property added', time: '2 mins ago', read: false },
    { id: 2, text: 'Payment received', time: '1 hour ago', read: true },
    { id: 3, text: 'New message from client', time: '3 hours ago', read: false },
  ]);

  // Toggle dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', !darkMode);
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  // Check for saved theme preference
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <header className="fixed w-[80%] top-0 z-10 bg-white shadow-sm mb-1">
      <div className="flex items-center justify-between px-3 py-3">
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search properties, clients..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        <div className="flex items-center space-x-6">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 relative transition-colors"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              {notifications.some(n => !n.read) && (
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-700 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden">
                <div className="p-3 border-b border-gray-200 dark:border-gray-600">
                  <h3 className="font-medium text-gray-800 dark:text-white">Notifications</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-3 border-b border-gray-100 dark:border-gray-600 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 ${!notification.read ? 'bg-blue-50 dark:bg-gray-600' : ''}`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <p className="text-sm font-medium text-gray-800 dark:text-white">
                          {notification.text}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="p-4 text-sm text-gray-500 dark:text-gray-300">
                      No new notifications
                    </p>
                  )}
                </div>
                <Link
                  to="/notifications"
                  className="block p-3 text-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  View all notifications
                </Link>
              </div>
            )}
          </div>

          {/* Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 focus:outline-none"
              aria-label="User profile"
            >
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <User className="h-4 w-4" />
              </div>
              <span className="hidden md:inline text-sm font-medium text-gray-700 dark:text-black">
               Super-Admin
              </span>
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg border border-gray-200 dark:border-gray-600 py-1 z-20">
                <Link
                  to="/agent-details"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </div>
                </Link>
                <Link
                  to=""
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div className="flex items-center">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </div>
                </Link>
                <div className="border-t border-gray-200 dark:border-gray-600 my-1"></div>
                <button
                  onClick={() => {
                    // Add your logout logic here
                    navigate('/login');
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div className="flex items-center">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Close dropdowns when clicking outside */}
      {showNotifications && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setShowNotifications(false)}
        ></div>
      )}
      {showProfileMenu && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setShowProfileMenu(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;