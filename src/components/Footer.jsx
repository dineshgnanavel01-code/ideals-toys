import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 px-5 pb-10 pt-20 text-white [perspective:1000px]">
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-pink-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-full">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-2xl shadow-lg shadow-pink-500/30"
              >
                🧸
              </motion.div>

              <div>
                <h2 className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-xl font-black tracking-wider text-transparent">
                  IDEALS
                </h2>

                <p className="text-xs font-semibold uppercase tracking-widest text-pink-400">
                  Toys & Games
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xs text-sm font-medium leading-6 text-slate-400">
              Bringing smiles, creativity and imagination to little
              explorers everywhere.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-base font-black tracking-wide text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-3 text-sm font-medium text-slate-400">
              {["Home", "Shop", "Categories", "About Us", "Contact"].map(
                (link) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    whileHover={{ x: 6, color: "#f472b6" }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="w-fit transition-colors"
                  >
                    {link}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-base font-black tracking-wide text-white">
              Popular Categories
            </h3>

            <div className="mt-6 flex flex-col gap-3 text-sm font-medium text-slate-400">
              {[
                "Educational Toys",
                "Soft Toys",
                "Building Blocks",
                "Outdoor Games",
                "Remote Control Toys",
              ].map((cat) => (
                <motion.span
                  key={cat}
                  whileHover={{ x: 6, color: "#ffffff" }}
                  className="w-fit cursor-pointer transition-colors"
                >
                  {cat}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Follow Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-base font-black tracking-wide text-white">
              Follow Us
            </h3>

            <div className="mt-6 flex gap-3">
              {/* Instagram */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 shadow-md transition-colors hover:border-pink-500 hover:bg-pink-500 hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  className="h-[19px] w-[19px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 shadow-md transition-colors hover:border-pink-500 hover:bg-pink-500 hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  className="h-[19px] w-[19px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.581 9 4.75V8z" />
                </svg>
              </motion.a>

              {/* Twitter / X */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 shadow-md transition-colors hover:border-pink-500 hover:bg-pink-500 hover:text-white"
                aria-label="Twitter"
              >
                <svg
                  className="h-[19px] w-[19px] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
            </div>

            {/* Secure Payment */}
            <div className="mt-8">
              <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                Secure Payment
              </p>

              <div className="mt-3 flex gap-2">
                {["VISA", "UPI", "COD"].map((pay) => (
                  <motion.span
                    key={pay}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="cursor-pointer rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 text-xs font-black text-white shadow-sm backdrop-blur-sm"
                  >
                    {pay}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8 text-xs font-medium text-slate-500">
          <p>© 2026 IDEALS Toys & Games. All rights reserved.</p>

          {/* Arrow Only - Bottom Right */}
          <motion.button
            onClick={backToTop}
            whileHover={{
              scale: 1.15,
              y: -4,
              rotate: -5,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg shadow-pink-500/30 transition-colors hover:bg-pink-600"
            aria-label="Back to top"
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowUp size={20} strokeWidth={2.5} />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}