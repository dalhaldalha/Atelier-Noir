import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Location.css';

const Location = () => {
  const { dir, t } = useLanguage();

  return (
    <section id="location-and-hours" className="location-section" dir={dir}>
      <div className="location-container">
        <div className="location-grid">
          <div className="location-col-1">
            <span className="text-label-caps location-tag uppercase tracking-widest">{t.locationTag}</span>
            <a 
              href="https://goo.gl/maps/QG2v1H1KvZK2" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="location-address-link"
              style={{ textDecoration: 'none' }}
            >
              <h2 className="text-headline-md location-address uppercase hover:opacity-80 transition-opacity">{t.locationAddress}</h2>
              <h3 className="text-title-md location-district hover:opacity-80 transition-opacity">{t.locationDistrict}</h3>
            </a>
            <p className="text-body-md location-description">{t.locationDescription}</p>

            <div className="map-container">
              <div className="map-image-wrapper" style={{ height: '192px', width: '100%', filter: 'contrast(125%) grayscale(100%)' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14496.002821217646!2d46.6811419!3d24.7088282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f033068e64e59%3A0xc093bb076718d7f!2sAl%20Olaya%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1711200000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Atelier Noir Location"
                ></iframe>
              </div>
              <div className="map-info">
                <span className="text-label-sm map-subway">{t.locationSubway}</span>
                <span className="text-label-sm map-valet">{t.locationValet}</span>
              </div>
            </div>
          </div>

          <div className="location-col-2">
            <span className="text-label-caps hours-tag">{t.hoursTag}</span>
            
            <div className="hours-list">
              <div className="hours-row">
                <span className="hours-day">{t.hoursTueFri}</span>
                <span className="hours-time font-semibold">{t.hoursTueFriTime}</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">{t.hoursSat}</span>
                <span className="hours-time font-semibold">{t.hoursSatTime}</span>
              </div>
              <div className="hours-row">
                <span className="hours-day primary-text">{t.hoursSunMon}</span>
                <span className="hours-time font-semibold primary-text">{t.hoursSunMonTime}</span>
              </div>
            </div>

            <div className="concierge-section">
              <span className="text-label-caps concierge-tag">{t.conciergeTag}</span>
              <a href="tel:+966501234567" style={{ display: 'block', textDecoration: 'none' }} className="text-headline-sm concierge-phone hover-link">
                {t.conciergePhone}
              </a>
              <a href="mailto:concierge@ateliernoir.com" style={{ display: 'block', textDecoration: 'none' }} className="text-body-md concierge-email hover-link">
                {t.conciergeEmail}
              </a>
            </div>
          </div>

          <div className="location-col-3">
            <span className="text-label-caps protocol-tag">{t.protocolTag}</span>
            
            <ul className="protocol-list">
              <li className="text-body-md protocol-item">
                <strong className="protocol-label">{t.protocolArrival}</strong> {t.protocolArrivalText}
              </li>
              <li className="text-body-md protocol-item">
                <strong className="protocol-label">{t.protocolCancel}</strong> {t.protocolCancelText}
              </li>
              <li className="text-body-md protocol-item">
                <strong className="protocol-label">{t.protocolAcoustic}</strong> {t.protocolAcousticText}
              </li>
            </ul>

            <button 
              onClick={() => {
                const element = document.getElementById('interactive-booking');
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }} 
              className="private-hire-btn text-label-caps uppercase tracking-widest"
              style={{ display: 'block', width: '100%', border: 'none', cursor: 'pointer' }}
            >
              {t.requestPrivateHire}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
