import { motion } from "framer-motion";

const materials = [
  { name: "Neodymium", symbol: "Nd", recovered: "342g", purity: "99.2%", trend: "+8%", barWidth: "85%" },
  { name: "Cobalt", symbol: "Co", recovered: "1.2kg", purity: "98.7%", trend: "+12%", barWidth: "92%" },
  { name: "Gold", symbol: "Au", recovered: "28g", purity: "99.9%", trend: "+5%", barWidth: "78%" },
  { name: "Palladium", symbol: "Pd", recovered: "15g", purity: "99.5%", trend: "+3%", barWidth: "65%" },
  { name: "Lithium", symbol: "Li", recovered: "4.8kg", purity: "97.1%", trend: "+22%", barWidth: "95%" },
];

const MaterialsRecovery = () => {
  return (
    <section id="materials" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">Live Recovery</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Materials Dashboard</h2>
          <p className="text-muted-foreground">Real-time tracking of rare-earth metals recovered through automated urban mining.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl border border-border shadow-card overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              <div className="col-span-3">Element</div>
              <div className="col-span-2">Recovered</div>
              <div className="col-span-2">Purity</div>
              <div className="col-span-4">Recovery Rate</div>
              <div className="col-span-1 text-right">Δ</div>
            </div>

            {materials.map((mat, i) => (
              <motion.div
                key={mat.symbol}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grid grid-cols-12 gap-4 px-6 py-4 items-center border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
              >
                <div className="col-span-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{mat.symbol}</span>
                  </div>
                  <span className="font-display font-semibold text-sm text-foreground">{mat.name}</span>
                </div>
                <div className="col-span-2 text-sm font-medium text-foreground">{mat.recovered}</div>
                <div className="col-span-2 text-sm text-foreground">{mat.purity}</div>
                <div className="col-span-4">
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: mat.barWidth }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-gradient-hero rounded-full"
                    />
                  </div>
                </div>
                <div className="col-span-1 text-right text-xs font-semibold text-primary">{mat.trend}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsRecovery;
