import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const transition = {
  duration: 1,
  ease: "easeInOut",
};

function SlideTransition({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default SlideTransition;
