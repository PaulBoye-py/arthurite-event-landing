import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/arthurite-logo.png'
import { Instagram, Youtube, Linkedin, Twitter } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            {/* <div className='rounded-sm  '>
                <Image src={Logo} alt="Arthurite Logo" width={50} height={50} />
              </div> */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Arthurite Integrated</h3>
                <p className="text-gray-400 mb-4">Information Technology Solutions at Its Peak!</p>
              </div>
            
            
              <div className="flex space-x-4">
                  <a
                    href="https://x.com/Arthurite_IX"
                    target='_blank'
                    rel='noopener'
                    title='arthurite'
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/arthurite-integrated/"
                    target='_blank'
                    rel='noopener'
                    title='arthurite'
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/arthuriteintegrated/"
                    target='_blank'
                    rel='noopener'
                    title='arthurite'
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.youtube.com/@ArthuriteIntegrated"
                    target='_blank'
                    rel='noopener'
                    title='arthurite'
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>

          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-[#065430] transition-colors duration-300">About</Link></li>
              <li><Link href="#speakers" className="hover:text-[#065430] transition-colors duration-300">Speakers</Link></li>
              <li><Link href="#schedule" className="hover:text-[#065430] transition-colors duration-300">Schedule</Link></li>
              <li><Link href="#contact" className="hover:text-[#065430] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">No 2, Nnobi Street, Kilo,</p>
            <p className="text-gray-400 mb-2">Surulere Lagos.</p>
            <p className="text-gray-400 mb-2">Email: info@arthurite.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Arthurite Meetup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

