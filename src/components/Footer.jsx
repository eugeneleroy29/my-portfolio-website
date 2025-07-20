import { ArrowUp } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <span className="text-sm text-muted-foreground">
        &copy; {year} All rights reserved.
      </span>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;