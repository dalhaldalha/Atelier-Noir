import { LanguageProvider } from './contexts/LanguageContext';
import { BookingProvider } from './contexts/BookingContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Artisans from './components/Artisans/Artisans';
import Space from './components/Space/Space';
import Booking from './components/Booking/Booking';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <Header />
        <main
          style={{
            width: '100%',
            paddingTop: '80px',
            backgroundColor: 'var(--color-background)',
            minHeight: '100vh',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Hero />
            <Services />
            <Artisans />
            <Space />
            <Booking />
            <Location />
          </div>
        </main>
        <Footer />
      </BookingProvider>
    </LanguageProvider>
  );
}

export default App;
