import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  variant?: 'heading' | 'subheading' | 'body';
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  variant = 'body', 
  className = '', 
  delay = 0 
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.04 * delay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  let textClasses = className;
  
  if (variant === 'heading') {
    textClasses += ' text-3xl md:text-4xl lg:text-5xl font-bold';
  } else if (variant === 'subheading') {
    textClasses += ' text-xl md:text-2xl lg:text-3xl font-semibold';
  }

  return (
    <motion.div
      className="overflow-hidden flex justify-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split(' ').map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={child}
        >
          <span className={textClasses}>
            {word}
            {index !== text.split(' ').length - 1 && '\u00A0'}
          </span>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;