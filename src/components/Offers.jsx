import { motion } from "framer-motion";
import {ArrowRight,Clock3,Sparkles,Zap,Gift,Star,ShoppingBag,} from "lucide-react";
import { useEffect, useState } from "react";

const floatingToys = [
  {
    emoji: "🧸",
    className: "left-[5%] top-[18%]",
    rotate: -15,
    duration: 4,
  },
  {
    emoji: "🚀",
    className: "right-[8%] top-[12%]",
    rotate: 14,
    duration: 3.5,
  },
  {
    emoji: "🧩",
    className: "left-[12%] bottom-[15%]",
    rotate: 12,
    duration: 4.5,
  },
  {
    emoji: "🎮",
    className: "right-[12%] bottom-[18%]",
    rotate: -12,
    duration: 3.8,
  },
  {
    emoji: "🎁",
    className: "right-[32%] top-[8%]",
    rotate: 8,
    duration: 4.2,
  },
];

const particles = Array.from({ length: 18 });

export default function Offers() {
  const [time, setTime] = useState({
    hours: 8,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          return {
            hours: 8,
            minutes: 42,
            seconds: 19,
          };
        }

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            }
          }
        }

        return {
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#faf5ff] to-pink-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-pink-400/20 blur-[120px]" />

        <div className="absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[130px]" />

        <div className="absolute bottom-[-180px] left-1/3 h-[450px] w-[450px] rounded-full bg-blue-400/10 blur-[130px]" />

        {particles.map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + (index % 5),
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-purple-400"
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${(index * 23) % 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1500px]">
      
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            rotateX: 12,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            type: "spring",
            stiffness: 70,
          }}
          whileHover={{
            rotateX: 1.5,
            rotateY: -1,
            scale: 1.01,
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1600px",
          }}
          className="relative min-h-[650px] overflow-hidden rounded-[42px] border border-white/30 bg-gradient-to-br from-[#ec4899] via-[#8b5cf6] to-[#4f46e5] shadow-[0_35px_100px_rgba(99,102,241,0.35)] sm:min-h-[590px]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.25),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,.16),transparent_25%)]" />

          
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
              transform:
                "perspective(500px) rotateX(55deg) scale(1.5)",
              transformOrigin: "center bottom",
            }}
          />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-white/20"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-10 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-dashed border-white/20"
          />

          
          {floatingToys.map((toy, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -20, 0],
                rotate: [
                  toy.rotate,
                  toy.rotate + 8,
                  toy.rotate,
                ],
              }}
              transition={{
                duration: toy.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.3,
                rotate: 0,
                z: 80,
              }}
              className={`absolute z-20 hidden h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-3xl shadow-2xl backdrop-blur-md sm:flex ${toy.className}`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {toy.emoji}
            </motion.div>
          ))}

          
          <div className="relative z-30 flex min-h-[650px] items-center px-6 py-14 sm:min-h-[590px] sm:px-12 lg:px-16">
            <div className="w-full max-w-3xl">
              {/* Badge */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-xl"
              >
                <Zap
                  size={15}
                  className="text-yellow-300"
                  fill="currentColor"
                />

                Limited Time Deal
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3,
                  duration: 0.7,
                }}
                className="mt-6 text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-7xl"
              >
                Big Fun.
                <br />

                <span className="bg-gradient-to-r from-yellow-200 via-white to-pink-100 bg-clip-text text-transparent">
                  Bigger Savings!
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                }}
                className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base"
              >
                Make playtime unforgettable with exciting toys,
                creative games, and amazing deals. Grab your
                favorites before the clock runs out!
              </motion.p>

              
              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                }}
                className="mt-7 flex flex-wrap items-center gap-3"
              >
                {/* Discount */}
                <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-black/10 px-4 py-3 backdrop-blur-xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-300 text-purple-700 shadow-lg">
                    <Gift size={20} />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/60">
                      Save Up To
                    </p>

                    <p className="text-lg font-black text-white">
                      50% OFF
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-black/10 px-4 py-3 backdrop-blur-xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-yellow-300">
                    <Star
                      size={20}
                      fill="currentColor"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/60">
                      Parent Rating
                    </p>

                    <p className="text-lg font-black text-white">
                      4.9 / 5
                    </p>
                  </div>
                </div>
              </motion.div>

              
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                }}
                className="mt-8"
              >
                <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70">
                  <Clock3 size={15} />
                  Offer Ends In
                </div>

                <div className="flex gap-2 sm:gap-3">
                  {[
                    ["Hours", time.hours],
                    ["Minutes", time.minutes],
                    ["Seconds", time.seconds],
                  ].map(([label, value]) => (
                    <motion.div
                      key={label}
                      whileHover={{
                        y: -6,
                        rotateX: 8,
                        scale: 1.05,
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                      className="min-w-[75px] rounded-2xl border border-white/25 bg-white/15 px-3 py-3 text-center shadow-xl backdrop-blur-xl sm:min-w-[90px] sm:px-4 sm:py-4"
                    >
                      <motion.div
                        key={value}
                        initial={{
                          opacity: 0,
                          y: -10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        className="text-2xl font-black text-white sm:text-3xl"
                      >
                        {String(value).padStart(2, "0")}
                      </motion.div>

                      <div className="mt-1 text-[9px] font-bold uppercase tracking-widest text-white/60">
                        {label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

             
              <motion.a
                href="#shop"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.7,
                  duration: 0.6,
                }}
                whileHover={{
                  scale: 1.06,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-black text-purple-600 shadow-2xl shadow-purple-950/20 transition-colors hover:bg-yellow-100"
              >
                <ShoppingBag size={18} />

                Shop The Offer

                <ArrowRight size={18} />
              </motion.a>
            </div>
          </div>

         
          <div className="pointer-events-none absolute bottom-10 right-[5%] hidden lg:block">
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 8, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative flex h-[300px] w-[300px] items-center justify-center"
            >
              {/* Glow */}
              <div className="absolute h-64 w-64 rounded-full bg-pink-300/30 blur-[70px]" />

              {/* Ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-64 w-64 rounded-full border-2 border-dashed border-white/30"
              />

              {/* Toy */}
              <div
                style={{
                  transform: "translateZ(80px)",
                }}
                className="relative text-[150px] drop-shadow-[0_30px_30px_rgba(0,0,0,0.3)]"
              >
                🧸
              </div>

              {/* Sparkles */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute right-0 top-10 text-yellow-200"
              >
                <Sparkles size={32} />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom shine */}
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}