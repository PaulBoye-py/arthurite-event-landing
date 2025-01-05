'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
    name: '',
  })

  const [isSending, setIsSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Inquiry sent successfully!",
          variant: "default",
        })
        setFormData({ email: '', subject: '', message: '', name: '' }) // Clear the form
      } else {
        const errorData = await response.json()
        toast({
          title: "Error",
          description: `Failed to send email. ${errorData.message}`,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error('Error sending email:', error)
      toast({
        title: "Error",
        description: "An error occurred while sending this message.",
        variant: "destructive",
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="py-20 bg-gray-100" id="contact">
      <div className="container mx-auto px-4 max-w-screen-md">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 text-gray-800"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-600 mb-12"
        >
          Have questions? We're here to help. Reach out to us for any inquiries about the event.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8 bg-white p-8 rounded-lg shadow-md"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Your name</label>
            <input
              type="name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#065430] focus:border-[#065430] block w-full p-2.5"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#065430] focus:border-[#065430] block w-full p-2.5"
              placeholder="name@arthurite.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#065430] focus:border-[#065430] block w-full p-2.5"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Your message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#065430] focus:border-[#065430]"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn-primary w-full"
          >
            {isSending ? 'Sending...' : 'Send message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}