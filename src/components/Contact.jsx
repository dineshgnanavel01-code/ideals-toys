import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      setFeedback("Please enter a valid email address.");
      return;
    }

    setFeedback("Thank you! Your message has been sent. 🎉");
    setFormData({ email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#fff4e9] via-[#fef0df] to-[#ffe8d6] px-5 py-28"
    >
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl pointer-events-none" />

      <div className="mx-auto grid max-w-full items-center gap-14 lg:grid-cols-2 [perspective:1200px]">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-pink-500 shadow-sm">
            <Sparkles size={14} />
            Stay Connected
          </div>

          <h2 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl leading-tight">
            Let's Make <span className="text-pink-500 underline decoration-pink-300 decoration-wavy">Playtime</span> Better
          </h2>

          <p className="mt-5 max-w-full leading-7 text-slate-600 text-base">
            Have questions or want to subscribe to our newsletter for launch updates, special offers, and fun activities? Reach out to us below!
          </p>

          <div className="mt-10 space-y-5">
            <motion.div 
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-pink-500 shadow-md shadow-pink-500/5 transition-transform group-hover:scale-110">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</p>
                <a href="mailto:hello@idealstoys.com" className="font-black text-slate-800 text-base group-hover:text-pink-500 transition-colors">
                  hello@idealstoys.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-500 shadow-md shadow-blue-500/5 transition-transform group-hover:scale-110">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Us</p>
                <a href="tel:+916369709863" className="font-black text-slate-800 text-base group-hover:text-blue-500 transition-colors">
                  +91 63697 09863
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-green-500 shadow-md shadow-green-500/5 transition-transform group-hover:scale-110">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</p>
                <span className="font-black text-slate-800 text-base group-hover:text-green-500 transition-colors">
                  Salem, Tamil Nadu
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 1.11, 0.81, 0.99] }}
          whileHover={{ rotateX: -2, rotateY: 2, scale: 1.01 }}
          className="relative rounded-[40px] bg-white/90 p-8 shadow-2xl shadow-pink-500/10 backdrop-blur-xl border border-white sm:p-10 transform-gpu"
        >
          <div className="absolute inset-x-0 top-0 h-28 rounded-t-[40px] bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />

          <div className="relative">
            <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
              Get 10% Off Your First Order 🎁
            </h3>

            <p className="mt-2 text-sm text-slate-500 font-medium">
              Subscribe or leave us a message below.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 px-5 py-3.5 text-slate-800 font-medium outline-none transition-all duration-300 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 px-5 py-3.5 text-slate-800 font-medium outline-none transition-all duration-300 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100 resize-none"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 py-4 font-black text-white shadow-lg shadow-pink-500/30 transition-all hover:shadow-xl hover:shadow-pink-500/40 cursor-pointer"
            >
              <span>Subscribe & Send</span>
              <Send size={18} />
            </motion.button>

            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-xl bg-pink-50 p-3 text-center text-sm font-bold text-pink-600 border border-pink-100"
              >
                {feedback}
              </motion.div>
            )}

            <p className="mt-6 text-center text-xs font-medium text-slate-400">
              No spam. Just toys, fun, and great offers. Unsubscribe anytime.
            </p>
          </div>
        </motion.form>

      </div>
    </section>
  );
}