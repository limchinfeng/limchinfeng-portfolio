"use client"

import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => { 
    setTheme(localStorage.getItem('theme')|| (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  }, []);

  const toggleTheme = () => {
    console.log('toggleTheme')

    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div onClick={toggleTheme} className="fixed bottom-5 left-5 flex items-center justify-center z-20 cursor-pointer  w-12 h-12 p-2 rounded-full shadow-md shadow-light-text/80 dark:shadow-dark-text/60 dark:bg-light-background bg-dark-background">
      <i id='sun' className="fa-solid fa-sun text-dark-text dark:text-light-text hidden text-2xl dark:block"></i>
      <i id='moon' className="fa-solid fa-moon text-dark-text dark:text-light-text block dark:hidden text-2xl"></i>
    </div>
  );
};

export default ThemeToggle;
