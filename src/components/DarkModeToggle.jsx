import React from 'react'

const DarkModeToggle = ({ isDarkMode = false, onToggle = () => {} }) => {
  return (
    <button
      className="theme-toggle"
      type="button"
      aria-pressed={isDarkMode}
      onClick={onToggle}
    >
      Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle
