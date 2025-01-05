'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Man from '../assets/man.png'
import Woman from '../assets/woman.png'

const panelists = [
  {
    name: "Mystery Panelist #1",
    title: "Industry Trailblazer",
    bio: "This panelist has been instrumental in shaping the future of technology and innovation.",
    image: Man // Replace with an intriguing placeholder image
  },
  {
    name: "Mystery Panelist #2",
    title: "Visionary Thought Leader",
    bio: "With deep expertise and groundbreaking insights, this panelist is a true game-changer.",
    image: Woman,
  },
  {
    name: "Mystery Panelist #3",
    title: "Innovative Pioneer",
    bio: "A trailblazer in their field, pushing boundaries and inspiring change globally.",
    image: Man,
  },
  {
    name: "Mystery Panelist #4",
    title: "Creative Problem Solver",
    bio: "Known for their unique perspectives and transformative ideas, this panelist is a force to reckon with.",
    image: Woman,
  }
]

export default function PanelSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-600"
        >
          PANEL DISCUSSION
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {panelists.map((panelist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <Image 
                src={panelist.image} 
                alt={panelist.name} 
                width={150} 
                height={150} 
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-[#065430] text-center mb-2">{panelist.name}</h3>
              <p className="text-gray-600 text-center mb-4">{panelist.title}</p>
              <p className="text-gray-700 text-center">{panelist.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
