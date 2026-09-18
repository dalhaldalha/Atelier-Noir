import React from 'react';
import './Artisans.css';
import { useLanguage } from '../../contexts/LanguageContext';
import { useBooking } from '../../contexts/BookingContext';

export default function Artisans() {
  const { lang, dir, t } = useLanguage();
  const { selectBarber } = useBooking();

  const handleBook = (name) => {
    selectBarber(name);
    const element = document.getElementById('interactive-booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="master-barbers" className="artisans-section" dir={dir}>
      <div className="artisans-container">
        <header className="artisans-header">
          <div className="artisans-header-left">
            <span className="text-label-caps text-primary uppercase">
              {t.artisansTag}
            </span>
            <h2 className="artisans-title text-on-surface uppercase">
              {t.artisansTitle}
            </h2>
          </div>
          <div className="artisans-header-right">
            <p className="text-body-md text-on-surface-variant artisans-description">
              {t.artisansDescription}
            </p>
          </div>
        </header>

        <div className="artisans-grid">
          {/* Artisan 1 - Julian */}
          <article className="artisan-card group">
            <div className="artisan-image-container">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI96ztdwTT4_ozIERH2EY8ZMPY9u8jNjDR20IQhFlmvABLcIJifl4w7sBJk7UusCfCaYTyqaRwz3v3E-B5zGdkjA1Sk4QQ4GNiQO1ChKEN26hKbcqViB-ADrQcbuBJDsPLzSrzFR3WNNaXr0Dw76M46DHyAN19GWPkODGC-2l6mvX8qWKCGEN33Boyb2oRpnMi_15KaD8ejW8MO8gk8-N-LpT2fv_fHSN63fa9s9x2YsH8fmtqvemY" 
                alt={t.julianName}
                className="artisan-image" 
              />
              <div className="artisan-gradient-overlay"></div>
              <div className="artisan-chair-badge">
                {t.julianChair}
              </div>
            </div>
            <div className="artisan-body">
              <div className="artisan-title-row">
                <h3 className="text-headline-md text-on-surface">{t.julianName}</h3>
                <span className="text-label-caps text-outline uppercase">{t.julianRole}</span>
              </div>
              <div className="artisan-spec text-label-caps text-primary uppercase tracking-wider">
                {t.julianSpec}
              </div>
              <p className="artisan-bio text-body-md text-on-surface-variant">
                {t.julianBio}
              </p>
              <footer className="artisan-footer">
                <span className="text-label-sm text-outline">{t.julianDays}</span>
                <button 
                  onClick={() => handleBook(t.julianName)}
                  className="artisan-book-btn text-label-caps uppercase tracking-widest text-on-surface hover:primary"
                >
                  {t.julianBook || 'Book'}
                </button>
              </footer>
            </div>
          </article>

          {/* Artisan 2 - Elena */}
          <article className="artisan-card group">
            <div className="artisan-image-container">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcCpNe_HgWDcThMKlMqU_1a5V-TvWpvJVjuZGOpEpR1CgeKTIcB3FuAKdokM4IXJmkMm_Vq_4wqoL9ThzsUdH51kd7OxkBKh2hXULeM5Cs3QD3Fe-WgFJsB_XNt78ahzTCvw3U0hjVttmjBGRvdV3KUC5pGfe3lYLFTdqS6u_u6vGgAUkfyvIdIySXRC3D1dnUrdcV8rxx0XWlBf2nZGDyJykrp8WGRbLTP9dmJDYf5ta6p5v6M5C2" 
                alt={t.elenaName}
                className="artisan-image" 
              />
              <div className="artisan-gradient-overlay"></div>
              <div className="artisan-chair-badge">
                {t.elenaChair}
              </div>
            </div>
            <div className="artisan-body">
              <div className="artisan-title-row">
                <h3 className="text-headline-md text-on-surface">{t.elenaName}</h3>
                <span className="text-label-caps text-outline uppercase">{t.elenaRole}</span>
              </div>
              <div className="artisan-spec text-label-caps text-primary uppercase tracking-wider">
                {t.elenaSpec}
              </div>
              <p className="artisan-bio text-body-md text-on-surface-variant">
                {t.elenaBio}
              </p>
              <footer className="artisan-footer">
                <span className="text-label-sm text-outline">{t.elenaDays}</span>
                <button 
                  onClick={() => handleBook(t.elenaName)}
                  className="artisan-book-btn text-label-caps uppercase tracking-widest text-on-surface hover:primary"
                >
                  {t.elenaBook || 'Book'}
                </button>
              </footer>
            </div>
          </article>
        </div>

        <div className="editorial-quote">
          <blockquote className="quote-text text-on-surface italic">
            {t.quoteText}
          </blockquote>
          <div className="quote-attribution">
            <div className="text-label-caps text-primary uppercase">{t.quoteSource}</div>
            <div className="text-body-md text-outline">{t.quotePolicy}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
