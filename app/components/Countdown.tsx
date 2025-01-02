'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const countdown = () => {
      const now = new Date().getTime()
      const deadline = new Date("January 29, 2025 10:00:00").getTime()
      const distance = deadline - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }

    const timer = setInterval(countdown, 1000)
    return () => clearInterval(timer)
  }, [])

  const countdownVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div
              key={unit}
              variants={countdownVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
            >
              <span className="text-6xl md:text-6xl font-bold text-[#065430]">{value.toString().padStart(2, '0')}</span>
              <span className="text-sm md:text-base text-gray-600 capitalize mt-2">{unit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

