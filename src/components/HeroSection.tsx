import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-illustration.jpg';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-royal-blue/5" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-secondary rounded-full opacity-15 float-delayed" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-accent rounded-full opacity-5 float" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8">
          <div className={`space-y-6 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
            <div className="space-y-2">
              <p className="text-primary font-medium">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold font-display">
                KARTHICK {' '}
                <span className="gradient-text">T</span>
              </h1>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-medium text-muted-foreground">
                Full-Stack Developer & 
                <br />
                <span className="gradient-text">ML Engineer</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Crafting exceptional digital experiences through innovative web development, 
                stunning UI/UX design, and cutting-edge machine learning solutions.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 ${isLoaded ? 'fade-in fade-in-delay-2' : 'opacity-0'}`}>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-premium px-8 py-4 rounded-lg font-medium"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-lg font-medium border border-border hover:border-primary transition-colors"
            >
              Let's Connect
            </button>
          </div>

          {/* Social Links */}
          <div className={`flex items-center space-x-6 ${isLoaded ? 'fade-in fade-in-delay-3' : 'opacity-0'}`}>
            <a 
              href="https://github.com" 
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors glow-hover"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors glow-hover"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:alex@example.com" 
              className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors glow-hover"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className={`relative ${isLoaded ? 'fade-in fade-in-delay-1' : 'opacity-0'}`}>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Hero illustration" 
              className="w-full h-auto rounded-2xl shadow-premium"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-secondary rounded-lg opacity-80 float" />
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-accent rounded-xl opacity-60 float-delayed" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-bounce ${isLoaded ? 'fade-in fade-in-delay-4' : 'opacity-0'}`}
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
}