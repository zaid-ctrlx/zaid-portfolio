import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Code, 
  Terminal, 
  ExternalLink,
  Cpu,
  Database,
  Globe,
  Layout,
  Server,
  Zap,
  Phone
} from 'lucide-react';

// --- Data ---

const PERSONAL_DETAILS = {
  name: "Mohammed Zaid",
  role: "Software Developer",
  email: "mohammedzaidd00@gmail.com",
  phone: "9380004795",
  location: "Bhatkal, India",
  education: "3rd year CSE, @AITM, BHATKAL",
  experience: "2+ years",
  github: "https://github.com/", // Placeholder
  linkedin: "https://linkedin.com/", // Placeholder
  twitter: "https://twitter.com/", // Placeholder
};

const TECH_STACK = [
  { name: "React", icon: <Globe className="w-4 h-4" />, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { name: "TypeScript", icon: <Code className="w-4 h-4" />, color: "bg-blue-600/10 text-blue-400 border-blue-600/20" },
  { name: "Tailwind", icon: <Layout className="w-4 h-4" />, color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  { name: "Node.js", icon: <Server className="w-4 h-4" />, color: "bg-green-500/10 text-green-400 border-green-500/20" },
  { name: "Python", icon: <Terminal className="w-4 h-4" />, color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  { name: "Database", icon: <Database className="w-4 h-4" />, color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { name: "AI/ML", icon: <Cpu className="w-4 h-4" />, color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  { name: "Next.js", icon: <Zap className="w-4 h-4" />, color: "bg-white/10 text-white border-white/20" },
];

const PROJECTS = [
  {
    title: "Habit Tracker",
    description: "A comprehensive application to track daily habits and visualize progress over time. Features include streaks, reminders, and detailed analytics.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "Digital Signage System",
    description: "A centralized system for managing and displaying content across multiple digital screens. Supports video, images, and real-time announcements.",
    tech: ["TypeScript", "WebSocket", "React"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Resume Roster",
    description: "An intelligent resume builder and management tool. Helps users create ATS-friendly resumes with customizable templates and suggestions.",
    tech: ["Next.js", "Tailwind", "OpenAI API"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "AI Powered XO Game",
    description: "A classic Tic-Tac-Toe game enhanced with an unbeatable AI opponent using Minimax algorithm. Challenge yourself against the machine.",
    tech: ["Python", "React", "AI"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2070&auto=format&fit=crop"
  }
];

const EXPERIENCE = [
  {
    company: "Freelance / Personal Projects",
    role: "Full Stack Developer",
    period: "2+ Years",
    description: "Developed various web applications including a Habit Tracker and Digital Signage System. Gained strong proficiency in modern web technologies."
  },
  {
    company: "AITM, Bhatkal",
    role: "Computer Science Student",
    period: "3rd Year",
    description: "Currently pursuing a degree in Computer Science Engineering. Active participant in coding clubs and hackathons."
  }
];

// --- Components ---

const Navbar = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 px-2 py-2 rounded-full shadow-2xl">
        <NavItem icon={<Home className="w-4 h-4" />} href="#" />
        <NavItem icon={<FileText className="w-4 h-4" />} href="#projects" />
        <NavItem icon={<Github className="w-4 h-4" />} href={PERSONAL_DETAILS.github} external />
        <NavItem icon={<Linkedin className="w-4 h-4" />} href={PERSONAL_DETAILS.linkedin} external />
        <NavItem icon={<Mail className="w-4 h-4" />} href={`mailto:${PERSONAL_DETAILS.email}`} external />
      </div>
    </div>
  );
};

const NavItem = ({ icon, href, external = false }: { icon: React.ReactNode, href: string, external?: boolean }) => {
  return (
    <a 
      href={href} 
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="p-2.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
    >
      {icon}
    </a>
  );
};

const StatusBadge = ({ label, color }: { label: string, color: 'red' | 'green' }) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111] border border-white/10 text-xs font-medium text-gray-300">
      <span className={`w-2 h-2 rounded-full ${color === 'green' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'}`}></span>
      {label}
    </div>
  );
};

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-xl font-bold text-gray-100 mb-6">{title}</h2>
);

export function App() {
  const [typedText, setTypedText] = useState("");
  const fullText = " pacman -S  mohammed-zaid";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 selection:bg-white/20">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                Hi, I am Zaid
              </h1>
              <p className="text-gray-400">Developer • Student • Builder</p>
            </div>
            
            <div className="bg-[#111] border border-white/10 px-4 py-3 rounded-lg font-mono text-sm text-gray-300 shadow-xl min-w-[280px]">
              <div className="flex gap-1.5 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">$</span>
                <span className="typing-cursor">{typedText}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">About me</h2>
            <p className="leading-relaxed text-gray-400">
              I am a passionate developer from <span className="text-white font-medium">{PERSONAL_DETAILS.location}</span>. 
              Currently a {PERSONAL_DETAILS.education}. I love building cool stuff and enjoy learning Computer Science.
              I have a great sense of <span className="text-white font-medium">problem solving</span> and designing intuitive user interfaces.
              I have worked on various projects ranging from system utilities to AI-powered games.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <StatusBadge label="Open for work" color="red" />
              <StatusBadge label="Open to freelance" color="green" />
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4 text-sm text-gray-500">
               <div className="flex items-center gap-1">
                 <Mail className="w-4 h-4" />
                 {PERSONAL_DETAILS.email}
               </div>
               <div className="flex items-center gap-1">
                 <Phone className="w-4 h-4" />
                 {PERSONAL_DETAILS.phone}
               </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <SectionHeader title="Experience & Education" />
          <div className="space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="group relative pl-8 border-l border-white/10">
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-[#222] border border-white/20 group-hover:bg-white group-hover:border-white transition-colors duration-300"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{exp.period}</span>
                </div>
                <p className="text-sm text-gray-300 font-medium mb-2">{exp.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <SectionHeader title="Tech that I use" />
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((tech, index) => (
              <div 
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${tech.color} backdrop-blur-sm transition-transform hover:scale-105 select-none`}
              >
                {tech.icon}
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-20">
          <SectionHeader title="Cool Projects" />
          <div className="grid grid-cols-1 gap-8">
            {PROJECTS.map((project, index) => (
              <div 
                key={index}
                className="group bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 opacity-60"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="flex gap-2 mb-3">
                       {project.tech.map((t, i) => (
                         <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-white/10 backdrop-blur-md rounded text-white">{t}</span>
                       ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Live Preview
                    </a>
                    <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-10 border-t border-white/5">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Mohammed Zaid. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Built with React & Tailwind
          </p>
        </footer>

      </main>

      <style>{`
        .typing-cursor::after {
          content: '▋';
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
