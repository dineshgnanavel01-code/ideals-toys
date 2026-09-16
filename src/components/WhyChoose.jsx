import { motion } from "framer-motion";
import { Baby,BookOpen,HeartHandshake,ShieldCheck,Truck,} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Child-Friendly",
    text: "Designed with little hands and growing minds in mind.",
  },
  {
    icon: HeartHandshake,
    title: "Quality Toys",
    text: "Fun products selected for quality, durability and joy.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Quick and reliable delivery right to your doorstep.",
  },
  {
    icon: BookOpen,
    title: "Educational Value",
    text: "Toys that make learning exciting and interactive.",
  },
  {
    icon: Baby,
    title: "Happy Customers",
    text: "Thousands of families choosing IDEALS for playtime.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="about"
      className="bg-slate-900 px-5 py-24 text-white"
    >
      <div className="mx-auto max-w-full">
        <div className="mb-14 text-center">
          <span className="font-black uppercase tracking-widest text-pink-400">
            Why IDEALS?
          </span>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Made for Happy Childhoods
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500">
                  <Icon />
                </div>

                <h3 className="font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}