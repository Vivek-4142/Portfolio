import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaFilePdf } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate submission effect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding !pt-4 md:!pt-6 !pb-4 md:!pb-6 relative z-30">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass rounded-3xl p-8 md:p-12 shadow-cyanGlow"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-8">
            <div>
              <p className="text-purple-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
                Transmission Portal
              </p>
              <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 gradient-text">
                Let's Connect
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                I’m open to opportunities in AI/ML, Data Science, Fullstack Development,
                and building intelligent systems. Let’s collaborate and build the future together.
              </p>
            </div>

            {/* Quick Link Cards - Arranged as an elegant 2x2 responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              <a
                href="mailto:beheravivek02@gmail.com"
                className="group relative flex items-center gap-4 rounded-2xl border border-white/5 bg-[#050816]/50 p-4 hover:border-purple-500/30 hover:bg-[#0A0D1A]/80 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaEnvelope size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Email</p>
                  <p className="text-xs sm:text-sm font-semibold text-white/90 group-hover:text-purple-300 transition-colors truncate">beheravivek02@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/Vivek-4142"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-4 rounded-2xl border border-white/5 bg-[#050816]/50 p-4 hover:border-cyan-500/30 hover:bg-[#0A0D1A]/80 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaGithub size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">GitHub</p>
                  <p className="text-xs sm:text-sm font-semibold text-white/90 group-hover:text-cyan-300 transition-colors truncate">github.com/Vivek-4142</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/vivek-behera"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-4 rounded-2xl border border-white/5 bg-[#050816]/50 p-4 hover:border-blue-500/30 hover:bg-[#0A0D1A]/80 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaLinkedin size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">LinkedIn</p>
                  <p className="text-xs sm:text-sm font-semibold text-white/90 group-hover:text-blue-300 transition-colors truncate">linkedin.com/in/vivek-behera</p>
                </div>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center gap-4 rounded-2xl border border-white/5 bg-[#050816]/50 p-4 hover:border-emerald-500/30 hover:bg-[#0A0D1A]/80 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaFilePdf size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Resume</p>
                  <p className="text-xs sm:text-sm font-semibold text-white/90 group-hover:text-emerald-300 transition-colors truncate">My Resume</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form / Success Message */}
          <div className="lg:col-span-7 relative flex flex-col justify-center min-h-[400px]">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-orbitron text-xs font-semibold tracking-wider text-gray-400 uppercase">
                        Ident
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="w-full bg-[#050816]/60 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.25)] transition-all duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-orbitron text-xs font-semibold tracking-wider text-gray-400 uppercase">
                        Coordinate (Email)
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        className="w-full bg-[#050816]/60 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.25)] transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-orbitron text-xs font-semibold tracking-wider text-gray-400 uppercase">
                      Transmission
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Transmission details..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                      className="w-full bg-[#050816]/60 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.25)] transition-all duration-300 resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="relative flex items-center justify-center gap-3 w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold py-4 px-6 rounded-2xl text-sm md:text-base transition-all duration-300 disabled:opacity-50 overflow-hidden font-orbitron tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <span>Send Transmission</span>
                        <FaPaperPlane size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center p-8 border border-purple-500/20 bg-purple-950/10 rounded-3xl backdrop-blur-xl"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                    className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 mb-6 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                  >
                    <FiCheckCircle size={48} />
                  </motion.div>
                  <h3 className="font-orbitron text-2xl font-bold mb-4 text-white">
                    Transmission Successful
                  </h3>
                  <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed mb-8">
                    Your coordinates and transmission have been securely received. I will establish a return link shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="font-orbitron text-xs tracking-wider uppercase bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 px-6 py-3 rounded-xl transition duration-300 cursor-pointer"
                  >
                    New Transmission
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;