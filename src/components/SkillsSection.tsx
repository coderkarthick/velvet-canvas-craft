import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Palette, 
  Brain, 
  Database, 
  Globe, 
  Smartphone,
  GitBranch,
  Cloud
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vue.js', level: 85 }
    ]
  },
  {
    title: 'Backend Development', 
    icon: Database,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 95 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'REST APIs', level: 95 }
    ]
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'Adobe XD', level: 85 },
      { name: 'Prototyping', level: 90 },
      { name: 'User Research', level: 80 }
    ]
  },
  {
    title: 'Machine Learning',
    icon: Brain,
    skills: [
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'Deep Learning', level: 85 }
    ]
  }
];

const tools = [
  { name: 'React', icon: Code },
  { name: 'Python', icon: Code },
  { name: 'Figma', icon: Palette },
  { name: 'Node.js', icon: Globe },
  { name: 'TensorFlow', icon: Brain },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Git', icon: GitBranch },
  { name: 'AWS', icon: Cloud }
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger skill bar animations with staggered delays
          setTimeout(() => {
            const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
            const newAnimatedBars = new Array(totalSkills).fill(false);
            
            skillCategories.forEach((category, catIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                const globalIndex = catIndex * 4 + skillIndex;
                setTimeout(() => {
                  setAnimatedBars(prev => {
                    const updated = [...prev];
                    updated[globalIndex] = true;
                    return updated;
                  });
                }, skillIndex * 200);
              });
            });
          }, 500);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`card-premium p-6 ${isVisible ? `fade-in fade-in-delay-${categoryIndex + 1}` : 'opacity-0'}`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-primary rounded-lg text-white">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * 4 + skillIndex;
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div 
                          className="h-2 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: animatedBars[globalIndex] ? `${skill.level}%` : '0%'
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className={`${isVisible ? 'fade-in fade-in-delay-4' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-center mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <div 
                key={tool.name}
                className="flex items-center space-x-2 px-4 py-2 bg-background rounded-lg border border-border hover:border-primary transition-colors glow-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <tool.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}