import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLanguage } from '../../contexts/LanguageContext';

const Header = () => {
  const { lang, dir, t, toggleLang } = useLanguage();
  const [activeSection, setActiveSection] = useState('');

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'master-barbers', 'space', 'location-and-hours'];
      const scrollPosition = window.scrollY + 85; // slightly more than header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookClick = () => {
    const element = document.getElementById('interactive-booking');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header-wrapper" dir={dir}>
      <div className="header-container">
        <div className="header-left">
          <img 
            src="https://lh3.googleusercontent.com/aida/AEtjO1Umk2_aoBD2PAjGhisbsdkXVQiF8JG_KwBKzq8ITdIko8PT6MRGGaNjAi84J7Ku9QfDUIjtP5tRKSILOORuDc4CJW9nIYXua5g3pxWUW8RF3ZjyF-jmJ5ODNajptGrDNZwgxPbKZMbN1yNf8CfaDUH6A6Q1Kp-Kuq0zsVGRsAscu6NrRhftM5znvM9R1F7uwzfBauDG4QGL8STEKQX-l49S4gBPgDBDUrgYxiDieIbD-VL1ZG9GmhoLoQ" 
            alt="Atelier Noir Logo" 
            className="header-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer' }}
          />
          <div className="brand-text-container">
            <span 
              className="brand-name text-headline-sm"
              style={{ fontFamily: "'Amiri', serif", letterSpacing: "normal" }}
            >
              أتيلييه نوار
            </span>
            <span 
              className="sub-brand"
              style={{ fontFamily: "'Cairo', sans-serif", fontSize: "0.65rem", letterSpacing: "0.05em" }}
            >
              ATELIER NOIR
            </span>
          </div>
        </div>

        <nav className="header-center">
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, 'services')}
            className={`nav-link text-label-caps ${activeSection === 'services' ? 'active' : ''}`}
          >
            {t.navServices || 'Services'}
          </a>
          <a 
            href="#master-barbers" 
            onClick={(e) => handleNavClick(e, 'master-barbers')}
            className={`nav-link text-label-caps ${activeSection === 'master-barbers' ? 'active' : ''}`}
          >
            {t.navBarbers || 'Barbers'}
          </a>
          <a 
            href="#space" 
            onClick={(e) => handleNavClick(e, 'space')}
            className={`nav-link text-label-caps ${activeSection === 'space' ? 'active' : ''}`}
          >
            {t.navSpace || 'The Space'}
          </a>
          <a 
            href="#location-and-hours" 
            onClick={(e) => handleNavClick(e, 'location-and-hours')}
            className={`nav-link text-label-caps ${activeSection === 'location-and-hours' ? 'active' : ''}`}
          >
            {t.navLocation || 'Location'}
          </a>
        </nav>

        <div className="header-right">
          <div className="lang-switcher">
            <span className="material-symbols-outlined lang-icon">language</span>
            <button 
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => toggleLang('en')}
            >
              EN
            </button>
            <span className="lang-divider">/</span>
            <button 
              className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
              onClick={() => toggleLang('ar')}
            >
              <span className="lang-text-desktop">العربية</span>
              <span className="lang-text-mobile">AR</span>
            </button>
          </div>
          <button className="cta-button text-label-caps" onClick={handleBookClick}>
            {t.bookChair}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
