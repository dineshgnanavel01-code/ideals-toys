import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    role: "Happy Mom",
    avatar: "👩🏻",
    text: "The teddy bear was absolutely adorable. My daughter hasn't put it down since it arrived!",
  },
  {
    name: "Rahul Kumar",
    role: "Happy Dad",
    avatar: "👨🏻",
    text: "Great quality toys and very fast delivery. The building blocks are fantastic.",
  },
  {
    name: "Ananya Rao",
    role: "Happy Mom",
    avatar: "👩🏻‍🦰",
    text: "I love that the toys are fun and educational at the same time. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-200/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-full">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-pink-50 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-pink-500 shadow-sm">
            Reviews
          </span>

          <h2 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">
            Parents Love{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              IDEALS
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3" style={{ perspective: "1000px" }}>
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
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
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              // Attractive 3D Hover Effects
              whileHover={{
                y: -12,
                rotateX: 4,
                rotateY: index % 2 === 0 ? 4 : -4,
                scale: 1.02,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="group relative rounded-[35px] border border-slate-100 bg-gradient-to-b from-[#fffaf5] to-white p-8 shadow-lg shadow-slate-200/50 transition-shadow hover:shadow-2xl hover:shadow-purple-200/50"
            >
              <div
                style={{ transform: "translateZ(25px)" }}
                className="flex gap-1 text-yellow-400 transition-transform"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    fill="currentColor"
                    className="drop-shadow-sm"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p
                style={{ transform: "translateZ(20px)" }}
                className="mt-5 leading-7 text-slate-600 font-medium"
              >
                “{review.text}”
              </p>

             <div
                style={{ transform: "translateZ(30px)" }}
                className="mt-8 flex items-center gap-4 border-t border-slate-100/80 pt-5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 text-2xl shadow-inner">
                  {review.avatar}
                </div>

                <div>
                  <h3 className="font-black text-slate-900 text-base">
                    {review.name}
                  </h3>
                  <p className="text-xs font-bold text-purple-500 uppercase tracking-wider mt-0.5">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}