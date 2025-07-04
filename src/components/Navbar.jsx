import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div className="space-x-4 flex items-center">
        {/* Navigation Links */}
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="bg-gray-700 px-3 py-1 rounded ml-4"
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
