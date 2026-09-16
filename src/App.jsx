import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Shop from "./components/Shop";
import Offers from "./components/Offers";
import Why from "./components/WhyChoose";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
export default function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);


  const addToCart = (product) => {
    setCart((prev) => {
      const existingProduct = prev.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  };


  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

 
  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return prev.filter(
          (item) => item.id !== product.id
        );
      }

      return [...prev, product];
    });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashScreen />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen overflow-x-hidden bg-white">
          <Navbar
            cart={cart}
            wishlistCount={wishlist.length}
            onRemoveFromCart={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onClearCart={clearCart}
            cartOpen={cartOpen}
            setCartOpen={setCartOpen}
          />

          <main>
            <Hero />

            <Categories />

            <Shop
              addToCart={addToCart}
              wishlist={wishlist}
              onWishlist={toggleWishlist}
            />

            <Offers />

            <Why />

            <About />

            <Testimonials />

            <Contact />
          </main>

          <Footer />

          <Cart
            isOpen={cartOpen}
            onClose={() => setCartOpen(false)}
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        </div>
      )}
    </>
  );
}