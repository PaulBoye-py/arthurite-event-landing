'use client'
import { motion } from 'framer-motion'

export default function RegisterCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-green-50 text-gray-700">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-6"
        >
          Don't Miss Out on This Incredible Event!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Join industry leaders and innovators for a day of learning, networking, and inspiration.
        </motion.p>
        <a className='flex items-center justify-center' target='blank' href="https://tix.africa/the-transformative-cloud-innovations-the-future-is-cloud">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary hidden md:block"
          >
            Register Now
          </motion.button>
          </a>
      </div>
    </section>
  )
}

