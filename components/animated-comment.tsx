// components/animated-comment.tsx
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimateCommentProps {
  children: ReactNode;
}

const AnimatedComment = ({ children }: AnimateCommentProps) => {
  return (
    <motion.h2
      className="main-comment"
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedComment;
