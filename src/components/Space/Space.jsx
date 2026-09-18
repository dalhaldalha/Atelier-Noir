import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Space.css';

const Space = () => {
  const { dir, t, lang } = useLanguage();

  const getNumber = (num) => {
    if (lang === 'ar') {
      const arNums = ['٠١', '٠٢', '٠٣'];
      return arNums[num - 1];
    }
    return num.toString().padStart(2, '0');
  };

  return (
    <section id="space" className="space-section" dir={dir}>
      <div className="space-container">
        <div className="space-grid">
          <div className="space-left">
            <div className="space-image-wrapper">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHYDBej84aXqsCbNveOXispAK52XAwZIicuukNDFhC7vpYSpGIIZjR4V0KL_fQbpvy1wFyloES6fsLCxpDEM5lBsYkSXe20GQndYBR0RKCy2yG_3o_upHrQHKaAEzHPE9ljsnrwyco0c2friL4EjCLUoK2Qn4LhSS6PNn8UdI_Hm-BWfjTQmmexDXtj5B6nHyRYZ9RY4nYTpF0DvTek1yecUBoJUI6a-kbBfVk0IQ6LdSRYL6aYAKH" 
                alt="Atelier Noir Space" 
                className="space-image"
              />
              <div className="space-badge text-label-caps uppercase text-primary">
                {t.spaceImageLabel}
              </div>
            </div>
          </div>
          <div className="space-right">
            <span className="space-tag text-label-caps text-primary uppercase">{t.spaceTag}</span>
            <h2 className="space-title text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase">{t.spaceTitle}</h2>
            <p className="space-desc text-body-md text-on-surface-variant">{t.spaceDescription}</p>
            
            <div className="space-features">
              {[1, 2, 3].map((num) => (
                <div key={num} className="space-feature">
                  <div className="space-feature-number text-headline-sm text-primary">
                    {getNumber(num)}
                  </div>
                  <div className="space-feature-content">
                    <h3 className="text-title-md text-on-surface">{t[`spaceFeature${num}Title`]}</h3>
                    <p className="text-body-md text-on-surface-variant">{t[`spaceFeature${num}Desc`]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Space;
