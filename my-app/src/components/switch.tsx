import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from "framer-motion"


interface SwitchProps {
  activeButton: React.ReactNode;
  hiddenButton: React.ReactNode;
  setActiveButton: () => void;
}

export default function Switch({
  activeButton,
  hiddenButton,
  setActiveButton,
}: SwitchProps) {
  const [isHovered, setIsHovered] = useState(false);

  const switchVariants = {
    hidden: { scale: 0.5, opacity: 0, y: 50 },
    visible: { scale: 1, opacity: 0.7, y: 0 },
    hover: { scale: 1.2 },
  }

  return (
    <div>
      <AnimatePresence>
        {isHovered && (
        <motion.button
          key="languageSwitch"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={switchVariants}
          transition={{ duration: 0.3 }}
          className='hidden md:flex items-center justify-center w-[2rem] h-[2rem] bg-white'
        >
          <p className="text-sm font-semibold">{hiddenButton}</p>
        </motion.button>
        )}
      
      </AnimatePresence>

      <motion.button
      className="bg-white w-[2rem] h-[2rem] drop-shadow backdrop-blur-[0.5rem]border"
      variants={switchVariants}
      initial="visible"
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={setActiveButton}
      >
        <p className="font-semibold">{activeButton}</p>
      </motion.button>
    </div>
  )

}