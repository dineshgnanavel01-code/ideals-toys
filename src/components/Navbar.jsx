import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {Check, ChevronRight, CreditCard, Edit3,Heart, LogIn,LogOut, Mail,MapPin,Menu,Package,Phone,Search, ShoppingBag, Truck,User,UserPlus,WalletCards,X,} from "lucide-react";

const navLinks = [
  ["Home", "#home"],
  ["Shop", "#shop"],
  ["Categories", "#categories"],
  ["About Us", "#about"],
  ["Contact", "#contact"],
];

const trackingSteps = [
  {
    title: "Order Processing",
    description: "Your order has been received.",
    icon: Package,
  },
  {
    title: "Order Packed",
    description: "Your toys are packed and ready.",
    icon: ShoppingBag,
  },
  {
    title: "Shipped",
    description: "Your order is on the way.",
    icon: Truck,
  },
  {
    title: "Out for Delivery",
    description: "Your package is nearby.",
    icon: MapPin,
  },
  {
    title: "Delivered",
    description: "Order delivered successfully.",
    icon: Check,
  },
];

const spring = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

const emptyProfile = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  pincode: "",
};

export default function Navbar({
  cart = [],
  wishlistCount = 0,
  onRemoveFromCart,
  onUpdateQuantity,
  onClearCart,
  cartOpen,
  setCartOpen,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [trackingOpen, setTrackingOpen] = useState(false);

  const [orderId, setOrderId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  /* =========================================================
     AUTH STATE
  ========================================================= */

  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const [profileOpen, setProfileOpen] = useState(false);
  const [profileEdit, setProfileEdit] = useState(false);

  const [user, setUser] = useState(null);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [profile, setProfile] = useState(emptyProfile);

  const [authMessage, setAuthMessage] = useState("");

  /* =========================================================
     LOAD USER
  ========================================================= */

  useEffect(() => {
    const savedUser = localStorage.getItem("idealsUser");

    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);

        setUser(parsedUser);
        setProfile({
          name: parsedUser.name || "",
          email: parsedUser.email || "",
          phone: parsedUser.phone || "",
          address: parsedUser.address || "",
          city: parsedUser.city || "",
          pincode: parsedUser.pincode || "",
        });
      } catch {
        localStorage.removeItem("idealsUser");
      }
    }
  }, []);

  /* =========================================================
     CART CALCULATIONS
  ========================================================= */

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * (item.quantity || 1),
    0
  );

  const delivery =
    subtotal === 0 || subtotal >= 999 ? 0 : 79;

  const total = subtotal + delivery;

  /* =========================================================
     CART FUNCTIONS
  ========================================================= */

  const updateQty = (id, quantity) => {
    if (quantity <= 0) {
      onRemoveFromCart?.(id);
      return;
    }

    onUpdateQuantity?.(id, quantity);
  };

  /* =========================================================
     ORDER
  ========================================================= */

  const generateOrderId = () => {
    const random = Math.floor(
      100000 + Math.random() * 900000
    );

    return `IDEALS-${random}`;
  };

  const addressValid =
    address.name.trim() &&
    address.phone.trim() &&
    address.address.trim() &&
    address.city.trim() &&
    address.pincode.trim();

  const confirmOrder = () => {
    if (!cart.length) return;

    if (!addressValid) {
      alert("Please enter your complete delivery address.");
      return;
    }

    const newOrderId = generateOrderId();

    setOrderId(newOrderId);

    const newOrder = {
      id: newOrderId,
      date: new Date().toLocaleDateString("en-IN"),
      total,
      items: cartCount,
      status: "Processing",
    };

    if (user) {
      const updatedUser = {
        ...user,
        orders: [...(user.orders || []), newOrder],
      };

      setUser(updatedUser);
      localStorage.setItem(
        "idealsUser",
        JSON.stringify(updatedUser)
      );
    }

    setCheckoutOpen(false);
    setCartOpen(false);

    onClearCart?.();

    setOrderConfirmed(true);
  };

  const openTracking = () => {
    setOrderConfirmed(false);
    setTrackingOpen(true);
  };

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const handleNavClick = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  /* =========================================================
     LOGIN
  ========================================================= */

  const handleLogin = (e) => {
    e.preventDefault();

    setAuthMessage("");

    if (!loginData.email || !loginData.password) {
      setAuthMessage("Please enter email and password.");
      return;
    }

    const savedAccount = localStorage.getItem(
      "idealsAccount"
    );

    if (!savedAccount) {
      setAuthMessage(
        "No account found. Please create an account first."
      );
      return;
    }

    const account = JSON.parse(savedAccount);

    if (
      account.email !== loginData.email ||
      account.password !== loginData.password
    ) {
      setAuthMessage("Invalid email or password.");
      return;
    }

    const loggedUser = {
      ...account,
      orders: account.orders || [],
    };

    setUser(loggedUser);

    setProfile({
      name: loggedUser.name || "",
      email: loggedUser.email || "",
      phone: loggedUser.phone || "",
      address: loggedUser.address || "",
      city: loggedUser.city || "",
      pincode: loggedUser.pincode || "",
    });

    localStorage.setItem(
      "idealsUser",
      JSON.stringify(loggedUser)
    );

    setAuthOpen(false);
    setLoginData({
      email: "",
      password: "",
    });
    setAuthMessage("");
  };

  /* =========================================================
     SIGNUP
  ========================================================= */

  const handleSignup = (e) => {
    e.preventDefault();

    setAuthMessage("");

    if (
      !signupData.name ||
      !signupData.email ||
      !signupData.phone ||
      !signupData.password ||
      !signupData.confirmPassword
    ) {
      setAuthMessage("Please fill in all fields.");
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setAuthMessage("Passwords do not match.");
      return;
    }

    if (signupData.password.length < 6) {
      setAuthMessage(
        "Password must contain at least 6 characters."
      );
      return;
    }

    const account = {
      name: signupData.name,
      email: signupData.email,
      phone: signupData.phone,
      password: signupData.password,
      address: "",
      city: "",
      pincode: "",
      orders: [],
    };

    localStorage.setItem(
      "idealsAccount",
      JSON.stringify(account)
    );

    localStorage.setItem(
      "idealsUser",
      JSON.stringify(account)
    );

    setUser(account);

    setProfile({
      name: account.name,
      email: account.email,
      phone: account.phone,
      address: "",
      city: "",
      pincode: "",
    });

    setSignupData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });

    setAuthOpen(false);
    setAuthMessage("");
  };

  /* =========================================================
     LOGOUT
  ========================================================= */

  const handleLogout = () => {
    localStorage.removeItem("idealsUser");

    setUser(null);
    setProfile(emptyProfile);
    setProfileOpen(false);
    setProfileEdit(false);
  };

  /* =========================================================
     SAVE PROFILE
  ========================================================= */

  const saveProfile = () => {
    const updatedUser = {
      ...(user || {}),
      ...profile,
    };

    setUser(updatedUser);

    localStorage.setItem(
      "idealsUser",
      JSON.stringify(updatedUser)
    );

    localStorage.setItem(
      "idealsAccount",
      JSON.stringify(updatedUser)
    );

    setProfileEdit(false);
  };

  /* =========================================================
     OPEN PROFILE
  ========================================================= */

  const openProfile = () => {
    if (!user) {
      setAuthMode("login");
      setAuthOpen(true);
      return;
    }

    setProfileOpen(true);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 right-0 top-0 z-[100] border-b border-white/60 bg-white/75 shadow-lg shadow-slate-200/20 backdrop-blur-2xl"
      >
        <div className="mx-auto flex h-20 max-w-full items-center justify-between px-5">

          {/* LOGO */}

          <a
            href="#home"
            onClick={handleNavClick}
            className="group flex items-center gap-3"
          >
            <motion.div
              whileHover={{
                scale: 1.12,
                rotateY: 18,
                rotateX: -10,
              }}
              whileTap={{ scale: 0.9 }}
              transition={spring}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 text-2xl shadow-xl shadow-pink-500/25"
            >
              <motion.span
                animate={{
                  y: [0, -4, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                }}
                className="relative z-10"
              >
                🧸
              </motion.span>

              <div className="absolute inset-1 rounded-xl border border-white/40" />

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-yellow-300 shadow-lg"
              />
            </motion.div>

            <div>
              <h1 className="text-lg font-black tracking-tight text-slate-800">
                IDEALS
              </h1>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-pink-500">
                Kids Toys
              </p>
            </div>
          </a>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map(([label, href]) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                transition={spring}
                className="relative text-sm font-bold text-slate-600 transition hover:text-pink-500"
              >
                {label}

                <motion.span
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="absolute -bottom-2 left-0 right-0 h-0.5 origin-left rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                />
              </motion.a>
            ))}
          </nav>

          {/* ACTIONS */}

          <div className="flex items-center gap-2">

            {/* SEARCH */}

            <motion.button
              type="button"
              whileHover={{
                scale: 1.1,
                rotateY: 12,
              }}
              whileTap={{ scale: 0.88 }}
              onClick={() =>
                setSearchOpen((prev) => !prev)
              }
              className="hidden rounded-xl p-2.5 text-slate-600 transition hover:bg-pink-50 hover:text-pink-500 sm:flex"
            >
              <Search size={20} />
            </motion.button>

            {/* WISHLIST */}

            <div className="relative hidden sm:block">
              <motion.button
                type="button"
                whileHover={{
                  scale: 1.1,
                  rotateZ: -5,
                }}
                whileTap={{ scale: 0.85 }}
                className="rounded-xl p-2.5 text-slate-600 transition hover:bg-pink-50"
              >
                <Heart
                  size={20}
                  className="text-pink-500"
                />
              </motion.button>

              <AnimatePresence>
                {wishlistCount > 0 && (
                  <motion.span
                    initial={{
                      scale: 0,
                      rotate: -30,
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}
                    exit={{
                      scale: 0,
                    }}
                    className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-pink-500 px-1 text-[10px] font-black text-white shadow-lg"
                  >
                    {wishlistCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* PROFILE */}

            <motion.button
              type="button"
              onClick={openProfile}
              whileHover={{
                scale: 1.08,
                rotateY: 10,
              }}
              whileTap={{
                scale: 0.85,
              }}
              transition={spring}
              className="hidden items-center gap-2 rounded-xl bg-slate-50 p-2.5 text-slate-600 transition hover:bg-pink-50 hover:text-pink-500 sm:flex"
            >
              <User size={20} />

              {user && (
                <span className="hidden max-w-[80px] truncate text-xs font-black lg:block">
                  {user.name}
                </span>
              )}
            </motion.button>

            {/* CART */}

            <motion.button
              type="button"
              onClick={() => setCartOpen(true)}
              whileHover={{
                scale: 1.1,
                rotateY: -10,
              }}
              whileTap={{
                scale: 0.85,
              }}
              transition={spring}
              className="relative rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 p-2.5 text-pink-600 shadow-sm"
            >
              <ShoppingBag size={21} />

              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{
                      scale: 0,
                      y: 8,
                      rotate: -15,
                    }}
                    animate={{
                      scale: 1,
                      y: 0,
                      rotate: 0,
                    }}
                    transition={spring}
                    className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-1 text-[10px] font-black text-white shadow-lg"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* MOBILE MENU TOGGLE BUTTON */}

            <motion.button
              type="button"
              whileTap={{ scale: 0.85 }}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="rounded-xl p-2.5 text-slate-600 hover:bg-pink-50 hover:text-pink-500 lg:hidden"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>

        {/* SEARCH BAR INPUT OVERLAY */}

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="border-t border-slate-100 bg-white/90 p-4 backdrop-blur-xl"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="mx-auto flex max-w-full items-center gap-3 rounded-2xl border border-white bg-slate-100 px-4 py-3 shadow-inner"
              >
                <Search size={19} />

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search toys..."
                  className="w-full bg-transparent outline-none"
                  autoFocus
                />

                {search && (
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.8 }}
                    onClick={() => setSearch("")}
                  >
                    <X size={18} />
                  </motion.button>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MOBILE MENU DRAWER */}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
              }}
              className="fixed right-0 top-20 h-[calc(100vh-80px)] w-[85%] max-w-sm overflow-hidden bg-white/95 p-6 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              <div className="absolute -right-20 top-20 h-52 w-52 rounded-full bg-pink-300/20 blur-3xl" />

              <div className="relative flex flex-col gap-3">

                {/* MOBILE PROFILE */}

                <motion.button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    openProfile();
                  }}
                  className="mb-2 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 p-4 text-left"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg">
                    <User size={23} />
                  </div>

                  <div>
                    <p className="font-black text-slate-800">
                      {user ? user.name : "My Account"}
                    </p>

                    <p className="text-xs text-slate-500">
                      {user ? "View Profile" : "Login / Sign Up"}
                    </p>
                  </div>
                </motion.button>

                {navLinks.map(([label, href], index) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.07,
                    }}
                    whileHover={{
                      x: 8,
                      scale: 1.02,
                    }}
                    onClick={handleNavClick}
                    className="rounded-2xl border border-transparent px-4 py-4 font-black text-slate-700 transition hover:border-pink-100 hover:bg-pink-50 hover:text-pink-500"
                  >
                    {label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* =====================================================
          CART DRAWER
      ====================================================== */}

      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 z-[200] bg-slate-950/60 backdrop-blur-md"
            />

            <motion.aside
              initial={{
                x: "100%",
                rotateY: -12,
              }}
              animate={{
                x: 0,
                rotateY: 0,
              }}
              exit={{
                x: "100%",
                rotateY: -12,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 26,
              }}
              style={{
                transformOrigin: "right center",
                perspective: 1200,
              }}
              className="fixed right-0 top-0 z-[210] flex h-screen w-full max-w-md flex-col overflow-hidden bg-white shadow-2xl"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-pink-300/20 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl" />

              {/* CART HEADER */}

              <div className="relative z-10 flex items-center justify-between border-b bg-white/80 p-5 backdrop-blur-xl">
                <div>
                  <motion.h2
                    initial={{ x: -15, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-xl font-black text-slate-800"
                  >
                    Your Cart 🛒
                  </motion.h2>

                  <p className="text-xs text-slate-400">
                    {cartCount} item
                    {cartCount !== 1 ? "s" : ""}
                  </p>
                </div>

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.1,
                    rotate: 90,
                  }}
                  whileTap={{ scale: 0.85 }}
                  transition={spring}
                  onClick={() => setCartOpen(false)}
                  className="rounded-xl bg-slate-100 p-2 hover:bg-pink-50"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* CART CONTENT */}

              <div className="relative z-10 flex-1 overflow-y-auto p-5">
                {cart.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <motion.div
                      animate={{
                        y: [0, -12, 0],
                        rotate: [-4, 4, -4],
                      }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                      }}
                      className="text-7xl drop-shadow-xl"
                    >
                      🛒
                    </motion.div>

                    <h3 className="mt-5 text-xl font-black">
                      Your cart is empty
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Add some fun toys to continue.
                    </p>

                    <motion.button
                      type="button"
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      onClick={() => {
                        setCartOpen(false);

                        setTimeout(() => {
                          document
                            .getElementById("shop")
                            ?.scrollIntoView({
                              behavior: "smooth",
                            });
                        }, 100);
                      }}
                      className="mt-5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-black text-white shadow-xl"
                    >
                      Shop Toys
                    </motion.button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4">
                      {cart.map((item, index) => {
                        const itemImage = item.image || item.img;

                        return (
                          <motion.div
                            key={item.id}
                            layout
                            initial={{
                              opacity: 0,
                              x: 30,
                              scale: 0.95,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              scale: 1,
                            }}
                            transition={{
                              delay: index * 0.05,
                            }}
                            whileHover={{
                              y: -3,
                              rotateX: 2,
                            }}
                            style={{
                              transformStyle:
                                "preserve-3d",
                            }}
                            className="relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4 shadow-sm transition-shadow hover:shadow-xl"
                          >
                            <div className="relative flex gap-3">
                              <motion.div
                                whileHover={{
                                  scale: 1.12,
                                  rotateY: 12,
                                  rotateZ: -3,
                                }}
                                transition={spring}
                                style={{
                                  transformStyle:
                                    "preserve-3d",
                                }}
                                className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 text-3xl shadow-md"
                              >
                                {itemImage ? (
                                  <img
                                    src={itemImage}
                                    alt={item.name}
                                    className="h-full w-full object-cover"
                                  />
                                ) : (
                                  item.emoji
                                )}
                              </motion.div>

                              <div className="min-w-0 flex-1">
                                <h3 className="truncate font-black text-slate-800">
                                  {item.name}
                                </h3>

                                <p className="mt-1 font-black text-pink-500">
                                  ₹
                                  {item.price.toLocaleString(
                                    "en-IN"
                                  )}
                                </p>

                                <div className="mt-3 flex items-center justify-between">
                                  <div className="flex items-center overflow-hidden rounded-xl border border-slate-100 bg-white shadow-md">
                                    <motion.button
                                      type="button"
                                      whileHover={{
                                        scale: 1.15,
                                      }}
                                      whileTap={{
                                        scale: 0.8,
                                      }}
                                      onClick={() =>
                                        updateQty(
                                          item.id,
                                          (item.quantity ||
                                            1) - 1
                                        )
                                      }
                                      className="px-3 py-1.5 font-black text-slate-600 hover:bg-pink-50 hover:text-pink-500"
                                    >
                                      −
                                    </motion.button>

                                    <span className="min-w-8 text-center text-sm font-black">
                                      {item.quantity || 1}
                                    </span>

                                    <motion.button
                                      type="button"
                                      whileHover={{
                                        scale: 1.15,
                                      }}
                                      whileTap={{
                                        scale: 0.8,
                                      }}
                                      onClick={() =>
                                        updateQty(
                                          item.id,
                                          (item.quantity ||
                                            1) + 1
                                        )
                                      }
                                      className="px-3 py-1.5 font-black text-slate-600 hover:bg-pink-50 hover:text-pink-500"
                                    >
                                      +
                                    </motion.button>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      onRemoveFromCart?.(
                                        item.id
                                      )
                                    }
                                    className="text-xs font-bold text-red-400 hover:text-red-600"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* ADDRESS */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="mt-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                    >
                      <div className="mb-4 flex items-center gap-2">
                        <MapPin
                          size={18}
                          className="text-pink-500"
                        />

                        <h3 className="font-black">
                          Delivery Address
                        </h3>
                      </div>

                      <div className="space-y-3">
                        <input
                          value={address.name}
                          onChange={(e) =>
                            setAddress({
                              ...address,
                              name: e.target.value,
                            })
                          }
                          placeholder="Full Name"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                        />

                        <input
                          value={address.phone}
                          onChange={(e) =>
                            setAddress({
                              ...address,
                              phone: e.target.value,
                            })
                          }
                          placeholder="Phone Number"
                          type="tel"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                        />

                        <textarea
                          value={address.address}
                          onChange={(e) =>
                            setAddress({
                              ...address,
                              address: e.target.value,
                            })
                          }
                          placeholder="House No, Street, Area"
                          rows={2}
                          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                        />

                        <div className="grid grid-cols-2 gap-3">
                          <input
                            value={address.city}
                            onChange={(e) =>
                              setAddress({
                                ...address,
                                city: e.target.value,
                              })
                            }
                            placeholder="City"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                          />

                          <input
                            value={address.pincode}
                            onChange={(e) =>
                              setAddress({
                                ...address,
                                pincode: e.target.value,
                              })
                            }
                            placeholder="Pincode"
                            inputMode="numeric"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </div>

              {/* CART FOOTER */}

              {cart.length > 0 && (
                <div className="relative z-10 border-t bg-white/90 p-5 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl">
                  <div className="mb-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">
                        Subtotal
                      </span>

                      <span className="font-bold">
                        ₹
                        {subtotal.toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-slate-500">
                        Delivery
                      </span>

                      <span className="font-bold">
                        {delivery === 0
                          ? "FREE"
                          : `₹${delivery}`}
                      </span>
                    </div>

                    <div className="flex justify-between border-t pt-2 text-lg">
                      <span className="font-black">
                        Total
                      </span>

                      <span className="font-black text-pink-500">
                        ₹
                        {total.toLocaleString(
                          "en-IN"
                        )}
                      </span>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    onClick={() =>
                      setCheckoutOpen(true)
                    }
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-5 py-4 font-black text-white shadow-xl shadow-pink-500/25"
                  >
                    <span className="relative">
                      Continue to Payment
                    </span>

                    <ChevronRight
                      size={18}
                      className="relative"
                    />
                  </motion.button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* =====================================================
          CHECKOUT
      ====================================================== */}

      <AnimatePresence>
        {checkoutOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setCheckoutOpen(false)
              }
              className="fixed inset-0 z-[300] bg-slate-950/70 p-4 backdrop-blur-md"
            />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                rotateX: 15,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                rotateX: -10,
                y: 50,
              }}
              transition={spring}
              className="fixed left-1/2 top-1/2 z-[310] max-h-[90vh] w-[calc(100%-32px)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[32px] border border-white/50 bg-white/95 p-6 shadow-2xl backdrop-blur-xl sm:p-7"
            >
              <div className="relative">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-pink-500">
                      Secure Checkout
                    </p>

                    <h2 className="mt-1 text-2xl font-black">
                      Payment Method
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setCheckoutOpen(false)
                    }
                    className="rounded-xl bg-slate-100 p-2"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      id: "UPI",
                      title: "UPI",
                      subtitle:
                        "Google Pay, PhonePe, Paytm",
                      icon: WalletCards,
                      bg: "bg-purple-100",
                      text: "text-purple-600",
                    },
                    {
                      id: "CARD",
                      title: "Credit / Debit Card",
                      subtitle:
                        "Visa, Mastercard, RuPay",
                      icon: CreditCard,
                      bg: "bg-blue-100",
                      text: "text-blue-600",
                    },
                    {
                      id: "COD",
                      title: "Cash on Delivery",
                      subtitle:
                        "Pay when your order arrives",
                      icon: Truck,
                      bg: "bg-green-100",
                      text: "text-green-600",
                    },
                  ].map((method) => {
                    const Icon = method.icon;

                    const selected =
                      paymentMethod === method.id;

                    return (
                      <motion.button
                        key={method.id}
                        type="button"
                        whileHover={{
                          y: -3,
                          scale: 1.015,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        onClick={() =>
                          setPaymentMethod(
                            method.id
                          )
                        }
                        className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                          selected
                            ? "border-pink-500 bg-pink-50 shadow-lg"
                            : "border-slate-200 bg-white"
                        }`}
                      >
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl ${method.bg} ${method.text}`}
                        >
                          <Icon size={22} />
                        </div>

                        <div className="flex-1">
                          <p className="font-black">
                            {method.title}
                          </p>

                          <p className="text-xs text-slate-500">
                            {method.subtitle}
                          </p>
                        </div>

                        {selected && (
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                            <Check size={15} />
                          </div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-br from-slate-50 to-pink-50 p-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">
                      Items
                    </span>

                    <span className="font-bold">
                      {cartCount}
                    </span>
                  </div>

                  <div className="mt-2 flex justify-between">
                    <span className="font-black">
                      Total
                    </span>

                    <span className="font-black text-pink-500">
                      ₹
                      {total.toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </div>
                </div>

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.025,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={confirmOrder}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-5 py-4 font-black text-white shadow-xl"
                >
                  <ShoppingBag size={19} />
                  Place Order
                </motion.button>

                <p className="mt-3 text-center text-[11px] text-slate-400">
                  Demo checkout — no real payment is
                  processed.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* =====================================================
          LOGIN / SIGNUP
      ====================================================== */}

      <AnimatePresence>
        {authOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAuthOpen(false)}
              className="fixed inset-0 z-[600] bg-slate-950/70 backdrop-blur-md"
            />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 40,
                rotateX: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotateX: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 40,
              }}
              transition={spring}
              className="fixed left-1/2 top-1/2 z-[610] max-h-[92vh] w-[calc(100%-28px)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[32px] bg-white p-6 shadow-2xl sm:p-8"
            >
              {/* Decorative */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-pink-300/30 blur-3xl" />

              <div className="relative">

                {/* HEADER */}

                <div className="flex items-start justify-between">
                  <div>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-xl">
                      {authMode === "login" ? (
                        <LogIn size={23} />
                      ) : (
                        <UserPlus size={23} />
                      )}
                    </div>

                    <p className="text-xs font-black uppercase tracking-widest text-pink-500">
                      IDEALS Kids Toys
                    </p>

                    <h2 className="mt-1 text-2xl font-black text-slate-800">
                      {authMode === "login"
                        ? "Welcome Back!"
                        : "Create Account"}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      {authMode === "login"
                        ? "Login to continue shopping."
                        : "Join IDEALS and start shopping."}
                    </p>
                  </div>

                  <motion.button
                    type="button"
                    whileHover={{
                      rotate: 90,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() =>
                      setAuthOpen(false)
                    }
                    className="rounded-xl bg-slate-100 p-2"
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                {/* LOGIN */}

                {authMode === "login" ? (
                  <form
                    onSubmit={handleLogin}
                    className="mt-7 space-y-4"
                  >
                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-700">
                        Email Address
                      </label>

                      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-pink-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-pink-100">
                        <Mail
                          size={19}
                          className="text-pink-500"
                        />

                        <input
                          type="email"
                          value={loginData.email}
                          onChange={(e) =>
                            setLoginData({
                              ...loginData,
                              email: e.target.value,
                            })
                          }
                          placeholder="you@example.com"
                          className="w-full bg-transparent text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-700">
                        Password
                      </label>

                      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-pink-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-pink-100">
                        <span className="text-pink-500">
                          🔐
                        </span>

                        <input
                          type="password"
                          value={loginData.password}
                          onChange={(e) =>
                            setLoginData({
                              ...loginData,
                              password: e.target.value,
                            })
                          }
                          placeholder="Enter password"
                          className="w-full bg-transparent text-sm outline-none"
                        />
                      </div>
                    </div>

                    {authMessage && (
                      <motion.p
                        initial={{
                          opacity: 0,
                          y: -5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        className="rounded-xl bg-red-50 p-3 text-center text-xs font-bold text-red-500"
                      >
                        {authMessage}
                      </motion.p>
                    )}

                    <motion.button
                      type="submit"
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="w-full rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-5 py-4 font-black text-white shadow-xl shadow-pink-500/20"
                    >
                      Login
                    </motion.button>
                  </form>
                ) : (
                  /* SIGNUP */
                  <form
                    onSubmit={handleSignup}
                    className="mt-7 space-y-4"
                  >
                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-700">
                        Full Name
                      </label>

                      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-pink-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-pink-100">
                        <User
                          size={19}
                          className="text-pink-500"
                        />

                        <input
                          value={signupData.name}
                          onChange={(e) =>
                            setSignupData({
                              ...signupData,
                              name: e.target.value,
                            })
                          }
                          placeholder="Your name"
                          className="w-full bg-transparent text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-700">
                        Email
                      </label>

                      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-pink-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-pink-100">
                        <Mail
                          size={19}
                          className="text-pink-500"
                        />

                        <input
                          type="email"
                          value={signupData.email}
                          onChange={(e) =>
                            setSignupData({
                              ...signupData,
                              email: e.target.value,
                            })
                          }
                          placeholder="you@example.com"
                          className="w-full bg-transparent text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-700">
                        Phone Number
                      </label>

                      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-pink-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-pink-100">
                        <Phone
                          size={19}
                          className="text-pink-500"
                        />

                        <input
                          type="tel"
                          value={signupData.phone}
                          onChange={(e) =>
                            setSignupData({
                              ...signupData,
                              phone: e.target.value,
                            })
                          }
                          placeholder="9876543210"
                          className="w-full bg-transparent text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-700">
                        Password
                      </label>

                      <input
                        type="password"
                        value={signupData.password}
                        onChange={(e) =>
                          setSignupData({
                            ...signupData,
                            password: e.target.value,
                          })
                        }
                        placeholder="Minimum 6 characters"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-700">
                        Confirm Password
                      </label>

                      <input
                        type="password"
                        value={signupData.confirmPassword}
                        onChange={(e) =>
                          setSignupData({
                            ...signupData,
                            confirmPassword:
                              e.target.value,
                          })
                        }
                        placeholder="Repeat password"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
                      />
                    </div>

                    {authMessage && (
                      <motion.p
                        initial={{
                          opacity: 0,
                          y: -5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        className="rounded-xl bg-red-50 p-3 text-center text-xs font-bold text-red-500"
                      >
                        {authMessage}
                      </motion.p>
                    )}

                    <motion.button
                      type="submit"
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="w-full rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 px-5 py-4 font-black text-white shadow-xl shadow-pink-500/20"
                    >
                      Create Account
                    </motion.button>
                  </form>
                )}

                {/* SWITCH */}

                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-500">
                    {authMode === "login"
                      ? "Don't have an account?"
                      : "Already have an account?"}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setAuthMessage("");

                      setAuthMode(
                        authMode === "login"
                          ? "signup"
                          : "login"
                      );
                    }}
                    className="mt-1 font-black text-pink-500 hover:text-purple-600"
                  >
                    {authMode === "login"
                      ? "Create Account"
                      : "Login Now"}
                  </button>
                </div>

                <p className="mt-5 text-center text-[10px] text-slate-400">
                  Demo authentication using localStorage.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* =====================================================
          PROFILE PAGE
      ====================================================== */}

      <AnimatePresence>
        {profileOpen && user && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setProfileOpen(false)}
              className="fixed inset-0 z-[700] bg-slate-950/70 backdrop-blur-md"
            />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 50,
                rotateX: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotateX: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 50,
              }}
              transition={spring}
              className="fixed left-1/2 top-1/2 z-[710] max-h-[92vh] w-[calc(100%-28px)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[32px] bg-white shadow-2xl"
            >
              {/* PROFILE HERO */}

              <div className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 px-6 pb-20 pt-7 text-white sm:px-8">
                <motion.div
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"
                />

                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-pink-100">
                      IDEALS Account
                    </p>

                    <h2 className="mt-1 text-2xl font-black">
                      My Profile
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setProfileOpen(false)
                    }
                    className="rounded-xl bg-white/15 p-2 backdrop-blur-md hover:bg-white/25"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* AVATAR */}

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotateY: 10,
                  }}
                  className="absolute -bottom-12 left-6 flex h-24 w-24 items-center justify-center rounded-3xl border-4 border-white bg-gradient-to-br from-pink-100 to-purple-100 text-4xl text-pink-500 shadow-2xl sm:left-8"
                >
                  {user.name
                    ? user.name.charAt(0).toUpperCase()
                    : "U"}
                </motion.div>
              </div>

              <div className="px-6 pb-7 pt-16 sm:px-8">

                {/* NAME */}

                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-2xl font-black text-slate-800">
                      {user.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {user.email}
                    </p>
                  </div>

                  <motion.button
                    type="button"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={() =>
                      setProfileEdit((prev) => !prev)
                    }
                    className="flex items-center justify-center gap-2 rounded-xl bg-pink-50 px-4 py-2.5 text-sm font-black text-pink-500 hover:bg-pink-100"
                  >
                    <Edit3 size={16} />

                    {profileEdit
                      ? "Cancel"
                      : "Edit Profile"}
                  </motion.button>
                </div>

                {/* PROFILE DETAILS */}

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  {/* NAME */}

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-pink-500">
                      <User size={17} />
                      <span className="text-xs font-black uppercase tracking-wider">
                        Name
                      </span>
                    </div>

                    {profileEdit ? (
                      <input
                        value={profile.name}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            name: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-pink-400"
                      />
                    ) : (
                      <p className="font-bold text-slate-700">
                        {profile.name || "Not added"}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-pink-500">
                      <Mail size={17} />
                      <span className="text-xs font-black uppercase tracking-wider">
                        Email
                      </span>
                    </div>

                    <p className="break-all font-bold text-slate-700">
                      {profile.email}
                    </p>
                  </div>

                  {/* PHONE */}

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-pink-500">
                      <Phone size={17} />
                      <span className="text-xs font-black uppercase tracking-wider">
                        Phone
                      </span>
                    </div>

                    {profileEdit ? (
                      <input
                        value={profile.phone}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            phone: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-pink-400"
                      />
                    ) : (
                      <p className="font-bold text-slate-700">
                        {profile.phone || "Not added"}
                      </p>
                    )}
                  </div>

                  {/* ADDRESS */}

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-pink-500">
                      <MapPin size={17} />
                      <span className="text-xs font-black uppercase tracking-wider">
                        Address
                      </span>
                    </div>

                    {profileEdit ? (
                      <textarea
                        value={profile.address}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            address: e.target.value,
                          })
                        }
                        rows={2}
                        className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-pink-400"
                      />
                    ) : (
                      <p className="font-bold text-slate-700">
                        {profile.address ||
                          "Address not added"}
                      </p>
                    )}
                  </div>

                  {/* CITY */}

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-pink-500">
                      <MapPin size={17} />

                      <span className="text-xs font-black uppercase tracking-wider">
                        City
                      </span>
                    </div>

                    {profileEdit ? (
                      <input
                        value={profile.city}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            city: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-pink-400"
                      />
                    ) : (
                      <p className="font-bold text-slate-700">
                        {profile.city || "Not added"}
                      </p>
                    )}
                  </div>

                  {/* PINCODE */}

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="mb-2 flex items-center gap-2 text-pink-500">
                      <MapPin size={17} />

                      <span className="text-xs font-black uppercase tracking-wider">
                        Pincode
                      </span>
                    </div>

                    {profileEdit ? (
                      <input
                        value={profile.pincode}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            pincode: e.target.value,
                          })
                        }
                        inputMode="numeric"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-pink-400"
                      />
                    ) : (
                      <p className="font-bold text-slate-700">
                        {profile.pincode || "Not added"}
                      </p>
                    )}
                  </div>
                </div>

                {/* SAVE */}

                {profileEdit && (
                  <motion.button
                    type="button"
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    onClick={saveProfile}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 font-black text-white shadow-xl"
                  >
                    <Check size={19} />
                    Save Profile
                  </motion.button>
                )}

                {/* ACCOUNT STATS */}

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-pink-50 p-4 text-center">
                    <p className="text-2xl font-black text-pink-500">
                      {(user.orders || []).length}
                    </p>

                    <p className="mt-1 text-[10px] font-black uppercase tracking-wider text-slate-500">
                      Orders
                    </p>
                  </div>

                  <div className="rounded-2xl bg-purple-50 p-4 text-center">
                    <p className="text-2xl font-black text-purple-500">
                      {wishlistCount}
                    </p>

                    <p className="mt-1 text-[10px] font-black uppercase tracking-wider text-slate-500">
                      Wishlist
                    </p>
                  </div>

                  <div className="rounded-2xl bg-blue-50 p-4 text-center">
                    <p className="text-2xl font-black text-blue-500">
                      {cartCount}
                    </p>

                    <p className="mt-1 text-[10px] font-black uppercase tracking-wider text-slate-500">
                      Cart
                    </p>
                  </div>
                </div>

                {/* ORDER HISTORY */}

                <div className="mt-7">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-black text-slate-800">
                      My Orders
                    </h3>

                    <Package
                      size={20}
                      className="text-pink-500"
                    />
                  </div>

                  {(user.orders || []).length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                        🧸
                      </div>

                      <p className="mt-3 font-black text-slate-700">
                        No orders yet
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Your toy orders will appear here.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {[...(user.orders || [])]
                        .reverse()
                        .map((order) => (
                          <motion.div
                            key={order.id}
                            whileHover={{
                              y: -2,
                            }}
                            className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4 shadow-sm"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-xs font-black uppercase tracking-wider text-pink-500">
                                  {order.id}
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                  {order.date}
                                </p>
                              </div>

                              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black text-emerald-600">
                                {order.status}
                              </span>
                            </div>

                            <div className="mt-4 flex items-center justify-between border-t pt-3 text-sm">
                              <span className="text-slate-500">
                                {order.items} item
                                {order.items !== 1
                                  ? "s"
                                  : ""}
                              </span>

                              <span className="font-black text-slate-800">
                                ₹
                                {order.total.toLocaleString(
                                  "en-IN"
                                )}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  )}
                </div>

                {/* LOGOUT */}

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={handleLogout}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50 px-5 py-4 font-black text-red-500 transition hover:bg-red-100"
                >
                  <LogOut size={19} />
                  Logout
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* =====================================================
          ORDER SUCCESS
      ====================================================== */}

      <AnimatePresence>
        {orderConfirmed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[800] flex items-center justify-center overflow-hidden bg-slate-950/70 p-5 backdrop-blur-md"
          >
            {Array.from({ length: 18 }).map(
              (_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0.5],
                    x:
                      (Math.random() - 0.5) *
                      700,
                    y:
                      (Math.random() - 0.5) *
                      600,
                    rotate:
                      Math.random() * 360,
                  }}
                  transition={{
                    duration: 1.8,
                    delay:
                      Math.random() * 0.4,
                  }}
                  className="pointer-events-none absolute left-1/2 top-1/2 text-xl"
                >
                  {
                    ["🎉", "✨", "🎈", "⭐", "🧸", "🎁"][
                      i % 6
                    ]
                  }
                </motion.div>
              )
            )}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.65,
                rotateX: 15,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                y: 0,
              }}
              transition={spring}
              className="relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/60 bg-white p-8 text-center shadow-2xl"
            >
              <motion.div
                initial={{
                  scale: 0,
                  rotate: -40,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 12,
                  delay: 0.15,
                }}
                className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-green-50 text-5xl shadow-xl"
              >
                🎉
              </motion.div>

              <h2 className="relative mt-6 text-3xl font-black text-slate-800">
                Order Confirmed!
              </h2>

              <p className="mt-2 text-slate-500">
                Thank you for shopping with IDEALS.
              </p>

              <div className="relative mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-5 shadow-inner">
                <p className="relative text-xs font-bold uppercase tracking-widest text-pink-500">
                  Order ID
                </p>

                <p className="relative mt-2 text-2xl font-black text-slate-800">
                  {orderId}
                </p>
              </div>

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={openTracking}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-4 font-black text-white shadow-xl"
              >
                <Truck size={19} />
                Track Order
              </motion.button>

              <button
                type="button"
                onClick={() =>
                  setOrderConfirmed(false)
                }
                className="mt-3 w-full rounded-2xl px-5 py-3 text-sm font-bold text-slate-500 transition hover:bg-slate-50"
              >
                Continue Shopping
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          ORDER TRACKING
      ====================================================== */}

      <AnimatePresence>
        {trackingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[900] flex items-center justify-center bg-slate-950/70 p-5 backdrop-blur-md"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                rotateX: 12,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 40,
              }}
              transition={spring}
              className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[32px] border border-white/60 bg-white p-6 shadow-2xl sm:p-8"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-pink-500">
                    IDEALS Delivery
                  </p>

                  <h2 className="mt-1 text-2xl font-black">
                    Track Your Order
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {orderId}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setTrackingOpen(false)
                  }
                  className="rounded-xl bg-slate-100 p-2"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative mt-8">
                <div className="absolute left-[23px] top-5 h-[calc(100%-40px)] w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-slate-200" />

                <div className="space-y-8">
                  {trackingSteps.map(
                    (step, index) => {
                      const Icon = step.icon;

                      const completed = index <= 2;

                      return (
                        <motion.div
                          key={step.title}
                          initial={{
                            opacity: 0,
                            x: -30,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay:
                              0.25 +
                              index * 0.12,
                          }}
                          className="relative flex gap-4"
                        >
                          <div
                            className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                              completed
                                ? "bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-xl"
                                : "bg-slate-100 text-slate-400"
                            }`}
                          >
                            <Icon size={20} />
                          </div>

                          <div className="pt-1">
                            <h3
                              className={`font-black ${
                                completed
                                  ? "text-slate-800"
                                  : "text-slate-400"
                              }`}
                            >
                              {step.title}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                              {step.description}
                            </p>

                            {completed && (
                              <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-black text-emerald-600">
                                <Check size={11} />
                                Completed
                              </span>
                            )}
                          </div>
                        </motion.div>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-purple-50 p-4 text-sm text-blue-700">
                <div className="flex gap-3">
                  <Truck
                    size={20}
                    className="shrink-0"
                  />

                  <p>
                    This is a frontend demo tracking
                    timeline. Real-time courier tracking
                    can be connected later.
                  </p>
                </div>
              </div>

              <motion.button
                type="button"
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() =>
                  setTrackingOpen(false)
                }
                className="mt-5 w-full rounded-2xl bg-slate-900 px-5 py-4 font-black text-white shadow-xl"
              >
                Done
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}