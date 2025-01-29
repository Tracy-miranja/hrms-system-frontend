import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorEffect = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [innerCirclePosition, setInnerCirclePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setInnerCirclePosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    // Attach mousemove event globally
    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      // Clean up event listeners on unmount
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a").forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor effect */}
      <motion.div
        className="fixed pointer-events-none flex items-center justify-center"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          zIndex: 9999, // Make sure the cursor is above all other elements
        }}
      >
        <motion.div
          className="absolute rounded-full bg-blue-600"
          animate={{
            width: hovered ? 48 : 24,
            height: hovered ? 48 : 24,
            x: innerCirclePosition.x - cursorPosition.x - 12,
            y: innerCirclePosition.y - cursorPosition.y - 12,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        <motion.div
          className="absolute rounded-full border-2 border-blue-600"
          animate={{ width: hovered ? 64 : 40, height: hovered ? 64 : 40, x: "-50%", y: "-50%" }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </motion.div>
    </>
  );
};

export default CursorEffect;
