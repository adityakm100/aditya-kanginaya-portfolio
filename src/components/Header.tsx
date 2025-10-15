import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <h1>Aditya Kanginaya Madhuchandra</h1>
        </div>
        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
