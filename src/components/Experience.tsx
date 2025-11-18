import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    title: "Python Full Stack Developer",
    company: "Knovista Technologies",
    location: "Kochi",
    period: "Aug 2025 – Present",
    highlights: [
      "Developed and maintained full-stack web applications using Django, DRF, PostgreSQL, React, and JavaScript",
      "Designed and optimized RESTful APIs with secure authentication and role-based access control",
      "Containerized applications using Docker and supported deployment workflows",
      "Mentored interns through technical guidance, code reviews, and task planning",
      "Recognized as Employee of the Month for consistent performance and delivery excellence"
    ],
    award: true
  },
  {
    title: "Python Django Developer",
    company: "Altos Technologies",
    location: "Infopark Kochi",
    period: "April 2025 – Aug 2025",
    highlights: [
      "Delivered production-ready features for multiple client projects, improving usability and system performance",
      "Designed scalable REST APIs using Django REST Framework, reducing development turnaround time",
      "Built responsive front-end interfaces in React.js, improving UI load performance across devices",
      "Enhanced backend data handling and database queries for faster page load times",
      "Led integration and validation testing efforts, reducing deployment bugs"
    ]
  },
  {
    title: "Freelance Python Django Developer",
    company: "Remote",
    location: "Global",
    period: "Feb 2020 – Present",
    highlights: [
      "Delivered end-to-end web applications for small businesses and independent clients",
      "Translated client requirements into scalable technical solutions",
      "Developed secure user authentication, role-based access control, and admin dashboards",
      "Built responsive, user-friendly interfaces and integrated RESTful APIs",
      "Performed manual and functional testing to ensure reliability"
    ]
  },
  {
    title: "Web Development Intern",
    company: "INTRAINZ",
    location: "Remote",
    period: "Sept 2023 – Nov 2023",
    highlights: [
      "Contributed to building production-ready application modules using Django and JavaScript",
      "Developed responsive UI components with HTML, CSS, and JavaScript",
      "Integrated RESTful APIs to streamline data exchange between systems",
      "Participated in peer code reviews and followed version control standards using Git"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-secondary/20" id="experience">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background glow-effect" />

                {/* Content */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="card-glass p-6 hover:shadow-lg hover:shadow-primary/20 transition-all group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>
                      {exp.award && (
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          <Award className="h-3 w-3 mr-1" />
                          Top Performer
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
