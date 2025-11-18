import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-primary/10">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-sm">
            © 2025 Ajay M. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
