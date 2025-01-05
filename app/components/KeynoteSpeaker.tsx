'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Woman from '../assets/woman.png'

export default function KeynoteSpeaker() {
  return (
    <section className="py-20 bg-white" id="speakers">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-600"
        >
          KEYNOTE SPEAKER
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-green-50 to-green-50 rounded-lg shadow-xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image 
              src={Woman} // Replace with an intriguing placeholder image
              alt="Mystery Speaker" 
              width={300} 
              height={300} 
              className="rounded-full shadow-lg"
            />
            <div>
              <h3 className="text-3xl font-bold text-[#065430] mb-2">Who Could It Be?</h3>
              <p className="text-xl text-gray-600 mb-4">World-Class Expert & Visionary</p>
              <p className="text-gray-700 leading-relaxed">
                Our keynote speaker is a trailblazer in their field, known for groundbreaking insights and 
                transformative ideas. They have shaped industries and inspired innovation globally. 
                Stay tuned as we unveil this remarkable personality who will share their vision on <strong>The Future of Cloud Technology</strong> and its revolutionary impact.
              </p>
              <p className="text-[#065430] mt-4 font-medium">Announcement Coming Soon!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
