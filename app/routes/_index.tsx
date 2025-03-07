

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";

export default function Index() {
  const inviteeName = import.meta.env.VITE_INVITEE_NAME || "Valentine";
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [yesFontSize, setYesFontSize] = useState(14);

  const moveNoButton = () => {
    const newX = Math.random() * 200 - 100;
    const newY = Math.random() * 200 - 100;
    setNoPosition({ x: newX, y: newY });
    setYesFontSize((prevSize) => prevSize + 2);
  };

  return (
    <div className="flex items-center justify-center min-h-screen sm:h-screen bg-pink-100">
      <div className="text-center font-courier">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">
          Hey, {inviteeName}, <br/> will you be my Valentine? 💖
        </h1>
          <div className="flex flex-col items-center gap-4">
            <Link
              to="/thank-you"
              className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
              style={{ fontSize: `${yesFontSize}px` }}
            >
              Yes! 💕
            </Link>
            <motion.button
              onClick={moveNoButton}
              onMouseEnter={moveNoButton}
              animate={{ x: noPosition.x, y: noPosition.y }}
              transition={{ type: "spring", stiffness: 100 }}
              className="px-6 py-3 bg-gray-300 text-gray-700 font-semibold rounded-full shadow-lg cursor-pointer"
            >
              No 😢
            </motion.button>
          </div>
      </div>
    </div>
  );
}