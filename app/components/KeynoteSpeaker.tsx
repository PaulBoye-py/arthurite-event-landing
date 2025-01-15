'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Kayode from '../assets/kayode.webp'

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
              src={Kayode} // Replace with an intriguing placeholder image
              alt="Speaker" 
              width={150} 
              height={150} 
              className="rounded-full shadow-lg"
            />
            <div>
              <h3 className="text-3xl font-bold text-[#065430] mb-2">Kayode A. Akomolafe (Tech Ranger)</h3>
              <p className="text-xl text-gray-600 mb-4">Visionary Cloud Transformation Leader</p>
              <p className="text-gray-700 leading-relaxed">
              Kayode A. Akomolafe, fondly known as "Tech Ranger," is a seasoned leader with over two decades of experience in leveraging technology to drive innovation and growth. As the Digital Transformation Director at Amazon Web Services (AWS), Kayode has spearheaded transformative cloud initiatives that consistently deliver exceptional results, redefining business success across industries. Recognized for his technical expertise and strategic acumen, Kayode remains a trusted advisor, guiding organizations to unlock their full potential through cloud solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
