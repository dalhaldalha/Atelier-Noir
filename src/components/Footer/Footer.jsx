import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { dir, t } = useLanguage();

  return (
    <footer className="footer-section" dir={dir}>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col-1">
            <h2 className="text-headline-md footer-brand uppercase">{t.brandName}</h2>
            <p className="text-body-md footer-brand-desc">{t.footerBrandDesc}</p>
            
            <div className="footer-contact">
              <span className="text-label-caps footer-reservations-tag">{t.footerReservationsTag}</span>
              <p className="text-body-md footer-email">{t.footerEmail}</p>
              <p className="text-body-md footer-phone">{t.footerPhone}</p>
            </div>
          </div>

          <div className="footer-col-2">
            <span className="text-label-caps footer-hours-tag uppercase tracking-widest">{t.footerHoursTag}</span>
            <div className="footer-hours-list">
              <div className="footer-hours-row text-body-md">
                <span>{t.footerTueFri}</span>
                <span className="footer-time-open">{t.footerTueFriTime}</span>
              </div>
              <div className="footer-hours-row text-body-md">
                <span>{t.footerSat}</span>
                <span className="footer-time-open">{t.footerSatTime}</span>
              </div>
              <div className="footer-hours-row text-body-md">
                <span>{t.footerSun}</span>
                <span className="footer-time-open">{t.footerSunTime}</span>
              </div>
              <div className="footer-hours-row text-body-md">
                <span>{t.footerMon}</span>
                <span className="footer-time-closed">{t.footerMonTime}</span>
              </div>
            </div>
          </div>

          <div className="footer-col-3">
            <span className="text-label-caps footer-protocol-tag uppercase tracking-widest">{t.footerProtocolTag}</span>
            <p className="text-body-md footer-protocol-text">{t.footerProtocolText}</p>
            <p className="text-label-caps footer-address uppercase">{t.footerAddress}</p>
          </div>
        </div>

        <div className="footer-copyright-bar">
          <span className="text-label-caps footer-copyright">{t.footerCopyright}</span>
          <div className="footer-links">
            <a href="#" className="text-label-caps footer-link">{t.footerPrivacy}</a>
            <a href="#" className="text-label-caps footer-link">{t.footerTerms}</a>
            <a href="#" className="text-label-caps footer-link">{t.footerAccessibility}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
