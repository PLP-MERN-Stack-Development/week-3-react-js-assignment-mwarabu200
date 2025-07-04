import { useEffect, useState } from 'react';

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded transition-all duration-300 hover:scale-105 shadow-md"
    >
      {isDark ? '☀ Light' : '🌙 Dark'}
    </button>
  );
}

export default ThemeSwitcher;

