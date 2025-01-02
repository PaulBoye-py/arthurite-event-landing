'use client'
import { motion } from 'framer-motion'

const scheduleItems = [
  { time: "9:45 AM - 10:00 AM", event: "Registration & Welcoming" },
  { time: "10:00 AM - 10:15 AM", event: "Introduction of Guest & Company Representatives" },
  { time: "10:15 AM - 10:30 AM", event: "Welcome Address" },
  { time: "10:30 AM - 11:00 AM", event: "Keynote Speech: The Future is Cloud" },
  { time: "11:00 AM - 11:30 AM", event: "Interactive Session: Cloud Opportunities" },
  { time: "11:30 AM - 11:50 AM", event: "Coffee Break & Networking" },
  { time: "11:50 AM - 12:20 PM", event: "Product Showcase: Optimizing Cost and Performance with AWS" },
  { time: "12:20 PM - 1:00 PM", event: "Unveiling Arthurite AWS Training Arm" },
  { time: "1:00 PM - 1:30 PM", event: "Lunch Break & Exhibition" },
  { time: "1:30 PM - 2:00 PM", event: "Service Offerings & Freebies Sharing" },
  { time: "2:00 PM - 2:15 PM", event: "Customer Success Videos" },
  { time: "2:15 PM - 2:45 PM", event: "Customer Prospects and Expectations" },
  { time: "2:45 PM - 3:00 PM", event: "Closing Remarks" },
]

export default function Schedule() {
  return (
    <section className="py-20 bg-white" id="schedule">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-600"
        >
          EVENT SCHEDULE
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {scheduleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center mb-6 last:mb-0"
            >
              <div className="w-48 flex-shrink-0 text-right mr-4">
                <span className="text-[#065430] font-semibold">{item.time}</span>
              </div>
              <div className="flex-grow bg-gray-100 rounded-lg p-4 shadow-md">
                <p className="text-gray-800">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
