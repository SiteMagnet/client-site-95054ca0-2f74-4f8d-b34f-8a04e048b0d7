'use client';

import { useState } from 'react';
import Link from 'next/link';
import './Navigation.css';
import content from '../../../../content.json';
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = content.logo_url;
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/">
          <h1 className="brand">SiteMagnet</h1>
        </Link>
      </div>

      <div className={`navbar-center ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#our-work">Our Work</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faqs">FAQs</a></li>
        </ul>
      </div>

      <div className={`navbar-right ${isMenuOpen ? 'open' : ''}`}>
        {/* <Link href="/Login"> */}
          <button className="get-started-btn">Get Started</button>
        {/* </Link> */}
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
}
