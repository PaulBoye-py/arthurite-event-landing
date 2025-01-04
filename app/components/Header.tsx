'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Logo from '../assets/arthurite-logo.png'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex justify-center items-center'>
              <div>
                <Image src={Logo} alt="Arthurite Logo" width={50} height={50} />
              </div>            
              <Link href="/" className="text-2xl font-bold text-[#065430]">Arthurite Integrated</Link>
            </div>
            
          </motion.div>
          <div className="hidden md:flex space-x-4">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#speakers">Speakers</NavLink>
            <NavLink href="#schedule">Schedule</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <a target='blank' href="https://www.meetup.com/meetup-group-culecvjx/events/305398186/?utm_medium=referral&utm_campaign=announceModal_savedevents_share_modal&utm_source=link">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary hidden md:block"
          >
            Register Now
          </motion.button>
          </a>
         
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-indigo-600">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg rounded-b-lg"
        >
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-2">
              <NavLink href="#about" onClick={() => setIsOpen(false)}>About</NavLink>
              <NavLink href="#speakers" onClick={() => setIsOpen(false)}>Speakers</NavLink>
              <NavLink href="#schedule" onClick={() => setIsOpen(false)}>Schedule</NavLink>
              <NavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
              <button className="btn-primary w-full">Register Now</button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link href={href} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" onClick={onClick}>
      {children}
    </Link>
  )
}

