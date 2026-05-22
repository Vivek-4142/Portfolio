import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass rounded-3xl p-8 md:p-12 shadow-cyanGlow"
      >
        <p className="text-purple-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
          About Me
        </p>

        <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 gradient-text">
          Inside The Core
        </h2>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl">
          I’m Vivek Behera, a passionate Data Scientist, AI Enthusiast, and Frontend Developer focused on building intelligent and user-friendly digital solutions. I enjoy working with data, developing AI-powered applications, and creating modern web experiences that solve real-world problems.

          With a strong interest in technology and innovation, I continuously explore new tools and frameworks to improve my skills and create impactful projects. My goal is to combine AI, data, and design to build smart and meaningful solutions for the future.
        </p>
      </motion.div>
    </section>
  );
}

export default About;