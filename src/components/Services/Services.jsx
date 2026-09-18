import React from 'react';
import './Services.css';
import { useLanguage } from '../../contexts/LanguageContext';
import { useBooking } from '../../contexts/BookingContext';

export default function Services() {
  const { lang, dir, t } = useLanguage();
  const { selectService } = useBooking();

  const handleBook = (id) => {
    selectService(id);
    const element = document.getElementById('interactive-booking');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const getIndex = (indexStrEn, indexStrAr) => {
    return lang === 'ar' ? indexStrAr : indexStrEn;
  };

  return (
    <section id="services" className="services-section" dir={dir}>
      <div className="services-container">
        <header className="services-header">
          <div className="services-header-left">
            <span className="text-label-caps text-primary uppercase">
              {t.servicesTag}
            </span>
            <h2 className="services-title text-on-surface uppercase">
              {t.servicesTitle}
            </h2>
          </div>
          <div className="services-header-right">
            <p className="text-body-md text-on-surface-variant services-description">
              {t.servicesDescription}
            </p>
          </div>
        </header>

        <div className="services-grid">
          {/* Card 1 */}
          <article className="service-card">
            <div className="service-card-top">
              <span className="text-label-caps text-outline">{t.serviceIndex} {getIndex('01', '٠١')}</span>
              <span className="text-label-caps text-primary">{t.service1Duration}</span>
            </div>
            <div className="service-card-title-row">
              <h3 className="text-headline-sm text-on-surface">{t.service1Title}</h3>
              <span className="text-headline-sm text-primary">{t.service1Price}</span>
            </div>
            <p className="text-body-md text-on-surface-variant service-card-desc">
              {t.service1Desc}
            </p>
            <footer className="service-card-footer">
              <span className="text-label-sm text-outline">{t.service1Footer}</span>
              <button 
                onClick={() => handleBook('signature-cut')}
                className="text-label-caps text-on-surface uppercase tracking-widest service-book-btn"
              >
                {t.serviceBookBtn}
              </button>
            </footer>
          </article>

          {/* Card 2 */}
          <article className="service-card">
            <div className="service-card-top">
              <span className="text-label-caps text-outline">{t.serviceIndex} {getIndex('02', '٠٢')}</span>
              <span className="text-label-caps text-primary">{t.service2Duration}</span>
            </div>
            <div className="service-card-title-row">
              <h3 className="text-headline-sm text-on-surface">{t.service2Title}</h3>
              <span className="text-headline-sm text-primary">{t.service2Price}</span>
            </div>
            <p className="text-body-md text-on-surface-variant service-card-desc">
              {t.service2Desc}
            </p>
            <footer className="service-card-footer">
              <span className="text-label-sm text-outline">{t.service2Footer}</span>
              <button 
                onClick={() => handleBook('razor-shave')}
                className="text-label-caps text-on-surface uppercase tracking-widest service-book-btn"
              >
                {t.serviceBookBtn}
              </button>
            </footer>
          </article>

          {/* Card 3 */}
          <article className="service-card">
            <div className="service-card-top">
              <span className="text-label-caps text-outline">{t.serviceIndex} {getIndex('03', '٠٣')}</span>
              <span className="text-label-caps text-primary">{t.service3Duration}</span>
            </div>
            <div className="service-card-title-row">
              <h3 className="text-headline-sm text-on-surface">{t.service3Title}</h3>
              <span className="text-headline-sm text-primary">{t.service3Price}</span>
            </div>
            <p className="text-body-md text-on-surface-variant service-card-desc">
              {t.service3Desc}
            </p>
            <footer className="service-card-footer">
              <span className="text-label-sm text-outline">{t.service3Footer}</span>
              <button 
                onClick={() => handleBook('beard-sculpt')}
                className="text-label-caps text-on-surface uppercase tracking-widest service-book-btn"
              >
                {t.serviceBookBtn}
              </button>
            </footer>
          </article>

          {/* Card 4 - Flagship */}
          <article className="service-card flagship">
            <div className="flagship-badge">{t.service4Badge}</div>
            <div className="service-card-top">
              <span className="text-label-caps text-primary">{t.serviceIndex} {getIndex('04', '٠٤')}</span>
              <span className="text-label-caps text-primary">{t.service4Duration}</span>
            </div>
            <div className="service-card-title-row">
              <h3 className="text-headline-sm text-on-surface">{t.service4Title}</h3>
              <span className="text-headline-sm text-primary">{t.service4Price}</span>
            </div>
            <p className="text-body-md text-on-surface-variant service-card-desc">
              {t.service4Desc}
            </p>
            <footer className="service-card-footer">
              <span className="text-label-sm text-primary">{t.service4Footer}</span>
              <button 
                onClick={() => handleBook('noir-full')}
                className="text-label-caps text-on-surface uppercase tracking-widest service-book-btn"
              >
                {t.serviceBookBtn}
              </button>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
