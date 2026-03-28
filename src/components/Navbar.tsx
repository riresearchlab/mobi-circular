import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Platform", "Technology", "Materials", "Impact", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-surface"
    >
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
            <Recycle className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg text-foreground">MobiCircular</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Log In</Button>
          <Button size="sm">Get Started</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden border-t border-border bg-card px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>
              {item}
            </a>
          ))}
          <Button className="w-full mt-2" size="sm">Get Started</Button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
