import { createContext, useContext, useState, useCallback } from 'react';

const BookingContext = createContext();

const initialBooking = {
  service: 'The Noir Ritual',
  price: 'SAR 150',
  duration: '80 Minutes',
  barber: 'Elena Rostova',
  dateTime: 'Thu, Oct 24 • 01:15 PM',
  selectedDate: 24,
  selectedTime: 2, // index into times array (01:15 PM)
  preferences: {
    silent: true,
    malt: true,
    alum: false,
  },
  confirmed: false,
};

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState(initialBooking);

  const selectService = useCallback((name, price, duration) => {
    setBooking((prev) => ({
      ...prev,
      service: name,
      price: `SAR ${price}`,
      duration: duration,
    }));
  }, []);

  const selectBarber = useCallback((barberName) => {
    setBooking((prev) => ({ ...prev, barber: barberName }));
  }, []);

  const setDate = useCallback((dateStr, dayNum) => {
    setBooking((prev) => {
      const timePart = prev.dateTime.split('•')[1] || ' 01:15 PM';
      return {
        ...prev,
        dateTime: `${dateStr} •${timePart}`,
        selectedDate: dayNum,
      };
    });
  }, []);

  const setTime = useCallback((timeStr, timeIndex) => {
    setBooking((prev) => {
      const datePart = prev.dateTime.split('•')[0] || 'Thu, Oct 24 ';
      return {
        ...prev,
        dateTime: `${datePart}• ${timeStr}`,
        selectedTime: timeIndex,
      };
    });
  }, []);

  const togglePreference = useCallback((key) => {
    setBooking((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: !prev.preferences[key],
      },
    }));
  }, []);

  const confirmReservation = useCallback(() => {
    setBooking((prev) => ({ ...prev, confirmed: true }));
    setTimeout(() => {
      setBooking((prev) => ({ ...prev, confirmed: false }));
    }, 4000);
  }, []);

  return (
    <BookingContext.Provider
      value={{
        booking,
        selectService,
        selectBarber,
        setDate,
        setTime,
        togglePreference,
        confirmReservation,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
}
