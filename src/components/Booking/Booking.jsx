import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useBooking } from '../../contexts/BookingContext';
import './Booking.css';

const Booking = () => {
  const { dir, t } = useLanguage();
  const { booking, setDate, setTime, togglePreference, confirmReservation } = useBooking();

  return (
    <section id="interactive-booking" className="booking-section" dir={dir}>
      <div className="booking-container">
        <div className="booking-header">
          <span className="booking-tag text-label-caps text-primary uppercase tracking-widest">{t.bookingTag}</span>
          <h2 className="booking-title text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase">{t.bookingTitle}</h2>
          <p className="booking-desc text-body-md text-on-surface-variant">{t.bookingDescription}</p>
        </div>

        <div className="booking-ledger">
          <div className="booking-left">
            <div className="calendar-header">
              <div className="calendar-title">
                <span className="text-label-caps text-outline">{t.bookingSchedulePeriod || 'Schedule Period'}</span>
                <span className="text-headline-sm text-on-surface">{t.bookingMonth}</span>
              </div>
              <div className="calendar-nav">
                <button className="nav-btn material-symbols-outlined">chevron_left</button>
                <button className="nav-btn material-symbols-outlined">chevron_right</button>
              </div>
            </div>

            <div className="date-grid">
              {t.bookingDays?.map((day, i) => (
                <div key={i} className="day-header text-label-caps text-outline">{day}</div>
              ))}
              <div className="date-cell disabled text-surface-container-highest">20</div>
              {[21, 22, 23, 24, 25, 26].map(date => {
                const isActive = booking.selectedDate === date;
                return (
                  <button 
                    key={date} 
                    className={`date-cell clickable ${isActive ? 'active' : ''}`}
                    onClick={() => setDate(date.toString(), date)}
                  >
                    {date}
                  </button>
                );
              })}
            </div>

            <div className="available-times-section">
              <h3 className="times-label text-label-caps text-primary uppercase tracking-widest">{t.bookingAvailableWindows}</h3>
              <div className="times-grid">
                {t.bookingTimes?.map((time, i) => {
                  const isActive = booking.selectedTime === time;
                  return (
                    <button 
                      key={i}
                      className={`time-slot text-label-sm ${isActive ? 'active' : ''}`}
                      onClick={() => setTime(time, i)}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="booking-right">
            <div className="summary-section">
              <div className="summary-tag text-label-caps text-primary">{t.bookingSummaryTag}</div>
              <div className="summary-service">
                <span className="text-headline-sm text-on-surface">{booking.service || 'Service'}</span>
                <span className="text-headline-sm text-primary">{booking.price || '$0'}</span>
              </div>
              <div className="summary-details">
                <div className="detail-row text-body-md">
                  <span className="text-outline">{t.bookingAssignedArtisan}</span>
                  <span className="text-on-surface">{booking.barber || '-'}</span>
                </div>
                <div className="detail-row text-body-md">
                  <span className="text-outline">{t.bookingScheduledSlot}</span>
                  <span className="text-on-surface">{booking.dateTime || '-'}</span>
                </div>
                <div className="detail-row text-body-md">
                  <span className="text-outline">{t.bookingTotalDuration}</span>
                  <span className="text-on-surface">{booking.duration || '-'}</span>
                </div>
              </div>
            </div>

            <div className="preferences-section">
              <div className="pref-tag text-label-caps text-outline uppercase">{t.bookingPreferencesTag}</div>
              <label className="pref-row text-body-md text-on-surface">
                <span>{t.bookingPrefSilent}</span>
                <input 
                  type="checkbox" 
                  checked={booking.preferences?.silent || false}
                  onChange={() => togglePreference('silent')}
                />
              </label>
              <label className="pref-row text-body-md text-on-surface">
                <span>{t.bookingPrefMalt}</span>
                <input 
                  type="checkbox" 
                  checked={booking.preferences?.malt || false}
                  onChange={() => togglePreference('malt')}
                />
              </label>
              <label className="pref-row text-body-md text-on-surface">
                <span>{t.bookingPrefAlum}</span>
                <input 
                  type="checkbox" 
                  checked={booking.preferences?.alum || false}
                  onChange={() => togglePreference('alum')}
                />
              </label>
            </div>

            <div className="booking-action">
              <button 
                className={`reserve-btn text-label-caps uppercase tracking-widest ${booking.confirmed ? 'confirmed' : ''}`}
                onClick={confirmReservation}
              >
                {booking.confirmed ? t.bookingConfirmedMsg : t.bookingReserveBtn}
              </button>
              <div className="cancel-policy text-label-sm text-outline text-center">
                {t.bookingCancelPolicy}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
