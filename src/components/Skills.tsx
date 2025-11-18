import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layers, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Web",
    icon: Code2,
    skills: ["Python", "JavaScript", "HTML5", "CSS3"]
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["Django", "Django REST Framework", "React.js", "jQuery", "AJAX", "Bootstrap"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "SQLite"]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "AWS", "Heroku", "PythonAnywhere", "Stripe", "Razorpay"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6" id="skills">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="card-glass p-6 hover:shadow-lg hover:shadow-primary/20 transition-all group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary/80 hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="card-glass p-8 mt-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            What I <span className="text-gradient">Love</span> Doing
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="text-primary">▹</span>
              Building AI-integrated tools
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">▹</span>
              Contributing to open-source
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">▹</span>
              Reading technical blogs
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">▹</span>
              Engaging with dev communities
            </span>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
