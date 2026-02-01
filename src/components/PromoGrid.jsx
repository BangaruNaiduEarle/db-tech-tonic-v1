import { motion } from "framer-motion";

const promos = [
  {
    id: 1,
    title: "UnlockTool",
    subtitle: "License Activation Worldwide",
    description:
      "Powerful mobile servicing software for unlocking, flashing, and repairing smartphones.",
    image: "https://your-image-url.com/unlocktool.jpg",
    tag: "Best Seller",
  },
  {
    id: 2,
    title: "MR Auth Tool",
    subtitle: "Xiaomi • OnePlus • Realme",
    description:
      "Expert tool for unlocking & flashing Xiaomi, OnePlus, and Realme phones.",
    image: "https://your-image-url.com/mrauth.jpg",
    tag: "New",
  },
  {
    id: 3,
    title: "Cheetah Tool Pro",
    subtitle: "Credits & Subscriptions",
    description:
      "Easy-to-use phone repair tool that automates most operations with few clicks.",
    image: "https://your-image-url.com/cheetah.jpg",
    tag: "Popular",
  },
  {
    id: 4,
    title: "Android Multi Tool",
    subtitle: "For Various Android Operations",
    description:
      "Multi-function Android repair and flashing solution for technicians.",
    image: "https://your-image-url.com/amt.jpg",
    tag: "Top Rated",
  },
];

export default function PromoGrid({promos}) {
  return (
    <section className="py-20 bg-neutral-950 text-white" id="promo-grid">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Professional Unlocking Tools
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Trusted by technicians worldwide for secure unlocking and repairs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-xl overflow-hidden shadow-lg group bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                style={{ backgroundImage: `url(${promo.image})` }}
              ></div>

              <div className="relative p-6 flex flex-col justify-between h-full z-10">
                <div>
                  <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-wide px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {promo.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                  <h4 className="text-sm text-amber-400 mb-3">
                    {promo.subtitle}
                  </h4>
                  <p className="text-sm text-neutral-300 mb-4">
                    {promo.description}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-block text-center mt-auto px-5 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
