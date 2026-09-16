import { motion } from "framer-motion";
import {Star,Quote,BadgeCheck,Heart,MessageCircle,} from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Mother of 2",
    avatar: "👩🏻",
    rating: 5,
    review:
      "The toys are absolutely wonderful! My kids loved the colorful building sets. The quality is excellent and delivery was super fast.",
    product: "Building Blocks Set",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Father",
    avatar: "👨🏻",
    rating: 5,
    review:
      "I ordered a remote control car for my son and he absolutely loved it. The toy feels premium and works perfectly.",
    product: "Remote Control Car",
    date: "5 days ago",
  },
  {
    id: 3,
    name: "Ananya Reddy",
    role: "Mother",
    avatar: "👩🏻‍🦰",
    rating: 5,
    review:
      "IDEALS has become my favorite place for kids' toys. Everything feels safe, colorful, and age appropriate. Highly recommended!",
    product: "Educational Puzzle",
    date: "1 week ago",
  },
  {
    id: 4,
    name: "Arjun Mehta",
    role: "Father of 1",
    avatar: "👨🏻‍💼",
    rating: 4,
    review:
      "Great collection and very reasonable prices. My daughter loved the cute teddy bear. Packaging was also really good.",
    product: "Cuddly Teddy Bear",
    date: "1 week ago",
  },
  {
    id: 5,
    name: "Sneha Kapoor",
    role: "Mother of 2",
    avatar: "👩🏼",
    rating: 5,
    review:
      "The educational toys are fantastic. My children are having fun while learning new things. The quality exceeded my expectations.",
    product: "Learning Activity Kit",
    date: "2 weeks ago",
  },
  {
    id: 6,
    name: "Vikram Nair",
    role: "Father",
    avatar: "👨🏽",
    rating: 5,
    review:
      "Very smooth shopping experience. The product arrived exactly as shown on the website. My son has been playing with it every day!",
    product: "Superhero Action Figure",
    date: "2 weeks ago",
  },
  {
    id: 7,
    name: "Meera Iyer",
    role: "Mother",
    avatar: "👩🏻‍🦱",
    rating: 5,
    review:
      "I really appreciate the variety of toys available. The colors are beautiful and the products feel safe for children.",
    product: "Kids Art & Craft Kit",
    date: "3 weeks ago",
  },
  {
    id: 8,
    name: "Karan Patel",
    role: "Father of 2",
    avatar: "👨🏻",
    rating: 4,
    review:
      "Excellent toys at affordable prices. The delivery was quick and the customer experience was very pleasant.",
    product: "Kids Racing Car Set",
    date: "3 weeks ago",
  },
  {
    id: 9,
    name: "Divya Menon",
    role: "Mother",
    avatar: "👩🏽",
    rating: 5,
    review:
      "My daughter was so excited when her package arrived! Everything was packed beautifully. We will definitely shop here again.",
    product: "Doll & Accessories Set",
    date: "1 month ago",
  },
  {
    id: 10,
    name: "Amit Joshi",
    role: "Father",
    avatar: "👨🏻‍🦱",
    rating: 5,
    review:
      "Fantastic toy collection for different age groups. I especially liked the detailed product information and fast delivery.",
    product: "STEM Science Kit",
    date: "1 month ago",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#faf7ff] to-[#f5f0ff] px-5 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-pink-300/20 blur-[110px]" />
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-purple-300/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-300/10 blur-[120px]" />

        <div className="absolute left-[8%] top-[15%] text-3xl opacity-30">
          ⭐
        </div>

        <div className="absolute right-[10%] top-[20%] text-3xl opacity-30">
          💖
        </div>

        <div className="absolute bottom-[15%] left-[12%] text-3xl opacity-30">
          🧸
        </div>

        <div className="absolute bottom-[20%] right-[8%] text-3xl opacity-30">
          🧩
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-full text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/90 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-pink-500 shadow-lg shadow-pink-100 backdrop-blur"
          >
            <Heart size={15} fill="currentColor" />
            Happy Families
          </motion.div>

          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Loved By Parents.
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Loved By Kids.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-full text-sm leading-7 text-slate-500 sm:text-base">
            Discover what parents and children have to say about their
            experience with IDEALS Toys & Games.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mt-8 flex w-fit items-center gap-4 rounded-2xl border border-amber-100 bg-white/90 px-5 py-3 shadow-lg shadow-amber-100/50"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className="text-amber-400"
                  fill="currentColor"
                />
              ))}
            </div>

            <div className="h-6 w-px bg-slate-200" />

            <div className="text-left">
              <p className="text-sm font-black text-slate-900">
                4.9 out of 5
              </p>
              <p className="text-[10px] font-semibold text-slate-500">
                Based on 10,000+ reviews
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{
                opacity: 0,
                y: 40,
                rotateX: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -10,
                rotateX: 3,
                rotateY: index % 2 === 0 ? 2 : -2,
                scale: 1.02,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white bg-white/90 p-6 shadow-lg shadow-purple-100/40 backdrop-blur-xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-200/50"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />

              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.15,
                  z: 20,
                }}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 text-purple-500"
              >
                <Quote size={17} />
              </motion.div>

              <div
                className="relative z-10 flex items-center gap-3"
                style={{
                  transform: "translateZ(20px)",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: -5,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 text-2xl shadow-sm"
                >
                  {review.avatar}
                </motion.div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-black text-slate-900">
                      {review.name}
                    </h3>

                    <BadgeCheck
                      size={15}
                      className="text-blue-500"
                      fill="currentColor"
                    />
                  </div>

                  <p className="text-[11px] font-medium text-slate-500">
                    {review.role}
                  </p>
                </div>
              </div>

              <div
                className="relative z-10 mt-5 flex items-center justify-between"
                style={{
                  transform: "translateZ(15px)",
                }}
              >
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      className={
                        star <= review.rating
                          ? "text-amber-400"
                          : "text-slate-200"
                      }
                      fill={
                        star <= review.rating
                          ? "currentColor"
                          : "transparent"
                      }
                    />
                  ))}
                </div>

                <span className="text-[10px] font-medium text-slate-400">
                  {review.date}
                </span>
              </div>

              <p
                className="relative z-10 mt-5 text-sm leading-7 text-slate-600"
                style={{
                  transform: "translateZ(12px)",
                }}
              >
                “{review.review}”
              </p>

              {/* Product */}
              <div
                className="relative z-10 mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4"
                style={{
                  transform: "translateZ(15px)",
                }}
              >
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Purchased
                  </p>

                  <p className="mt-1 text-xs font-black text-purple-600">
                    {review.product}
                  </p>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
                  <BadgeCheck size={16} />
                </div>
              </div>

              {/* Bottom shine */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 rounded-[32px] border border-purple-100 bg-white/90 p-6 shadow-xl shadow-purple-100/40 backdrop-blur-xl sm:p-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            {/* Left */}
            <div className="flex items-center gap-4 text-center sm:text-left">
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg shadow-purple-200"
              >
                <MessageCircle size={25} />
              </motion.div>

              <div>
                <h3 className="text-lg font-black text-slate-900">
                  Real Reviews From Real Families
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Every review helps us make playtime even better.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 text-center">
              <div>
                <p className="text-xl font-black text-purple-600">10K+</p>
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Reviews
                </p>
              </div>

              <div>
                <p className="text-xl font-black text-pink-500">4.9★</p>
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Rating
                </p>
              </div>

              <div>
                <p className="text-xl font-black text-emerald-500">98%</p>
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Happy
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}