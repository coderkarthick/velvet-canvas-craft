import { useEffect, useRef, useState } from 'react';
import { Code, Palette, Brain, Award } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: '50+' },
  { label: 'Years Experience', value: '5+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Technologies', value: '20+' },
];

const highlights = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Expert in React, Node.js, Python, and modern web technologies'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user experiences with modern design principles'
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Building intelligent systems with TensorFlow, PyTorch, and cutting-edge AI'
  },
  {
    icon: Award,
    title: 'Problem Solver',
    description: 'Transforming complex challenges into elegant, scalable solutions'
  }
];

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital solutions that make a difference. 
            With a unique blend of technical expertise and creative vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'fade-in fade-in-delay-1' : 'opacity-0'}`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display">
                Building the Future, One Line of Code at a Time
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a versatile developer with expertise spanning full-stack web development, 
                UI/UX design, and machine learning. My journey began with a curiosity about 
                how technology can solve real-world problems, and it has evolved into a passion 
                for creating innovative, user-centric solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in AI research, 
                sketching design concepts, or contributing to open-source projects. I believe 
                in the power of collaboration and continuous learning.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className={`space-y-6 ${isVisible ? 'fade-in fade-in-delay-2' : 'opacity-0'}`}>
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.title}
                className="card-premium p-6 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-white">
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}