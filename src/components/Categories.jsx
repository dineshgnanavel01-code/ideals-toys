import { motion } from "framer-motion";
import {ArrowUpRight,Sparkles,Brain,Heart,Trophy,Blocks, Gamepad2,Baby,} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Educational Toys",
    short: "LEARN",
    emoji: "🧠",
    icon: Brain,
    description: "Learn through play",
    gradient: "from-yellow-300 via-amber-200 to-orange-300",
    glow: "bg-yellow-400",
    text: "text-amber-700",
  },
  {
    id: 2,
    name: "Soft Toys",
    short: "CUDDLE",
    emoji: "🧸",
    icon: Heart,
    description: "Cute little friends",
    gradient: "from-pink-300 via-rose-200 to-fuchsia-300",
    glow: "bg-pink-400",
    text: "text-pink-700",
  },
  {
    id: 3,
    name: "Outdoor Games",
    short: "PLAY",
    emoji: "⚽",
    icon: Trophy,
    description: "Fun beyond the room",
    gradient: "from-emerald-300 via-green-200 to-teal-300",
    glow: "bg-emerald-400",
    text: "text-emerald-700",
  },
  {
    id: 4,
    name: "Building Blocks",
    short: "BUILD",
    emoji: "🧱",
    icon: Blocks,
    description: "Build big ideas",
    gradient: "from-blue-300 via-sky-200 to-indigo-300",
    glow: "bg-blue-400",
    text: "text-blue-700",
  },
  {
    id: 5,
    name: "Remote Control",
    short: "RACE",
    emoji: "🚗",
    icon: Gamepad2,
    description: "Ready, set, race!",
    gradient: "from-purple-300 via-fuchsia-200 to-violet-300",
    glow: "bg-purple-400",
    text: "text-purple-700",
  },
  {
    id: 6,
    name: "Baby Toys",
    short: "BABY",
    emoji: "🍼",
    icon: Baby,
    description: "Made for tiny hands",
    gradient: "from-orange-300 via-amber-200 to-yellow-300",
    glow: "bg-orange-400",
    text: "text-orange-700",
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="relative overflow-hidden bg-[#f8f7ff] px-5 py-24 sm:py-28"
    >
      
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-150px] top-20 h-96 w-96 rounded-full bg-pink-300/20 blur-[120px]" />

        <div className="absolute right-[-150px] top-1/3 h-[450px] w-[450px] rounded-full bg-purple-300/20 blur-[130px]" />

        <div className="absolute bottom-[-200px] left-1/3 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-[130px]" />

        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute left-[10%] top-[20%] h-3 w-3 rounded-full bg-pink-400"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute right-[12%] top-[25%] h-4 w-4 rounded-full bg-purple-400"
        />

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
          }}
          className="absolute bottom-[15%] left-[20%] h-2 w-2 rounded-full bg-blue-400"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-full">
       
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-full text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-purple-600 shadow-lg shadow-purple-100 backdrop-blur-xl"
          >
            <Sparkles size={14} />
            Explore Our World
          </motion.div>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Find Your
            <span className="ml-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Perfect Play
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            From creative learning to exciting adventures, discover toys
            designed to make every playtime unforgettable.
          </p>
        </motion.div>

      
        <div className="grid grid-cols-2 gap-5 [perspective:1400px] sm:gap-7 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.a
                key={category.id}
                href="#shop"
                initial={{
                  opacity: 0,
                  y: 60,
                  rotateX: 25,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 90,
                  damping: 15,
                }}
                whileHover={{
                  y: -16,
                  scale: 1.06,
                  rotateX: 8,
                  rotateY: index % 2 === 0 ? 8 : -8,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="group relative h-[270px] cursor-pointer"
              >
               
                <div
                  className={`absolute inset-3 rounded-[35px] ${category.glow} opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-30`}
                />

            
                <div
                  className={`relative h-full overflow-hidden rounded-[32px] border border-white/80 bg-gradient-to-br ${category.gradient} p-5 shadow-xl shadow-slate-200/70 transition-all duration-500 group-hover:shadow-2xl`}
                >
                  {/* Glossy shine */}
                  <motion.div
                    initial={{
                      x: "-120%",
                    }}
                    whileHover={{
                      x: "120%",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 z-20 w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  />

                  {/* Background circle */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/40"
                  />

                  <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-white/20 blur-xl" />

                  {/* Number */}
                  <div className="absolute right-4 top-4">
                    <span className="text-[10px] font-black tracking-widest text-slate-700/40">
                      0{category.id}
                    </span>
                  </div>

                              <div
                    style={{
                      transform: "translateZ(60px)",
                    }}
                    className="relative flex h-[145px] items-center justify-center"
                  >
                    {/* Icon shadow platform */}
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                      }}
                      className="absolute h-24 w-24 rounded-[30px] bg-white/60 shadow-xl backdrop-blur-md"
                    />

                    {/* Rotating mini ring */}
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute h-28 w-28 rounded-full border-2 border-dashed border-white/70"
                    />

                    {/* Emoji */}
                    <motion.span
                      animate={{
                        y: [0, -7, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                      whileHover={{
                        scale: 1.3,
                        rotate: 12,
                      }}
                      className="relative z-10 text-6xl drop-shadow-[0_12px_10px_rgba(0,0,0,0.2)] sm:text-7xl"
                    >
                      {category.emoji}
                    </motion.span>
                  </div>

                              <div
                    style={{
                      transform: "translateZ(35px)",
                    }}
                    className="relative z-10"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span
                        className={`text-[9px] font-black tracking-[0.2em] ${category.text}`}
                      >
                        {category.short}
                      </span>

                      <motion.div
                        whileHover={{
                          rotate: 45,
                          scale: 1.15,
                        }}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-slate-700 shadow-sm backdrop-blur"
                      >
                        <ArrowUpRight size={15} />
                      </motion.div>
                    </div>

                    <h3 className="text-sm font-black leading-tight text-slate-900">
                      {category.name}
                    </h3>

                    <p className="mt-1 text-[10px] font-medium text-slate-600">
                      {category.description}
                    </p>
                  </div>

                  {/* Bottom icon */}
                  <div className="absolute bottom-3 right-4 opacity-30">
                    <Icon size={18} />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="#shop"
            whileHover={{
              scale: 1.06,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-7 py-4 text-sm font-black text-white shadow-xl shadow-slate-300"
          >
            <span>Explore All Toys</span>

            <motion.span
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}