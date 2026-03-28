import { Recycle } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Recycle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-foreground">MobiCircular</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Materials-as-a-Service · AI Urban Mining · Circular Ledger
          </p>
          <p className="text-xs text-muted-foreground">© 2026 MobiCircular. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
