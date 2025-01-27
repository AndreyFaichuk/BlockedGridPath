import { FC } from "react";
import { motion } from "framer-motion";

type ColorMotionProps = {
  children: React.ReactNode;
  isPath?: boolean;
};

export const ColorMotion: FC<ColorMotionProps> = ({ children, isPath }) => {
  return (
    <motion.div
      animate={isPath ? { scale: 0.85 } : { scale: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
    >
      {children}
    </motion.div>
  );
};
