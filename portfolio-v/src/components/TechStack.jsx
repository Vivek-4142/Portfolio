import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaDatabase,
  FaChartLine,
  FaBrain,
  FaLanguage,
  FaChartArea,
  FaChartBar,
  FaChartPie
} from "react-icons/fa";
import { 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiJupyter, 
  SiJavascript, 
  SiTailwindcss, 
  SiExpress, 
  SiVercel, 
  SiThreedotjs
} from "react-icons/si";

const techs = [
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "Matplotlib", icon: FaChartArea, color: "#11557C" },
  { name: "Seaborn", icon: FaChartLine, color: "#4C72B0" },
  { name: "SQL", icon: FaDatabase, color: "#00758F" },
  { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
  { name: "Deep Learning", icon: FaBrain, color: "#A855F7" },
  { name: "NLP", icon: FaLanguage, color: "#06B6D4" },
  { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
  { name: "Tableau", icon: FaChartPie, color: "#E97627" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Three.js", icon: SiThreedotjs, color: "#ffffff" }
];

const repeated = [...techs, ...techs];

function TechCard({ name, icon: Icon, color }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="min-w-[150px] md:min-w-[170px] glass rounded-2xl px-6 py-4 flex flex-col items-center justify-center gap-2 border transition-all duration-300 hover:scale-105 cursor-pointer select-none"
      style={{
        borderColor: hovered ? `${color}70` : `${color}25`,
        boxShadow: hovered 
          ? `0 0 25px ${color}30, inset 0 0 15px ${color}20` 
          : `0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 0 10px ${color}08`,
        background: hovered 
          ? `linear-gradient(135deg, rgba(15,15,15,0.85) 0%, ${color}18 100%)`
          : `linear-gradient(135deg, rgba(5,5,5,0.75) 0%, ${color}08 100%)`,
      }}
    >
      {Icon && (
        <Icon 
          size={32} 
          style={{ 
            color: hovered ? color : `${color}bb`,
            filter: hovered 
              ? `drop-shadow(0 0 10px ${color}80)` 
              : `drop-shadow(0 0 4px ${color}20)`,
            transition: "all 0.3s ease"
          }} 
        />
      )}
      <p 
        className="font-bold text-sm tracking-wide transition-all duration-300"
        style={{
          color: hovered ? "#ffffff" : "#d1d5db",
          textShadow: hovered ? `0 0 8px ${color}50` : "none"
        }}
      >
        {name}
      </p>
    </div>
  );
}

function TechStack() {
  return (
    <section id="techstack" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass rounded-3xl p-8 md:p-12 shadow-cyanGlow"
      >
        <p className="text-purple-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
          Tech Stack
        </p>

        <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 gradient-text">
          My Arsenal
        </h2>

        <div className="space-y-6 overflow-hidden">
          <div className="flex gap-4 w-max animate-marquee">
            {repeated.map((tech, index) => (
              <TechCard 
                key={`row1-${tech.name}-${index}`} 
                name={tech.name} 
                icon={tech.icon} 
                color={tech.color} 
              />
            ))}
          </div>

          <div className="flex gap-4 w-max animate-marqueeReverse">
            {repeated.map((tech, index) => (
              <TechCard 
                key={`row2-${tech.name}-${index}`} 
                name={tech.name} 
                icon={tech.icon} 
                color={tech.color} 
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default TechStack;