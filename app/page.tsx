import Header from './components/Header'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import KeynoteSpeaker from './components/KeynoteSpeaker'
import PanelSection from './components/PanelSection'
import Schedule from './components/Schedule'
import RegisterCTA from './components/RegisterCTA'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <Hero />
      <Countdown />
      <KeynoteSpeaker />
      <PanelSection />
      <Schedule />
      <RegisterCTA />
      <ContactForm />
      <Footer />
    </main>
  )
}

