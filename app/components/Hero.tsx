'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-[#065430] to-green-600 text-white" id="about">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-center mb-8"
        >
          Transformative Cloud Innovations: The Future is Cloud
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-center mb-12 max-w-3xl mx-auto"
        >
          This landmark conference by Arthurite Integrated is bringing together tech pioneers and business leaders to explore the limitless potential of AWS cloud technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <a target='blank' href="https://www.meetup.com/meetup-group-culecvjx/events/305398186/?utm_medium=referral&utm_campaign=announceModal_savedevents_share_modal&utm_source=link" className="btn-secondary">Learn More</a>
          <a target='blank' href="https://www.meetup.com/meetup-group-culecvjx/events/305398186/?utm_medium=referral&utm_campaign=announceModal_savedevents_share_modal&utm_source=link">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary hidden md:block"
          >
            Register Now
          </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

