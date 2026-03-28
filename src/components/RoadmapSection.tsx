import { motion } from "framer-motion";
import { Eye, Hand, FileCheck } from "lucide-react";

const phases = [
  {
    icon: Eye,
    phase: "Phase 1",
    title: "The Visual Brain",
    timeline: "Weeks 1–4",
    description: "Web-based dashboard ingesting video feeds with >95% component labeling accuracy via YOLOv11.",
  },
  {
    icon: Hand,
    phase: "Phase 2",
    title: "The Robotic Hand",
    timeline: "Weeks 5–8",
    description: "Synchronizing CV output with 6-DOF robotic arms — translating pixels into spatial coordinates via ROS 2.",
  },
  {
    icon: FileCheck,
    phase: "Phase 3",
    title: "The Circular Ledger",
    timeline: "Weeks 9–12",
    description: "Automated minting of Recovery Certificates via Solidity smart contracts on L2 blockchain.",
  },
];

const RoadmapSection = () => {
  return (
    <section id="platform" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">Roadmap</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Development Phases</h2>
          <p className="text-muted-foreground">A 12-week prototype roadmap from vision to on-chain verification.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <phase.icon className="w-5 h-5 text-accent-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{phase.phase}</span>
                  <p className="text-xs text-muted-foreground">{phase.timeline}</p>
                </div>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{phase.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
