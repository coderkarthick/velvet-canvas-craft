import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, user authentication, and admin dashboard.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 2,
    title: 'AI Image Recognition',
    category: 'Machine Learning',
    description: 'Deep learning model for image classification using TensorFlow. Achieved 95% accuracy on custom dataset with real-time inference capabilities.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 3,
    title: 'Design System',
    category: 'UI/UX Design',
    description: 'Comprehensive design system for a fintech startup. Includes component library, style guide, and Figma templates.',
    image: '/api/placeholder/600/400',
    technologies: ['Figma', 'React', 'Storybook', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    id: 4,
    title: 'Task Management App',
    category: 'Web Development',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/api/placeholder/600/400',
    technologies: ['Vue.js', 'Express', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    id: 5,
    title: 'Predictive Analytics Dashboard',
    category: 'Machine Learning',
    description: 'Business intelligence dashboard with predictive analytics using machine learning algorithms for sales forecasting.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'Scikit-learn', 'Plotly', 'FastAPI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    id: 6,
    title: 'Mobile Banking UI',
    category: 'UI/UX Design',
    description: 'Modern mobile banking app interface design focusing on user experience, accessibility, and security.',
    image: '/api/placeholder/600/400',
    technologies: ['Figma', 'Prototyping', 'User Testing', 'Adobe XD'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
  }
];

const categories = ['All', 'Web Development', 'Machine Learning', 'UI/UX Design'];

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work across web development, machine learning, and design
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'fade-in fade-in-delay-1' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : 'bg-secondary hover:bg-muted text-foreground hover:shadow-card'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card-premium group overflow-hidden ${
                isVisible ? `fade-in fade-in-delay-${(index % 3) + 2}` : 'opacity-0'
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-secondary rounded-t-lg flex items-center justify-center">
                  <Eye className="w-12 h-12 text-white opacity-50" />
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-primary text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 ${isVisible ? 'fade-in fade-in-delay-4' : 'opacity-0'}`}>
          <button className="btn-premium px-8 py-4 rounded-lg font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}