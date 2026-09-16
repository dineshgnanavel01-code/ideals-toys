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
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-pink-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

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
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-2xl shadow-lg shadow-pink-500/30 cursor-pointer"
              >
                🧸
              </motion.div>

              <div>
                <h2 className="text-xl font-black tracking-wider bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  IDEALS
                </h2>
                <p className="text-xs text-pink-400 font-semibold uppercase tracking-widest">
                  Toys & Games
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-6 text-slate-400 font-medium">
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
            <h3 className="font-black text-white text-base tracking-wide">Quick Links</h3>

            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-400 font-medium">
              {["Home", "Shop", "Categories", "About Us", "Contact"].map((link, i) => (
                <motion.a 
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "")}`} 
                  whileHover={{ x: 6, color: "#f472b6" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-fit transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-black text-white text-base tracking-wide">Popular Categories</h3>

            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-400 font-medium">
              {["Educational Toys", "Soft Toys", "Building Blocks", "Outdoor Games", "Remote Control Toys"].map((cat) => (
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-black text-white text-base tracking-wide">Follow Us</h3>

            <div className="mt-6 flex gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-slate-300 transition-colors hover:bg-pink-500 hover:border-pink-500 hover:text-white shadow-md"
                aria-label="Instagram"
              >
                <svg className="w-[19px] h-[19px] fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-slate-300 transition-colors hover:bg-pink-500 hover:border-pink-500 hover:text-white shadow-md"
                aria-label="Facebook"
              >
                <svg className="w-[19px] h-[19px] fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.581 9 4.75V8z"/>
                </svg>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-slate-300 transition-colors hover:bg-pink-500 hover:border-pink-500 hover:text-white shadow-md"
                aria-label="Twitter"
              >
                <svg className="w-[19px] h-[19px] fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
            </div>

            <div className="mt-8">
              <p className="text-xs font-black text-slate-500 uppercase tracking-widest">
                Secure Payment
              </p>

              <div className="mt-3 flex gap-2">
                {["VISA", "UPI", "COD"].map((pay) => (
                  <motion.span 
                    key={pay}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="rounded-xl bg-white/10 border border-white/10 px-3.5 py-2 text-xs font-black text-white shadow-sm cursor-pointer backdrop-blur-sm"
                  >
                    {pay}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row items-center font-medium">
          <p>
            © 2026 IDEALS Toys & Games. All rights reserved.
          </p>

          <motion.button
            onClick={backToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 font-bold text-white shadow-md cursor-pointer transition-colors hover:bg-pink-500 hover:border-pink-500"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}