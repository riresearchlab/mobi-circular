import { motion } from "framer-motion";
import { Leaf, Heart, GraduationCap } from "lucide-react";

const impacts = [
  {
    icon: Leaf,
    title: "Climate Impact",
    stat: "10×",
    description: "More efficient than traditional mining. Reduces the 7% of global energy consumed by virgin extraction.",
  },
  {
    icon: Heart,
    title: "Health & Safety",
    stat: "Zero",
    description: "Human exposure to hazardous materials. Automated systems replace dangerous backyard burning practices.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    stat: "Open",
    description: "Material Discovery datasets for universities — fostering the next generation of circular economy engineers.",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 bg-gradient-hero text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-3 block">Global Impact</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Beyond Profit</h2>
          <p className="text-primary-foreground/70">Addressing climate, health, and education through technological innovation.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="text-4xl font-display font-bold text-gold mb-2">{item.stat}</div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
