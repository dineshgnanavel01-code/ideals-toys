import { motion } from "framer-motion";
import {ArrowRight, Blocks,Gamepad2,Play,Sparkles,Star,Zap, Circle,} from "lucide-react";

const floatingToys = [
  {
    emoji: "🧸",
    className: "left-[3%] top-[23%]",
    size: "text-5xl lg:text-7xl",
    depth: 30,
    delay: 0,
  },
  {
    emoji: "🚗",
    className: "right-[4%] top-[20%]",
    size: "text-5xl lg:text-7xl",
    depth: 50,
    delay: 0.4,
  },
  {
    emoji: "🧩",
    className: "left-[7%] bottom-[12%]",
    size: "text-4xl lg:text-6xl",
    depth: 20,
    delay: 0.8,
  },
  {
    emoji: "🚀",
    className: "right-[10%] bottom-[10%]",
    size: "text-5xl lg:text-7xl",
    depth: 60,
    delay: 1.2,
  },
  {
    emoji: "🎮",
    className: "left-[18%] top-[10%]",
    size: "text-3xl lg:text-5xl",
    depth: 40,
    delay: 1.6,
  },
];

const particles = Array.from({ length: 24 });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#fff7ed] pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,100,180,0.30),transparent_27%),radial-gradient(circle_at_90%_20%,rgba(60,180,255,0.30),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(255,210,50,0.30),transparent_35%)]" />

      {/* Pink glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[100px]"
      />

      {/* Blue glow */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-300/20 blur-[110px]"
      />

      {/* Pink ring */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.06, 1],
        }}
        transition={{
          rotate: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 5,
            repeat: Infinity,
          },
        }}
        className="pointer-events-none absolute -left-48 top-20 h-[550px] w-[550px] rounded-full border-[60px] border-pink-300/20"
      />

      {/* Blue ring */}
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 6,
            repeat: Infinity,
          },
        }}
        className="pointer-events-none absolute -right-48 bottom-0 h-[650px] w-[650px] rounded-full border-[80px] border-blue-300/20"
      />

      {/* Particles */}
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="pointer-events-none absolute h-2 w-2 rounded-full bg-white shadow-lg"
          style={{
            left: `${4 + ((index * 17) % 92)}%`,
            top: `${8 + ((index * 23) % 84)}%`,
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, index % 2 ? 12 : -12, 0],
            opacity: [0.15, 1, 0.15],
            scale: [0.5, 1.4, 0.5],
          }}
          transition={{
            duration: 2.5 + (index % 4),
            delay: index * 0.12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating toys */}
      {floatingToys.map((toy, index) => (
        <motion.div
          key={index}
          className={`pointer-events-none absolute ${toy.className} ${toy.size} z-10 hidden select-none sm:block`}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -25, 0],
            rotate: [-8, 8, -8],
          }}
          transition={{
            opacity: {
              duration: 0.5,
              delay: toy.delay,
            },
            scale: {
              duration: 0.6,
              delay: toy.delay,
            },
            y: {
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            transform: `translateZ(${toy.depth}px)`,
            filter: "drop-shadow(0 25px 20px rgba(0,0,0,0.16))",
          }}
        >
          {toy.emoji}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-20 mx-auto grid min-h-[calc(100vh-80px)] max-w-[1500px] items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-14">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="w-full"
        >
          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: -5,
            }}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2.5 text-sm font-black text-pink-600 shadow-xl shadow-pink-200/30 backdrop-blur-xl sm:px-5"
          >
            <motion.span
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="shrink-0"
            >
              <Sparkles size={17} />
            </motion.span>

            <span>Big Fun. Little Prices.</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.7,
            }}
            className="max-w-4xl text-5xl font-black leading-[0.92] tracking-tight text-slate-800 sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Play.

            <motion.span
              className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              {" "}
              Learn.
            </motion.span>

            <br />

            Imagine.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="mt-7 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:text-lg"
          >
            Discover colorful toys, creative games, educational kits and
            adorable friends designed to make every childhood moment
            unforgettable.
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.65,
            }}
            className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            {/* SHOP NOW */}
            <motion.a
              href="#shop"
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group relative z-30 flex min-h-[54px] w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-4 font-black text-white shadow-2xl shadow-pink-300/50 sm:w-auto sm:min-w-[160px]"
            >
              {/* Shine */}
              <motion.span
                animate={{
                  x: ["-120%", "150%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="pointer-events-none absolute inset-y-0 left-0 w-10 rotate-12 bg-white/30 blur-md"
              />

              <span className="relative z-10 whitespace-nowrap">
                Shop Now
              </span>

              {/* ARROW - FIXED */}
              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex shrink-0 items-center justify-center"
              >
                <ArrowRight
                  size={20}
                  strokeWidth={3}
                  className="block"
                />
              </motion.span>
            </motion.a>

            {/* EXPLORE TOYS */}
            <motion.a
              href="#categories"
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="relative z-30 flex min-h-[54px] w-full items-center justify-center gap-3 rounded-2xl border border-white bg-white/90 px-6 py-4 font-black text-slate-700 shadow-xl backdrop-blur-xl sm:w-auto sm:min-w-[180px]"
            >
              <motion.span
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex shrink-0 items-center justify-center"
              >
                <Play
                  size={18}
                  className="fill-pink-500 text-pink-500"
                />
              </motion.span>

              <span className="whitespace-nowrap">
                Explore Toys
              </span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
            }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-5"
          >
            {[
              ["500+", "Fun Products"],
              ["10K+", "Happy Kids"],
              ["4.9★", "Parent Rating"],
            ].map(([number, label]) => (
              <motion.div
                key={label}
                whileHover={{
                  y: -7,
                  scale: 1.08,
                }}
                className="min-w-[80px]"
              >
                <strong className="text-2xl font-black text-slate-800">
                  {number}
                </strong>

                <p className="text-sm font-medium text-slate-500">
                  {label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.6,
            rotateY: 35,
            rotateX: 10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0,
            rotateX: 0,
          }}
          transition={{
            duration: 1.1,
            type: "spring",
            stiffness: 80,
          }}
          className="relative flex min-h-[500px] items-center justify-center [perspective:1600px] sm:min-h-[540px]"
        >
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute h-72 w-72 rounded-full bg-pink-400/40 blur-[90px] sm:h-[420px] sm:w-[420px]"
          />

          {/* Ring 1 */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[330px] w-[330px] rounded-full border-2 border-dashed border-pink-300/70 sm:h-[510px] sm:w-[510px]"
          />

          {/* Ring 2 */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[280px] w-[280px] rounded-full border-2 border-dashed border-blue-300/60 sm:h-[440px] sm:w-[440px]"
          />

          {/* Ring 3 */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[235px] w-[235px] rounded-full border border-purple-300/50 sm:h-[380px] sm:w-[380px]"
          />

          {/* Glass card */}
          <motion.div
            animate={{
              y: [0, -14, 0],
              rotateZ: [-1.5, 1.5, -1.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.04,
              rotateY: 12,
              rotateX: -8,
              rotateZ: 0,
              y: -10,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="group relative flex h-[370px] w-[270px] items-center justify-center rounded-[45px] border border-white/90 bg-white/45 shadow-[0_45px_120px_rgba(80,40,100,0.30)] backdrop-blur-2xl transition-shadow duration-300 hover:shadow-[0_60px_140px_rgba(190,70,180,0.35)] sm:h-[480px] sm:w-[390px] sm:rounded-[55px]"
          >
            {/* Glass shine */}
            <motion.div
              animate={{
                x: ["-120%", "150%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="pointer-events-none absolute inset-y-0 z-30 w-20 rotate-[20deg] bg-white/30 blur-xl"
            />

            {/* Highlight */}
            <div className="absolute left-8 right-8 top-6 h-24 rounded-full bg-white/50 blur-2xl" />

            {/* Inner glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute h-64 w-64 rounded-full bg-pink-300/30 blur-3xl"
            />

            {/* Teddy */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateZ: [-3, 3, -3],
                rotateY: [-8, 8, -8],
              }}
              whileHover={{
                scale: 1.12,
                rotateY: 25,
                rotateX: -10,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-20 select-none text-[120px] drop-shadow-[0_35px_30px_rgba(0,0,0,0.25)] sm:text-[190px]"
              style={{
                transform: "translateZ(110px)",
                transformStyle: "preserve-3d",
              }}
            >
              🧸

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 -z-10 rounded-full bg-yellow-300/40 blur-3xl"
              />
            </motion.div>

            {/* Best seller card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateZ: [-3, 3, -3],
              }}
              whileHover={{
                scale: 1.08,
                rotateY: 10,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute -bottom-5 -left-4 z-40 rounded-3xl border border-white bg-white/95 p-3 shadow-2xl backdrop-blur-xl sm:-bottom-7 sm:-left-12 sm:p-4"
              style={{
                transform: "translateZ(140px)",
                transformStyle: "preserve-3d",
              }}
            >
              <p className="text-[9px] font-black tracking-wider text-slate-400 sm:text-[10px]">
                BEST SELLER
              </p>

              <p className="mt-1 text-sm font-black text-slate-800 sm:text-base">
                Teddy Bear
              </p>

              <div className="mt-1 flex items-center gap-1">
                <Star
                  size={14}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span className="text-xs font-bold">
                  4.9
                </span>
              </div>

              <p className="mt-1 font-black text-pink-500">
                ₹799
              </p>
            </motion.div>

            {/* Discount */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [-7, 7, -7],
              }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute -right-4 top-8 z-40 rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-300 px-3 py-2 text-sm font-black text-orange-900 shadow-2xl sm:-right-10 sm:px-5 sm:py-3"
              style={{
                transform: "translateZ(160px)",
              }}
            >
              <div className="flex items-center gap-2">
                <Zap size={18} fill="currentColor" />
                30% OFF
              </div>
            </motion.div>

            {/* Game icon */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 10, 0],
              }}
              whileHover={{
                scale: 1.15,
                rotateY: 20,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -right-4 bottom-16 z-40 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-2xl sm:-right-9 sm:h-14 sm:w-14"
              style={{
                transform: "translateZ(130px)",
              }}
            >
              <Gamepad2 size={27} />
            </motion.div>

            {/* Blocks icon */}
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -10, 0],
              }}
              whileHover={{
                scale: 1.15,
                rotateY: -20,
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
              }}
              className="absolute -left-4 top-16 z-40 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-2xl sm:-left-9 sm:h-14 sm:w-14"
              style={{
                transform: "translateZ(130px)",
              }}
            >
              <Blocks size={27} />
            </motion.div>

            {/* Orbit star */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 z-30"
            >
              <div
                className="absolute left-1/2 top-[-18px] -translate-x-1/2 text-2xl sm:text-3xl"
                style={{
                  transform: "translateZ(180px)",
                }}
              >
                ⭐
              </div>
            </motion.div>

            {/* Orbit balloon */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 z-30"
            >
              <div
                className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 text-2xl sm:text-3xl"
                style={{
                  transform: "translateZ(180px)",
                }}
              >
                🎈
              </div>
            </motion.div>
          </motion.div>

          {/* Orbit dot 1 */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[310px] w-[310px] sm:h-[490px] sm:w-[490px]"
          >
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-pink-500 shadow-[0_0_25px_rgba(236,72,153,0.8)]" />
          </motion.div>

          {/* Orbit dot 2 */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[270px] w-[270px] sm:h-[420px] sm:w-[420px]"
          >
            <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
          </motion.div>

          {/* Tiny circle */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="absolute right-[15%] top-[18%] text-purple-400"
          >
            <Circle size={12} fill="currentColor" />
          </motion.div>

          {/* Tiny circle */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute bottom-[20%] left-[15%] text-pink-400"
          >
            <Circle size={10} fill="currentColor" />
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-white/30 [clip-path:ellipse(70%_50%_at_50%_100%)]" />
    </section>
  );
}