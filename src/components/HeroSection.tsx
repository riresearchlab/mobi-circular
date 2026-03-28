import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-facility.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Automated urban mining facility" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/95 via-teal-deep/80 to-teal-deep/40" />
      </div>

      <div className="container relative z-10 pt-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-glow/30 bg-emerald-glow/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-glow animate-pulse-glow" />
            <span className="text-xs font-medium text-emerald-glow tracking-wide uppercase">AI-Powered Urban Mining</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-primary-foreground mb-6"
          >
            Turning E-Waste Into{" "}
            <span className="text-gold">Tomorrow's Resources</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-primary-foreground/70 max-w-lg mb-8 font-body"
          >
            Neural sorting, reinforcement learning, and blockchain-verified recovery.
            MobiCircular automates the extraction of rare-earth metals with unprecedented purity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-gradient-gold text-secondary-foreground font-semibold hover:opacity-90 transition-opacity">
              <Zap className="w-4 h-4 mr-2" />
              Launch Dashboard
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Explore Technology
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
