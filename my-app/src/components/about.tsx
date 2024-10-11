"use client"

import React from 'react'
import SectionHeading from './section-heading';
import Image from 'next/image';
import { useSectionInView } from '@/lib/useInView';

//Animation
import { motion } from "framer-motion"

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section 
    id="about"
    ref={ref}

    >
      <div>
        <SectionHeading>
          About Me
        </SectionHeading>

        <div>
          <div>
            <div>
              <div>
                <h3>Our Mission</h3>
                <p>
                  We believe that a website is the foundation of a successful online presence, and our goal is to help business establish a strong digital presence. Our process begins with understanding your business goals.
                </p>

                <h3>Our Vision</h3>
                <p>
                  We strive to create a user-friendly, engaging, and valuable digital experience that resonates with our target audience. Our vision is to make it easy for businesses to reach their customers and drive sales.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <Image 
          src="/about.png"
          alt="About Me"
          width="600"
          height="600"
          quality="100"
          priority={true}
          className='rounded-full mt-8 object-cover'
          />
        </div>
      </div>
    </motion.section>
  );
}


