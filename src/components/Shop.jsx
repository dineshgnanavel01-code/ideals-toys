import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Heart,Search,ShoppingBag,Star,Sparkles, Eye,} from "lucide-react";
import { products } from "../data/data";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80";

export default function Shop({
  addToCart,
  wishlist = [],
  onWishlist,
}) {
  const [search, setSearch] = useState("");

  const handleAddToCart = (product) => {
    const resolvedImage =
      product.image ||
      product.img ||
      product.imageUrl ||
      product.photo ||
      FALLBACK_IMAGE;

    addToCart?.({
      ...product,
      image: resolvedImage,
      quantity: 1,
    });
  };

  const filteredProducts = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return products;

    return products.filter((product) =>
      `${product.name} ${product.category}`
        .toLowerCase()
        .includes(value)
    );
  }, [search]);

  return (
    <section
      id="shop"
      className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-white to-purple-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-pink-300/20 blur-[100px]" />

        <div className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-purple-300/20 blur-[110px]" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-300/10 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-full text-center"
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-100 px-4 py-2 text-sm font-bold text-pink-600 shadow-sm"
          >
            <Sparkles size={16} />
            Fun Toys Collection
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Discover Amazing Toys
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-full text-sm leading-7 text-zinc-500 sm:text-base">
            Find exciting toys, creative games, and fun gifts for every child.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 w-full max-w-full"
        >
          <div className="relative">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search toys..."
              className="w-full rounded-2xl border border-zinc-200 bg-white py-4 pl-13 pr-5 text-sm text-zinc-800 shadow-sm outline-none transition-all placeholder:text-zinc-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
            />
          </div>
        </motion.div>

        <div className="mb-6 flex items-center justify-between border-b border-zinc-200 pb-4">
          <p className="text-sm font-medium text-zinc-500">
            Showing{" "}
            <span className="font-black text-zinc-900">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-xs font-bold text-pink-600 transition hover:text-pink-700"
            >
              Clear Search
            </button>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => {
                const isWishlisted = wishlist.includes(product.id);

                const productImg =
                  product.image ||
                  product.img ||
                  product.imageUrl ||
                  product.photo ||
                  FALLBACK_IMAGE;

                return (
                  <motion.article
                    key={product.id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 30,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    whileHover={{
                      y: -8,
                      rotateX: 2,
                      rotateY: -2,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-pink-100"
                  >
                    <div className="relative aspect-square shrink-0 overflow-hidden bg-zinc-100">
                      <motion.img
                        src={productImg}
                        alt={product.name}
                        loading="lazy"
                        className="h-full w-full object-cover"
                        whileHover={{
                          scale: 1.08,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        onError={(e) => {
                          e.currentTarget.src = FALLBACK_IMAGE;
                        }}
                      />

                      {/* Category */}
                      {product.category && (
                        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-pink-600 shadow-md backdrop-blur">
                          {product.category}
                        </span>
                      )}

                      {/* Wishlist */}
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onWishlist?.(product)}
                        className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-md backdrop-blur transition-colors ${
                          isWishlisted
                            ? "text-red-500"
                            : "text-zinc-600 hover:text-red-500"
                        }`}
                        aria-label={
                          isWishlisted
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                      >
                        <Heart
                          size={19}
                          fill={
                            isWishlisted
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </motion.button>

                      {/* Quick View */}
                      <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center transition-transform duration-300 group-hover:translate-y-0">
                        <button
                          type="button"
                          className="mb-4 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-zinc-800 shadow-xl transition hover:bg-pink-600 hover:text-white"
                        >
                          <Eye size={15} />
                          Quick View
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      {/* Product Name */}
                      <h3 className="line-clamp-1 text-lg font-black text-zinc-900">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="mt-2 flex items-center gap-1.5">
                        <Star
                          size={16}
                          fill="currentColor"
                          className="text-yellow-400"
                        />

                        <span className="text-sm font-bold text-zinc-700">
                          {product.rating || "4.8"}
                        </span>

                        {product.reviews && (
                          <span className="text-xs text-zinc-400">
                            ({product.reviews})
                          </span>
                        )}
                      </div>

                      {/* Price + Cart */}
                      <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                        {/* Price */}
                        <div className="min-w-0">
                          <p className="text-xl font-black text-pink-600">
                            ₹
                            {Number(
                              product.price || 0
                            ).toLocaleString("en-IN")}
                          </p>

                          {product.oldPrice && (
                            <p className="mt-0.5 text-xs text-zinc-400 line-through">
                              ₹
                              {Number(
                                product.oldPrice
                              ).toLocaleString("en-IN")}
                            </p>
                          )}
                        </div>

                        {/* Add To Cart */}
                        <motion.button
                          type="button"
                          whileTap={{
                            scale: 0.94,
                          }}
                          whileHover={{
                            scale: 1.03,
                          }}
                          onClick={() =>
                            handleAddToCart(product)
                          }
                          className="flex shrink-0 items-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-pink-600"
                        >
                          <ShoppingBag size={17} />

                          <span className="hidden sm:inline">
                            Add
                          </span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="mx-auto flex min-h-[320px] max-w-full flex-col items-center justify-center rounded-3xl border border-zinc-100 bg-white p-10 text-center shadow-sm"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-50">
              <Search
                size={32}
                className="text-pink-300"
              />
            </div>

            <h3 className="mt-5 text-xl font-black text-zinc-800">
              No toys found
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
              We couldn't find any toys matching your
              search. Try a different toy name or category.
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-6 rounded-xl bg-pink-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200 transition hover:bg-pink-700"
            >
              Clear Search
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}