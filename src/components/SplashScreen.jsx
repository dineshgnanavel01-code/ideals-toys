import { motion } from "framer-motion";
import {Gamepad2,Sparkles,Star,} from "lucide-react";

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff3b0] via-[#ffd6e7] to-[#c8f7ff]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >

      <motion.div
        className="absolute left-[10%] top-[15%] text-orange-400"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <Star
          size={42}
          fill="currentColor"
        />
      </motion.div>

      {/* SPARKLES */}

      <motion.div
        className="absolute right-[12%] top-[20%] text-pink-500"
        animate={{
          y: [0, 25, 0],
          rotate: [0, -20, 15, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
      >
        <Sparkles size={48} />
      </motion.div>

      {/* GAME */}

      <motion.div
        className="absolute bottom-[18%] left-[15%] text-blue-500"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <Gamepad2 size={50} />
      </motion.div>

      {/* MAIN */}

      <div className="relative z-10 text-center">

        {/* LOGO */}

        <motion.div
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-[30px] bg-white shadow-2xl"
          initial={{
            scale: 0,
            rotate: -30,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 12,
          }}
        >
          <Gamepad2
            size={50}
            className="text-pink-500"
            strokeWidth={2.5}
          />
        </motion.div>

        {/* TITLE */}

        <motion.h1
          className="text-5xl font-black tracking-tight text-slate-800 sm:text-6xl"
          initial={{
            y: 30,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
        >
          IDEALS
        </motion.h1>

        {/* SUBTITLE */}

        <motion.p
          className="mt-2 text-lg font-bold text-slate-600"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
        >
          Kids Toys & Games
        </motion.p>

        {/* LOADING BAR */}

        <motion.div className="mx-auto mt-8 h-2 w-48 overflow-hidden rounded-full bg-white/70">

          <motion.div
            className="h-full rounded-full bg-pink-500"
            initial={{
              width: "0%",
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
          />

        </motion.div>

        {/* TEXT */}

        <motion.p
          className="mt-4 text-sm font-medium text-slate-500"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Let the fun begin...
        </motion.p>

      </div>
    </motion.div>
  );
}