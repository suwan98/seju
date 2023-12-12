"use client";

import {motion} from "framer-motion";

function CursorBlinker() {
  /* Framer-motion을 통한 타이핑 애니메이션 적용 */
  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1],
      },
    },
  };

  return (
    <>
      <motion.div
        variants={cursorVariants}
        animate="blinking"
        className="ml-1 min-h-[1px] w-[0.0425rem] translate-y-1 bg-primaryColor bg-opacity-60"
      />
    </>
  );
}

export default CursorBlinker;
