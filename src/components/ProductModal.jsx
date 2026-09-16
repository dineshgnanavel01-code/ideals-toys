import { motion } from "framer-motion";
import {Minus,Plus,ShoppingCart,X, Sparkles,} from "lucide-react";
import { useState } from "react";

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
}) {
  const [quantity, setQuantity] = useState(1);

  const addProduct = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 30 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-full overflow-y-auto rounded-[35px] bg-white shadow-2xl"
      >
        {/* Animated Close Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-lg text-slate-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
        >
          <X size={20} />
        </motion.button>

        <div className="grid md:grid-cols-2">
          <div
            className={`flex min-h-[350px] items-center justify-center relative overflow-hidden ${product.bg}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            <motion.div
              initial={{ scale: 0.4, rotate: -15, opacity: 0 }}
              animate={{ 
                scale: 1, 
                rotate: 0, 
                opacity: 1,
                y: [0, -10, 0] 
              }}
              transition={{
                scale: { type: "spring", stiffness: 200, damping: 20 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="text-[150px] drop-shadow-2xl select-none"
            >
              {product.emoji}
            </motion.div>
          </div>

          <div className="p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-500 font-black uppercase tracking-wider text-xs mb-3">
                <Sparkles size={12} />
                {product.category}
              </div>

              <h2 className="text-3xl font-black text-slate-800 sm:text-4xl tracking-tight">
                {product.name}
              </h2>

              <motion.p 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="mt-4 text-3xl font-black bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent w-fit"
              >
                ₹{product.price.toLocaleString("en-IN")}
              </motion.p>

              <p className="mt-4 leading-relaxed text-slate-500 text-sm sm:text-base">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="mt-6">
                <p className="mb-2 text-xs font-black uppercase tracking-wider text-slate-400">
                  Select Quantity
                </p>

                <div className="flex w-fit items-center gap-4 rounded-2xl border-2 border-slate-100 bg-slate-50 px-3 py-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() =>
                      setQuantity((q) => Math.max(1, q - 1))
                    }
                    className="p-1 text-slate-600 hover:text-pink-500 transition-colors"
                  >
                    <Minus size={16} />
                  </motion.button>

                  <span className="min-w-6 text-center font-black text-slate-800">
                    {quantity}
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-1 text-slate-600 hover:text-pink-500 transition-colors"
                  >
                    <Plus size={16} />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Add to Cart CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(236, 72, 153, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              onClick={addProduct}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 py-4 font-black text-white shadow-lg shadow-pink-500/25 transition-all"
            >
              <ShoppingCart size={20} />
              Add to Cart ({quantity})
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}