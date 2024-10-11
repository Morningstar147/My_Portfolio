// src/components/ThemeToggleButton.tsx
import React from 'react';
import { useTheme } from '@/containers/theme-context'; // Ensure this path is correct

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
};

export default ThemeToggleButton;
