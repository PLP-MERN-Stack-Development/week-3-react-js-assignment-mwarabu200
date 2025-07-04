import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ThemeSwitcher from './ThemeSwitcher'; 

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />

      {/* ✅ Theme switcher section */}
      <div className="p-4 flex justify-end">
        <ThemeSwitcher />
      </div>

      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;

