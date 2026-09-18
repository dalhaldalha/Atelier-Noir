import React, { createContext, useContext, useState, useCallback } from 'react';

const BookingContext = createContext();

export const serviceData = {
  'signature-cut': { en: { name: 'The Signature Haircut', duration: '45 Minutes', price: 'SAR 85' }, ar: { name: 'قصة الشعر المميزة', duration: '٤٥ دقيقة', price: '٨٥ ر.س' } },
  'razor-shave': { en: { name: 'Hot Towel Razor Shave', duration: '40 Minutes', price: 'SAR 75' }, ar: { name: 'حلاقة بالموس والمنشفة الساخنة', duration: '٤٠ دقيقة', price: '٧٥ ر.س' } },
  'beard-sculpt': { en: { name: 'Beard Architecture', duration: '35 Minutes', price: 'SAR 65' }, ar: { name: 'هندسة ونحت اللحية', duration: '٣٥ دقيقة', price: '٦٥ ر.س' } },
  'noir-full': { en: { name: 'The Noir Ritual', duration: '80 Minutes', price: 'SAR 150' }, ar: { name: 'طقس النوار الكامل', duration: '٨٠ دقيقة', price: '١٥٠ ر.س' } },
};

export const barberData = {
  'julian': { en: 'Julian Vance', ar: 'جوليان فانس' },
  'elena': { en: 'Elena Rostova', ar: 'إيلينا روستوفا' },
  'any': { en: 'First Available Master', ar: 'أي حرفي متاح' },
};

const initialBooking = {
  serviceId: 'noir-full',
  barberId: 'elena',
  selectedDate: 24,
  selectedTimeIndex: 2, // index into times array
  preferences: {
    silent: true,
    malt: true,
    alum: false,
  },
  confirmed: false,
};

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState(initialBooking);

  const selectService = useCallback((id) => {
    setBooking((prev) => ({
      ...prev,
      serviceId: id,
    }));
  }, []);

  const selectBarber = useCallback((id) => {
    setBooking((prev) => ({ ...prev, barberId: id }));
  }, []);

  const setDate = useCallback((dayNum) => {
    setBooking((prev) => ({
      ...prev,
      selectedDate: dayNum,
    }));
  }, []);

  const setTime = useCallback((timeIndex) => {
    setBooking((prev) => ({
      ...prev,
      selectedTimeIndex: timeIndex,
    }));
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
