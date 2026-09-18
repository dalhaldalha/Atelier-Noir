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
            <h2 className="text-headline-md location-address uppercase">{t.locationAddress}</h2>
            <h3 className="text-title-md location-district">{t.locationDistrict}</h3>
            <p className="text-body-md location-description">{t.locationDescription}</p>

            <div className="map-container">
              <div className="map-image"></div>
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
              <p className="text-headline-sm concierge-phone">{t.conciergePhone}</p>
              <p className="text-body-md concierge-email">{t.conciergeEmail}</p>
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
