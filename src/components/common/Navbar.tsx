import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Calendar, User as UserIcon, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Successfully logged out');
      navigate('/');
    } catch (error) {
      toast.error('Failed to log out');
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle user menu
  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Calendar className="w-8 h-8 text-primary-500" />
            <span className="text-xl font-bold text-gray-900">Event Explorer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "text-primary-600 font-medium" 
                  : "text-gray-700 hover:text-primary-500 transition-colors"
              }
            >
              Home
            </NavLink>
            {currentUser && (
              <NavLink 
                to="/profile" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-600 font-medium" 
                    : "text-gray-700 hover:text-primary-500 transition-colors"
                }
              >
                My Profile
              </NavLink>
            )}
            {currentUser && (
              <NavLink 
                to="/my-bookings" 
                className={({ isActive }) => 
                  isActive 
                    ? "text-primary-600 font-medium" 
                    : "text-gray-700 hover:text-primary-500 transition-colors"
                }
              >
                My Bookings
              </NavLink>
            )}
          </nav>

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {currentUser ? (
              <div className="relative">
                <button 
                  onClick={toggleUserMenu}
                  className="flex items-center space-x-2 focus:outline-none"
                  title={currentUser.displayName || ''}
                >
                  <img 
                    src={currentUser.photoURL || 'https://i.pravatar.cc/150'} 
                    alt={currentUser.displayName || 'User'} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-primary-300"
                  />
                </button>

                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium">{currentUser.displayName}</p>
                      <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
                    </div>
                    <Link 
                      to="/profile" 
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <UserIcon className="w-4 h-4 mr-2" />
                      My Profile
                    </Link>
                    <button 
                      onClick={() => {
                        handleLogout();
                        setShowUserMenu(false);
                      }}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary btn-sm">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `block py-2 ${isActive ? 'text-primary-600 font-medium' : 'text-gray-700'}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            {currentUser && (
              <NavLink
                to="/profile"
                className={({ isActive }) => 
                  `block py-2 ${isActive ? 'text-primary-600 font-medium' : 'text-gray-700'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                My Profile
              </NavLink>
            )}
            {currentUser && (
              <NavLink
                to="/my-bookings"
                className={({ isActive }) => 
                  `block py-2 ${isActive ? 'text-primary-600 font-medium' : 'text-gray-700'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                My Bookings
              </NavLink>
            )}

            {/* Mobile Auth */}
            {currentUser ? (
              <div className="pt-2 border-t border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <img 
                    src={currentUser.photoURL || 'https://i.pravatar.cc/150'} 
                    alt={currentUser.displayName || 'User'} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{currentUser.displayName}</p>
                    <p className="text-sm text-gray-500">{currentUser.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center text-red-500 py-2"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="block w-full btn btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;