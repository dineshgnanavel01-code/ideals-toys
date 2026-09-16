import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag, Plus, Minus } from "lucide-react";

const FALLBACK_IMAGE =
  "https://images.pexels.com/photos/10003868/pexels-photo-10003868.jpeg?auto=compress&cs=tinysrgb&w=800";

const getImageUrl = (imageProp) => {
  if (!imageProp) return FALLBACK_IMAGE;
  
  if (typeof imageProp === "object") {
    return imageProp.src || imageProp.default || imageProp.url || FALLBACK_IMAGE;
  }
  
  if (typeof imageProp === "string") {
    if (imageProp.trim() === "") return FALLBACK_IMAGE;
    return imageProp;
  }

  return FALLBACK_IMAGE;
};

export default function Cart({
  isOpen,
  onClose,
  cart = [],
  updateQuantity,
  removeFromCart,
}) {
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Cart Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative z-10 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 p-6">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-pink-500" size={22} />

                <h3 className="text-xl font-black text-slate-900">
                  Your Cart
                </h3>

                <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-black text-purple-600">
                  {cart.length}
                </span>
              </div>

              <button
                onClick={onClose}
                className="rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200"
              >
                <X size={18} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 space-y-4 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-3 text-5xl">🛒</div>

                  <h4 className="text-lg font-black text-slate-800">
                    Your cart is empty
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Add some amazing toys to get started!
                  </p>
                </div>
              ) : (
                <AnimatePresence mode="popLayout">
                  {cart.map((item) => {
                    // Check all possible property names for the image
                    const rawImage = item.image || item.img || item.imageUrl || item.photo;
                    const imageSource = getImageUrl(rawImage);

                    return (
                      <motion.div
                        layout
                        key={item.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -30, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                      >
                        {/* PRODUCT IMAGE */}
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                          <img
                            src={imageSource}
                            alt={item.name}
                            loading="eager"
                            decoding="async"
                            className="block h-full w-full object-cover"
                            onError={(e) => {
                              if (e.currentTarget.src !== FALLBACK_IMAGE) {
                                e.currentTarget.src = FALLBACK_IMAGE;
                              }
                            }}
                          />
                        </div>

                        {/* DETAILS */}
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-sm font-black text-slate-900">
                            {item.name}
                          </h4>

                          <p className="mt-1 text-sm font-black text-pink-500">
                            ₹
                            {(
                              item.price * (item.quantity || 1)
                            ).toLocaleString("en-IN")}
                          </p>

                          {/* Quantity + Remove */}
                          <div className="mt-3 flex items-center justify-between gap-2">
                            {/* Quantity */}
                            <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    (item.quantity || 1) - 1
                                  )
                                }
                                className="flex h-5 w-5 items-center justify-center rounded-md text-slate-500 transition hover:bg-white hover:text-slate-900"
                              >
                                <Minus size={14} />
                              </button>

                              <span className="mx-3 min-w-[12px] text-center text-xs font-black text-slate-800">
                                {item.quantity || 1}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    (item.quantity || 1) + 1
                                  )
                                }
                                className="flex h-5 w-5 items-center justify-center rounded-md text-slate-500 transition hover:bg-white hover:text-slate-900"
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            {/* Remove */}
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="flex items-center gap-1 text-xs font-bold text-red-400 transition hover:text-red-600"
                            >
                              <Trash2 size={14} />
                              Remove
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t border-slate-100 bg-slate-50/80 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500">
                    Subtotal
                  </span>

                  <span className="text-xl font-black text-slate-900">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => alert("Proceeding to checkout!")}
                  className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 py-4 text-sm font-black text-white shadow-lg shadow-purple-200 transition hover:scale-[1.01] hover:opacity-95 active:scale-[0.99]"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}