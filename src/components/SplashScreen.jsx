
import { motion } from "framer-motion";
import {Gamepad2,Sparkles,Star,Zap,Circle,ToyBrick,} from "lucide-react";

const particles = [
  { left: "8%", top: "18%", size: 8, delay: 0 },
  { left: "18%", top: "70%", size: 6, delay: 0.5 },
  { left: "30%", top: "12%", size: 10, delay: 1 },
  { left: "72%", top: "16%", size: 7, delay: 0.3 },
  { left: "86%", top: "35%", size: 9, delay: 0.8 },
  { left: "78%", top: "75%", size: 6, delay: 1.2 },
  { left: "12%", top: "45%", size: 7, delay: 0.7 },
  { left: "90%", top: "65%", size: 10, delay: 0.2 },
];

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#09091a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#3b146b_0%,#15102f_38%,#09091a_75%)]" />

      <motion.div
        className="absolute left-[5%] top-[10%] h-72 w-72 rounded-full bg-pink-600/20 blur-[100px]"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Blue Glow */}
      <motion.div
        className="absolute bottom-[5%] right-[5%] h-80 w-80 rounded-full bg-cyan-500/20 blur-[110px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      {/* Purple Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[130px]"
        animate={{
          scale: [0.9, 1.15, 0.9],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.2, 0.7],
          }}
          transition={{
            duration: 2.5 + index * 0.2,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}


      {/* Star */}
      <motion.div
        className="absolute left-[8%] top-[18%] text-yellow-400"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 20, -15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star size={45} fill="currentColor" />
      </motion.div>

      {/* Sparkle */}
      <motion.div
        className="absolute right-[9%] top-[20%] text-pink-400"
        animate={{
          y: [0, 25, 0],
          rotate: [0, -25, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
      >
        <Sparkles size={52} />
      </motion.div>

      {/* Toy Brick */}
      <motion.div
        className="absolute bottom-[17%] left-[10%] text-cyan-400"
        animate={{
          y: [0, -22, 0],
          rotate: [-10, 10, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <ToyBrick size={48} />
      </motion.div>

      {/* Lightning */}
      <motion.div
        className="absolute bottom-[20%] right-[11%] text-yellow-300"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 12, -8, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <Zap size={48} fill="currentColor" />
      </motion.div>


      <motion.div
        className="relative z-20 w-[90%] max-w-md rounded-[40px] border border-white/15 bg-white/[0.08] px-7 py-10 text-center shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:px-10"
        initial={{
          opacity: 0,
          scale: 0.7,
          rotateX: 25,
          y: 50,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotateX: 0,
          y: 0,
        }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 14,
        }}
        style={{
          perspective: "1200px",
        }}
      >
        {/* Card Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-400/10" />


        <div className="relative mx-auto mb-7 h-32 w-32">
          {/* Outer Orbit */}
          <motion.div
            className="absolute inset-[-15px] rounded-full border border-pink-400/20"
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Second Orbit */}
          <motion.div
            className="absolute inset-[-7px] rounded-full border border-dashed border-cyan-400/30"
            animate={{ rotate: -360 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Orbit Dot */}
          <motion.div
            className="absolute -right-1 top-5 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: "-48px 48px",
            }}
          />

          {/* Logo */}
          <motion.div
            className="relative flex h-32 w-32 items-center justify-center rounded-[35px] border border-white/20 bg-gradient-to-br from-pink-500 via-fuchsia-500 to-violet-600 shadow-[0_20px_50px_rgba(236,72,153,0.45)]"
            initial={{
              scale: 0,
              rotate: -45,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              delay: 0.25,
              type: "spring",
              stiffness: 180,
              damping: 12,
            }}
            whileHover={{
              rotateY: 15,
              rotateX: -10,
              scale: 1.05,
            }}
          >
            {/* Shine */}
            <motion.div
              className="absolute inset-0 rounded-[35px] bg-gradient-to-br from-white/30 via-transparent to-transparent"
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              <Gamepad2
                size={65}
                className="relative z-10 text-white"
                strokeWidth={1.8}
              />
            </motion.div>
          </motion.div>
        </div>


        <motion.h1
          className="relative text-5xl font-black tracking-[0.15em] text-white drop-shadow-[0_5px_20px_rgba(236,72,153,0.4)] sm:text-6xl"
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.55,
            duration: 0.7,
          }}
        >
          <span className="bg-gradient-to-r from-pink-300 via-white to-cyan-300 bg-clip-text text-transparent">
            IDEALS
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          <p className="mt-3 text-lg font-bold text-white/80">
            Kids Toys & Games
          </p>

          <div className="mx-auto mt-3 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-pink-400" />
            <Sparkles size={15} className="text-yellow-300" />
            <span className="h-1 w-8 rounded-full bg-cyan-400" />
          </div>
        </motion.div>

        <motion.div
          className="mt-9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="relative mx-auto h-3 w-full max-w-[260px] overflow-hidden rounded-full border border-white/10 bg-white/10 p-[2px]">
            <motion.div
              className="relative h-full rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_20px_rgba(236,72,153,0.8)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2.4,
                ease: "easeInOut",
              }}
            >
              {/* Moving Shine */}
              <motion.div
                className="absolute right-0 top-0 h-full w-16 bg-gradient-to-r from-transparent to-white/70 blur-sm"
                animate={{
                  x: [-30, 20],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>

          <motion.p
            className="mt-4 text-sm font-semibold tracking-wide text-white/50"
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            Loading your playground...
          </motion.p>
        </motion.div>

        {/* Bottom Badge */}
        <motion.div
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white/50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <Circle size={7} fill="currentColor" className="text-green-400" />
          GET READY TO PLAY
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

