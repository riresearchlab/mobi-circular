import { motion } from "framer-motion";
import { Activity, Cpu, Shield, TrendingUp } from "lucide-react";

const stats = [
  { icon: Activity, label: "Materials Recovered", value: "12.4 tons", change: "+18%" },
  { icon: Cpu, label: "AI Accuracy", value: "97.3%", change: "+2.1%" },
  { icon: Shield, label: "DPPs Minted", value: "8,291", change: "+340" },
  { icon: TrendingUp, label: "Market Value", value: "$2.1M", change: "+12%" },
];

const LiveStatsBar = () => {
  return (
    <section className="relative -mt-12 z-20">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="bg-card rounded-lg p-5 shadow-card border border-border"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                  <stat.icon className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">{stat.label}</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-display font-bold text-foreground">{stat.value}</span>
                <span className="text-xs font-semibold text-primary">{stat.change}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveStatsBar;
