import { useEffect, useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'karthick2004.thiru@gmail.com',
      href: 'mailto:karthick2004.thiru@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7397677347',
      href: 'tel:+91 7397677347'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai ,Tamil Nadu',
      href: '#'
    },
    {
      icon: Calendar,
      label: 'Available',
      value: 'Mon - Fri, 9 AM - 6 PM PST',
      href: '#'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-teal/5" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-accent rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-primary rounded-full opacity-10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className={`${isVisible ? 'fade-in fade-in-delay-1' : 'opacity-0'}`}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="glass border-border/50 focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass border-border/50 focus:border-primary transition-colors min-h-[120px] resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-premium py-4 text-base font-medium"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'fade-in fade-in-delay-2' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're a startup looking to build your MVP or an established 
                company seeking to innovate, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="card-premium p-6 block hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium group-hover:gradient-text transition-all duration-300">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional CTA */}
            <div className="card-premium p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">Ready to start your project?</h4>
              <p className="text-muted-foreground mb-4">
                Let's schedule a free consultation to discuss your ideas.
              </p>
              <Button className="btn-premium px-6 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}