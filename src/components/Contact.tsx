import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-secondary/20" id="contact">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm currently open to new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="card-glass p-6 hover:shadow-lg hover:shadow-primary/20 transition-all group">
            <a 
              href="mailto:ajaymeledath11@gmail.com"
              className="flex items-start gap-4"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">Email</h3>
                <p className="text-muted-foreground">ajaymeledath11@gmail.com</p>
              </div>
            </a>
          </Card>

          <Card className="card-glass p-6 hover:shadow-lg hover:shadow-primary/20 transition-all group">
            <a 
              href="tel:7306075055"
              className="flex items-start gap-4"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">Phone</h3>
                <p className="text-muted-foreground">+91 7306075055</p>
              </div>
            </a>
          </Card>

          <Card className="card-glass p-6 hover:shadow-lg hover:shadow-primary/20 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">Kochi, Kerala, India</p>
              </div>
            </div>
          </Card>

          <Card className="card-glass p-6 hover:shadow-lg hover:shadow-primary/20 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-3">Connect Online</h3>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10"
                    onClick={() => window.open('https://github.com/ajaym8923', '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10"
                    onClick={() => window.open('   https://www.linkedin.com/in/ajay-m-293439255 ', '_blank')}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
            onClick={() => window.location.href = 'mailto:ajaymeledath11@gmail.com'}
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Me an Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
