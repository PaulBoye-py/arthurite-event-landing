'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
              src="/placeholder.svg" 
              alt="Keynote Speaker" 
              width={300} 
              height={300} 
              className="rounded-full shadow-lg"
            />
            <div>
              <h3 className="text-3xl font-bold text-[#065430] mb-2">John Doe</h3>
              <p className="text-xl text-gray-600 mb-4">Chief Technology Officer, TechCorp</p>
              <p className="text-gray-700 leading-relaxed">
                John Doe is a visionary leader in the tech industry with over 20 years of experience. 
                He has led numerous successful projects and is known for his innovative approaches to 
                solving complex technological challenges. John's keynote will focus on the future of AI 
                and its impact on various industries.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

