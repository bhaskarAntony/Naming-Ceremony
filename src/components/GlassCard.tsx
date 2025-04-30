import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={`bg-dark-100/40 backdrop-blur-xl border border-primary-500/20 rounded-xl p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        boxShadow: '0 0 15px rgba(124, 58, 237, 0.3)',
        scale: 1.01,
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;