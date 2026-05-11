// import React from 'react'

// const DarkModeToggle = ( { darkMode, toggleDarkMode }) => {
//   // TODO: Implement dark mode toggle logic
   
//   return (
//     <button  onClick={toggleDarkMode}>
//       {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}</button>
//   )
// }

// export default DarkModeToggle



import React from 'react'
import PropTypes from 'prop-types'

export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button className="btn toggle" onClick={toggleDarkMode}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

DarkModeToggle.propTypes = {
  darkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func
}

DarkModeToggle.defaultProps = {
  darkMode: false,
  toggleDarkMode: () => {}
}
