import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a self-taught Python Django Developer with hands-on experience building 
              scalable, production-grade web applications. My expertise spans from designing 
              RESTful APIs to integrating AI/ML features and implementing secure authentication systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With multiple full-stack projects under my belt, I've delivered features like 
              real-time validation, email automation, and role-based access control. I'm 
              proficient in leveraging AI tools like ChatGPT and GitHub Copilot to accelerate 
              development and enhance code quality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently working at Knovista Technologies, where I was recognized as 
              <span className="text-primary font-semibold"> Employee of the Month</span> for 
              consistent performance and delivery excellence.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="card-glass p-6 hover:shadow-lg hover:shadow-primary/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">B.Tech in Computer Science and Engineering</p>
                  <p className="text-sm text-primary">Kerala Technical University (2021-2025)</p>
                </div>
              </div>
            </Card>

            <Card className="card-glass p-6 hover:shadow-lg hover:shadow-primary/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-muted-foreground">5+ years of freelance development</p>
                  <p className="text-sm text-primary">Professional work since 2023</p>
                </div>
              </div>
            </Card>

            <Card className="card-glass p-6 hover:shadow-lg hover:shadow-primary/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interests</h3>
                  <p className="text-muted-foreground">AI integration, open-source, continuous learning</p>
                  <p className="text-sm text-primary">Active in developer communities</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
