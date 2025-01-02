'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const panelists = [
  {
    name: "Alice Johnson",
    title: "AI Research Scientist",
    bio: "Alice is a leading expert in artificial intelligence and machine learning.",
    image: "/placeholder.svg"
  },
  {
    name: "Bob Smith",
    title: "Cybersecurity Specialist",
    bio: "Bob has been at the forefront of cybersecurity for over a decade.",
    image: "/placeholder.svg"
  },
  {
    name: "Carol Williams",
    title: "Blockchain Developer",
    bio: "Carol is pioneering new applications of blockchain technology.",
    image: "/placeholder.svg"
  },
  {
    name: "David Brown",
    title: "UX Design Lead",
    bio: "David creates user-centric designs for some of the world's top tech companies.",
    image: "/placeholder.svg"
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
              key={panelist.name}
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

