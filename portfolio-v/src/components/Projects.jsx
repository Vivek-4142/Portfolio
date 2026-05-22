import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiTrendingUp, FiCpu, FiHeart, FiCoffee } from "react-icons/fi";

const categories = ["All", "AI & Data Science", "Web Development"];

const projects = [
  {
    title: "Quantium Retail Analytics",
    desc: "Retail trial store analysis using KPI benchmarking, control store matching, and business insight-driven recommendations.",
    category: "AI & Data Science",
    tech: ["Python", "Pandas", "Scikit-learn", "SQL", "KPIs"],
    github: "https://github.com/Vivek-4142/Quantium-Products-Trial-Analysis",

    icon: <FiTrendingUp className="text-emerald-400" size={24} />,
    glowColor: "rgba(16, 185, 129, 0.2)"
  },
  {
    title: "SecureScope - AI Agent Framework",
    desc: "A modular AI agent framework for building LLM-powered intelligent applications with flexible architecture.",
    category: "AI & Data Science",
    tech: ["Python", "OpenAI API", "LangChain", "FastAPI"],
    github: "https://github.com/AKing-283/SecureScope_1",

    icon: <FiCpu className="text-purple-400" size={24} />,
    glowColor: "rgba(168, 85, 247, 0.2)"
  },
  {
    title: "LifeOs- AI Multiagent",
    desc: "AI-powered multi-agent productivity assistant that automates inbox cleanup, newsletter unsubscription, and important email summarization using natural language.",
    category: "AI & Data Science",
    tech: ["Python", "Pandas", "Streamlit", "FastAPI"],
    github: "https://github.com/Vivek-4142/LifeOs-Ai-Agent",

    icon: <FiHeart className="text-pink-400" size={24} />,
    glowColor: "rgba(236, 72, 153, 0.2)"
  },
  {
    title: "Foodi - Canteen Management System",
    desc: "Foodi is a web-based canteen management system developed to improve the efficiency and experience of managing a canteen. With features for order management, menu display, and user-friendly navigation, Foodi makes it easy for customers to browse menus, place orders, and enjoy a streamlined service experience.",
    category: "Web Development",
    tech: ["React", "Node.js", "Express.js", "Tailwind CSS"],
    github: "https://github.com/Vivek-4142/foodi",

    icon: <FiCoffee className="text-cyan-400" size={24} />,
    glowColor: "rgba(6, 182, 212, 0.2)"
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="section-padding !pb-4 md:!pb-6 relative z-30">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass rounded-3xl p-8 md:p-12 shadow-cyanGlow"
      >
        {/* Label and Header */}
        <div className="mb-10">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
            Projects
          </p>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 gradient-text">
            Mission Archive
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
            A showcase of data analytics projects, intelligent agents, and interactive web applications designed to solve complex business and healthcare challenges.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 border ${activeCategory === category
                ? "bg-gradient-to-r from-neutral-800 to-black text-white border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.06)] scale-105"
                : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                key={project.title}
                className="group relative rounded-3xl border border-white/10 bg-[#0A0D1A]/80 backdrop-blur-xl p-8 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between"
                style={{
                  boxShadow: `0 0 40px rgba(0,0,0,0.5), inset 0 0 30px rgba(255,255,255,0.02)`
                }}
              >
                {/* Card Glow Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${project.glowColor}, transparent 50%)`
                  }}
                />

                <div>
                  {/* Header info */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                      {project.icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                      {project.category}
                    </span>
                  </div>

                  {/* Title and description */}
                  <h3 className="font-orbitron text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                {/* Tech stack & Actions */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium tracking-wide text-purple-300 px-3 py-1 rounded-lg bg-purple-950/30 border border-purple-900/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors duration-200"
                    >
                      <FiGithub size={16} />
                      <span>Codebase</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      <FiExternalLink size={16} />

                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}