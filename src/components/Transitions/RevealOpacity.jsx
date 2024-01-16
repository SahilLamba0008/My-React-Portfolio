import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const RevealOpacity = ({ children, width, height, delay }) => {
  const ref = useRef(null);
  const animationController = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) animationController.start("visible");
  }, [isInView, animationController]);

  return (
    <div
      style={{
        position: "relative",
        width: { width },
        height: { height },
        overflow: "hidden",
      }}
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={animationController}
        transition={{ duration: 0.5, delay: delay || 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealOpacity;
