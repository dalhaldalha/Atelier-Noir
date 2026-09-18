import './Hero.css';
import { useLanguage } from '../../contexts/LanguageContext';
import { useBooking } from '../../contexts/BookingContext';

const Hero = () => {
  const { lang, dir, t } = useLanguage();
  const { booking } = useBooking();

  return (
    <section className="hero-wrapper" dir={dir}>
      <div className="hero-background">
        <img
          src="https://lh3.googleusercontent.com/aida/AEtjO1U7j-uWamyV0c4kQ6n32HvpdLmMsmuf1KbRYVi3Muaj1iECFnzMx83xzsrFViXfzdLLo8Z3lVGR8ZWX5zHeEVKpTmAsFQoJoAh0am5suMgl07M2gE_BBjsdfUdto0y7jH9TwK5-VdURfIiIwK8aH7U5l552NJv5YJo4MKuILRwnpiorMMIJi9NJoLJnnmhA95XkaEqccpOWvFRE1FA-aetQhdpiB9isJ8nPJG6nLT4s6fCIKwM18VyfMg"
          alt="Upscale modern luxury barbershop"
          className="hero-bg-img"
        />
        <div className="hero-gradient"></div>
      </div>

      <div className="hero-content">
        <div className="hero-tagline-bar">
          <div className="hero-line"></div>
          <span className="hero-tagline text-label-caps">{t.heroTagline}</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-title-main">{t.heroTitle1}</span>
          <br />
          <span className="hero-title-italic">{t.heroTitle2}</span>
        </h1>

        <p className="hero-description text-body-lg">{t.heroDescription}</p>

        <div className="hero-badges">
          <div className="badge-item">
            <span className="material-symbols-outlined badge-icon">verified_user</span>
            <span className="text-label-caps">{t.heroBadge1}</span>
          </div>
          <div className="badge-item">
            <span className="material-symbols-outlined badge-icon">local_bar</span>
            <span className="text-label-caps">{t.heroBadge2}</span>
          </div>
          <div className="badge-item">
            <span className="material-symbols-outlined badge-icon">volume_off</span>
            <span className="text-label-caps">{t.heroBadge3}</span>
          </div>
          <div className="badge-item">
            <span className="material-symbols-outlined badge-icon">graphic_eq</span>
            <span className="text-label-caps">{t.heroBadge4}</span>
          </div>
        </div>

        <div className="quick-booking-bar">
          <div className="qb-section">
            <label className="qb-label text-label-caps">{t.heroSelectService}</label>
            <select 
              className="qb-select text-title-md" 
              value={booking?.serviceId || 'signature-cut'}
              onChange={(e) => selectService(e.target.value)}
            >
              {t.quickServiceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="qb-section">
            <label className="qb-label text-label-caps">{t.heroSelectBarber}</label>
            <select 
              className="qb-select text-title-md" 
              value={booking?.barberId || 'any'}
              onChange={(e) => selectBarber(e.target.value)}
            >
              {t.quickBarberOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="qb-section">
            <label className="qb-label text-label-caps">{t.heroSelectTime}</label>
            <div className="qb-display text-title-md">
              <span>{t.quickDateTime}</span>
              <span className="material-symbols-outlined qb-expand-icon">expand_more</span>
            </div>
          </div>

          <div className="qb-cta-container">
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
              className="qb-cta text-label-caps"
            >
              {t.heroConfirmSlot}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
