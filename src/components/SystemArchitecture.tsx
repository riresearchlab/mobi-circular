import { motion } from "framer-motion";
import { Eye, Brain, Link2, ArrowDown } from "lucide-react";

const layers = [
  {
    icon: Eye,
    title: "Perception & Action Layer",
    subtitle: "Hardware / Edge AI",
    items: ["Hyperspectral Imaging", "6-DOF Robotic Arms", "NVIDIA Jetson AGX Orin"],
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: Brain,
    title: "Intelligence Layer",
    subtitle: "Cloud / Core AI",
    items: ["Vision Transformer (ViT)", "Reinforcement Learning (SAC)", "Few-Shot Learning"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Link2,
    title: "Transaction Layer",
    subtitle: "Blockchain / Dashboard",
    items: ["Digital Product Passports", "Circular Ledger", "MaaS Marketplace"],
    color: "bg-gold-light text-secondary-foreground",
  },
];

const SystemArchitecture = () => {
  return (
    <section id="technology" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">Architecture</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Three-Layer Ecosystem</h2>
          <p className="text-muted-foreground">From physical sorting to blockchain-verified certificates — an end-to-end automated pipeline.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {layers.map((layer, i) => (
            <div key={layer.title}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${layer.color}`}>
                    <layer.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-foreground">{layer.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{layer.subtitle}</p>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span key={item} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              {i < layers.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="w-5 h-5 text-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;
