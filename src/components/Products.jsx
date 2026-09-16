import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {Check, Eye, Heart,ShoppingCart,Star,Sparkles,Zap,} from "lucide-react";

import { products } from "../data/data";

export default function Products({
  wishlist = [],
  onAddToCart,
  onWishlist,
  onViewProduct,
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [addedId, setAddedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const categories = [
    "All",
    "Educational Toys",
    "Soft Toys",
    "Outdoor Games",
    "Building Blocks",
    "Remote Control Toys",
    "Baby Toys",
  ];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }

    return products.filter(
      (product) => product.category === selectedCategory
    );
  }, [selectedCategory]);

  const handleAddToCart = (product) => {
    if (typeof onAddToCart !== "function") {
      console.error("onAddToCart is missing. Pass it from App.jsx");
      return;
    }

    onAddToCart(product);

    setAddedId(product.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1400);
  };

  return (
    <section
      id="shop"
      className="relative overflow-hidden bg-gradient-to-b from-[#fffaf5] via-white to-[#fff7fb] px-4 py-20 sm:px-6 lg:px-8"
    >
      

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl"
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-[8%] top-[18%] h-20 w-20 rounded-full border border-pink-200/50"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute right-[8%] top-[35%] h-28 w-28 rounded-full border border-purple-200/50"
      />

      {/* FLOATING TOYS */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[3%] top-28 hidden text-4xl lg:block"
      >
        🧸
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[3%] top-52 hidden text-4xl lg:block"
      >
        🚗
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="pointer-events-none absolute bottom-24 left-[5%] hidden text-3xl lg:block"
      >
        🧩
      </motion.div>

      <div className="relative z-10 mx-auto max-w-full">
        

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
            }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-pink-500 shadow-lg shadow-pink-100"
          >
            <Sparkles size={15} />
            Our Collection
            <Sparkles size={15} />
          </motion.div>

          <motion.h2
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
              delay: 0.15,
              duration: 0.6,
            }}
            className="mt-5 text-4xl font-black tracking-tight text-slate-800 sm:text-5xl lg:text-6xl"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Toys
            </span>
          </motion.h2>

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
              delay: 0.25,
            }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base"
          >
            Discover colorful, creative, safe, and educational
            toys that turn every playtime into an adventure.
          </motion.p>
        </motion.div>

     
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-14 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category, index) => {
            const active = selectedCategory === category;

            return (
              <motion.button
                key={category}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                onClick={() => setSelectedCategory(category)}
                className={`relative overflow-hidden rounded-full px-5 py-3 text-xs font-black shadow-md transition-all sm:text-sm ${
                  active
                    ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-pink-200"
                    : "border border-slate-100 bg-white text-slate-600 hover:border-pink-200 hover:text-pink-500"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                  />
                )}

                <span className="relative z-10">
                  {category}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

               <motion.div
          layout
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => {
              const isWishlisted = wishlist.some(
                (item) => item.id === product.id
              );

              const isAdded = addedId === product.id;
              const isHovered = hoveredId === product.id;

              return (
                <motion.article
                  layout
                  key={product.id}
                  initial={{
                    opacity: 0,
                    y: 60,
                    scale: 0.85,
                    rotateX: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.7,
                    y: 30,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  whileHover={{
                    y: -14,
                    rotateX: 4,
                    rotateY: -4,
                    scale: 1.025,
                  }}
                  onHoverStart={() => setHoveredId(product.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/80 bg-white shadow-xl shadow-slate-200/60 [perspective:1400px]"
                >
                 
                  <motion.div
                    animate={
                      isHovered
                        ? {
                            opacity: 1,
                            scale: 1,
                          }
                        : {
                            opacity: 0,
                            scale: 0.8,
                          }
                    }
                    className="pointer-events-none absolute -inset-3 -z-10 rounded-[40px] bg-gradient-to-r from-pink-300/30 via-purple-300/30 to-blue-300/30 blur-2xl"
                  />

                               <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      animate={
                        isHovered
                          ? {
                              scale: 1.14,
                              rotate: 1.5,
                              x: 3,
                              y: -3,
                            }
                          : {
                              scale: 1,
                              rotate: 0,
                              x: 0,
                              y: 0,
                            }
                      }
                      transition={{
                        duration: 0.55,
                        ease: "easeOut",
                      }}
                      className="h-full w-full object-cover"
                    />

                    {/* IMAGE GRADIENT */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    {/* BADGE */}

                    {product.badge && (
                      <motion.div
                        initial={{
                          x: -40,
                          opacity: 0,
                        }}
                        animate={{
                          x: 0,
                          opacity: 1,
                        }}
                        whileHover={{
                          scale: 1.08,
                        }}
                        className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1.5 text-[10px] font-black text-white shadow-xl"
                      >
                        <Zap
                          size={12}
                          fill="currentColor"
                        />
                        {product.badge}
                      </motion.div>
                    )}

                    {/* WISHLIST */}

                    <motion.button
                      whileHover={{
                        scale: 1.15,
                        rotate: 10,
                      }}
                      whileTap={{
                        scale: 0.75,
                      }}
                      onClick={() => onWishlist?.(product)}
                      className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/95 shadow-xl backdrop-blur"
                    >
                      <motion.div
                        animate={
                          isWishlisted
                            ? {
                                scale: [1, 1.3, 1],
                              }
                            : {}
                        }
                      >
                        <Heart
                          size={19}
                          className={
                            isWishlisted
                              ? "fill-pink-500 text-pink-500"
                              : "text-slate-600"
                          }
                        />
                      </motion.div>
                    </motion.button>

                    {/* QUICK VIEW */}

                    <motion.button
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 20,
                      }}
                      whileHover={{
                        scale: 1.12,
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      onClick={() =>
                        onViewProduct?.(product)
                      }
                      className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/95 shadow-xl backdrop-blur"
                    >
                      <Eye
                        size={19}
                        className="text-slate-700"
                      />
                    </motion.button>

                    <AnimatePresence>
                      {isHovered && (
                        <>
                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              y: [0, -8, 0],
                            }}
                            exit={{
                              opacity: 0,
                              scale: 0,
                            }}
                            transition={{
                              y: {
                                duration: 1.5,
                                repeat: Infinity,
                              },
                            }}
                            className="absolute bottom-5 left-5 text-yellow-400"
                          >
                            <Sparkles
                              size={25}
                              fill="currentColor"
                            />
                          </motion.div>

                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              rotate: 360,
                            }}
                            exit={{
                              opacity: 0,
                            }}
                            transition={{
                              rotate: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                              },
                            }}
                            className="absolute left-1/2 top-1/2 text-white"
                          >
                            <Sparkles size={22} />
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>

                    {/* IMAGE SHINE */}

                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                      <motion.div
                        animate={
                          isHovered
                            ? {
                                x: ["-120%", "150%"],
                              }
                            : {
                                x: "-120%",
                              }
                        }
                        transition={{
                          duration: 0.9,
                          ease: "easeInOut",
                        }}
                        className="absolute top-0 h-full w-20 rotate-[18deg] bg-white/30 blur-lg"
                      />
                    </div>
                  </div>

                  <div className="relative p-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-pink-500">
                      {product.category}
                    </p>

                    <h3 className="mt-1 truncate text-lg font-black text-slate-800">
                      {product.name}
                    </h3>

                    {/* RATING */}

                    <div className="mt-2 flex items-center gap-1">
                      <motion.div
                        animate={
                          isHovered
                            ? {
                                rotate: [0, 15, -15, 0],
                              }
                            : {}
                        }
                      >
                        <Star
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      </motion.div>

                      <span className="text-sm font-black text-slate-700">
                        {product.rating}
                      </span>

                      <span className="text-xs text-slate-400">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* PRICE */}

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <motion.div
                        animate={
                          isHovered
                            ? {
                                x: 2,
                              }
                            : {
                                x: 0,
                              }
                        }
                      >
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Price
                        </p>

                        <span className="text-2xl font-black text-slate-800">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                      </motion.div>

                      {/* ADD TO CART */}

                      <motion.button
                        type="button"
                        whileHover={{
                          scale: 1.08,
                          y: -3,
                        }}
                        whileTap={{
                          scale: 0.88,
                        }}
                        onClick={() =>
                          handleAddToCart(product)
                        }
                        className={`relative flex min-w-[98px] items-center justify-center gap-2 overflow-hidden rounded-xl px-4 py-3 text-sm font-black text-white shadow-xl transition-all ${
                          isAdded
                            ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-green-200"
                            : "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-pink-200"
                        }`}
                      >
                        {/* BUTTON SHINE */}

                        <motion.span
                          animate={{
                            x: ["-120%", "150%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                          className="absolute inset-y-0 w-8 rotate-12 bg-white/30 blur-sm"
                        />

                        <AnimatePresence mode="wait">
                          {isAdded ? (
                            <motion.span
                              key="added"
                              initial={{
                                opacity: 0,
                                scale: 0.5,
                                y: 10,
                              }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                scale: 0.5,
                              }}
                              className="relative z-10 flex items-center gap-1"
                            >
                              <Check size={17} />
                              Added
                            </motion.span>
                          ) : (
                            <motion.span
                              key="add"
                              initial={{
                                opacity: 0,
                                y: -8,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              className="relative z-10 flex items-center gap-1"
                            >
                              <ShoppingCart size={17} />
                              Add
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </div>
                  </div>


                  <motion.div
                    animate={
                      isHovered
                        ? {
                            opacity: [0.2, 0.7, 0.2],
                          }
                        : {
                            opacity: 0,
                          }
                    }
                    transition={{
                      duration: 1.5,
                      repeat: isHovered ? Infinity : 0,
                    }}
                    className="pointer-events-none absolute bottom-0 left-1/2 h-1 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-sm"
                  />
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="py-20 text-center"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="text-6xl"
            >
              🧸
            </motion.div>

            <h3 className="mt-5 text-2xl font-black text-slate-800">
              No toys found
            </h3>

            <p className="mt-2 text-slate-500">
              Try another category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}