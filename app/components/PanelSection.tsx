'use client'
import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion'
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image'
import DrSogunle from '../assets/sogunle.webp';
import David from '../assets/david.webp';
import Paul from '../assets/paul.webp';
import Sophia from '../assets/Sophia.webp'
import Larry from '../assets/larry.webp'
import Sheriff from '../assets/Sherif.webp'

const panelists = [
  {
    name: "Dr. Idris Sogunle",
    title: "Innovator in IT Education and Cloud Solutions",
    bio: "IT expert and educator with 14+ years of experience in cloud computing and digital skills training. CEO of Infolab Technology Services, leading global initiatives across UK, US, and Canada.",
    image: DrSogunle,
  },
  {
    name: "Ukeme David Eseme",
    title: "Blockchain DevOps Innovator and Cloud Engineer",
    bio: "DevOps Engineer at Supra Oracles specializing in blockchain and cloud infrastructure. AWS Community Builder passionate about mentoring and advancing DevOps practices.",
    image: David,
  },
  {
    name: "Ujunwa Sophia Njoku",
    title: "Transformative DevOps Engineer & Cloud Advocate",
    bio: "DevOps Engineer and Cloud Advocate known as 'Techynurse'. Combines healthcare background with cloud expertise to drive business transformation through engaging content and technical leadership.",
    image: Sophia,
  },
  {
    name: "Larry Adah",
    title: "Cloud Educator and Innovator",
    bio: "Cloud Engineer and educator with multiple AWS and GCP certifications. Creator of 'Larry Talks Cloud' on YouTube, dedicated to simplifying cloud computing concepts.",
    image: Larry,
  },
  {
    name: "Sherifdeen Awofiranye",
    title: "Software Engineer & Serverless Solutions Architect",
    bio: "AWS Serverless Developer with expertise in event-driven architectures. Java Developer at UPreviews focusing on scalable, cost-effective cloud solutions.",
    image: Sheriff,
  },
  {
    name: "Dr. Paul Aderoju",
    title: "Software Engineer | Cloud & Health-Tech Advocate",
    bio: "Health Practitioner and software engineer specializing in cloud-native healthcare solutions. Focuses on FHIR-compliant applications for improved healthcare systems in Africa.",
    image: Paul,
  },
];

export default function PanelSection() {

  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const contentWidth = panelists.length * 50; // 50% width for each panel
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const startAnimation = async () => {
      if (isMobile) {
        // Mobile animation (panel swap)
        while (!isHovered) {
          await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds
          if (!isHovered) {
            await controls.start({
              opacity: 0,
              transition: { duration: 0.5 }
            });
            setCurrentIndex((prev) => (prev + 1) % panelists.length);
            await controls.start({
              opacity: 1,
              transition: { duration: 4.0 }
            });
          }
        }
      } else {
        // Desktop animation (smooth scroll)
        while (!isHovered) {
          await controls.start({
            x: `-${contentWidth}%`,
            transition: {
              duration: 80,
              ease: "linear"
            }
          });
          await controls.start({
            x: "0%",
            transition: {
              duration: 0
            }
          });
        }
      }
    };

    if (!isHovered) {
      startAnimation();
    }

    return () => {
      controls.stop();
    };
  }, [controls, contentWidth, isHovered, isMobile]);

  const getCurrentPanels = () => {
    if (isMobile) {
      // Return current panel for mobile
      return [panelists[currentIndex]];
    } else {
      // Return all panels for desktop
      return [...panelists, ...panelists];
    }
  };


  return (
<section className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-600"
        >
          PANEL DISCUSSION
        </motion.h2>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            className={`flex gap-8 ${isMobile ? 'justify-center' : ''}`}
            animate={controls}
            initial={isMobile ? { opacity: 1 } : { x: "0%" }}
          >
            {getCurrentPanels().map((panelist, index) => (
              <motion.div
                key={`${isMobile ? 'mobile' : 'desktop'}-${index}`}
                className={`flex-none ${isMobile ? 'w-full md:w-full' : 'w-[calc(50%-1rem)]'} snap-center`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={panelist.image}
                    alt={panelist.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-[#065430] text-center mb-2">{panelist.name}</h3>
                  <p className="text-gray-600 text-center mb-4">{panelist.title}</p>
                  <p className="text-black text-center">{panelist.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
