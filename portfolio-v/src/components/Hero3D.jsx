import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiMail, FiFileText } from "react-icons/fi";

export default function Hero() {
  const canvasRef = useRef(null);

  // 1. Interactive Starry Sky & Shooting Stars Loop Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Static Stars setup
    const staticStarsCount = 120;
    const staticStars = [];
    for (let i = 0; i < staticStarsCount; i++) {
      staticStars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Shooting Stars setup
    const shootingStarsCount = 5;
    const shootingStars = [];
    const createShootingStar = () => {
      // Start from top-right / top edge
      const side = Math.random() > 0.4;
      return {
        x: side ? Math.random() * width : width + Math.random() * 100,
        y: side ? -Math.random() * 50 : Math.random() * (height * 0.5),
        len: Math.random() * 120 + 80, // Star tail length
        speed: Math.random() * 15 + 10, // Velocity
        dx: -Math.random() * 4 - 8, // Diagonal horizontal speed
        dy: Math.random() * 3 + 6, // Diagonal vertical speed
        active: true,
        alpha: 1,
        wait: Math.floor(Math.random() * 120), // frames to wait before shooting
      };
    };

    for (let i = 0; i < shootingStarsCount; i++) {
      shootingStars.push(createShootingStar());
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const draw = () => {
      // Clear with soft trails (creates a subtle space trailing effect)
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, width, height);

      // Draw Static Stars
      staticStars.forEach((star) => {
        star.phase += star.twinkleSpeed;
        const alpha = Math.max(0.1, Math.min(1, star.alpha + Math.sin(star.phase) * 0.3));
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update & Draw Shooting Stars
      shootingStars.forEach((star, index) => {
        if (!star.active) {
          if (star.wait > 0) {
            star.wait--;
          } else {
            shootingStars[index] = createShootingStar();
          }
          return;
        }

        // Draw Star tail trail using elegant gradient
        const startX = star.x;
        const startY = star.y;
        const endX = star.x - (star.dx / Math.hypot(star.dx, star.dy)) * star.len;
        const endY = star.y - (star.dy / Math.hypot(star.dx, star.dy)) * star.len;

        const grad = ctx.createLinearGradient(startX, startY, endX, endY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${star.alpha})`); // White head
        grad.addColorStop(0.2, `rgba(168, 85, 247, ${star.alpha * 0.6})`); // Purple mid
        grad.addColorStop(1, "rgba(168, 85, 247, 0)"); // Fading tail

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Move shooting star
        star.x += star.dx;
        star.y += star.dy;

        // Reset if offscreen
        if (star.x < -star.len || star.y > height + star.len) {
          star.active = false;
          star.wait = Math.floor(Math.random() * 200 + 50); // delay before next shoot
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#000000] text-white overflow-hidden"
    >
      {/* 2D Canvas Shooting Stars Loop Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Background radial spotlight glow to lift typography contrast */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.03),transparent_60%)] pointer-events-none z-10 blur-3xl" />

      {/* Main Content Layout */}
      <div className="relative z-20 max-w-7xl w-full px-6 md:px-12 lg:px-20 mx-auto py-20 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

          {/* LEFT SIDE: Glowing Typography & Description */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left select-none order-first">

            {/* Tech tag label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-950/20 px-3.5 py-1.5 backdrop-blur-md"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-ping" />
              <span className="text-[10px] font-bold font-mono uppercase tracking-[0.25em] text-purple-400">
                PORTFOLIO
              </span>
            </motion.div>

            {/* hi i m vivek behera - Cool font style and glowing */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="flex flex-col items-center lg:items-start mb-6"
            >
              <h1
                className="block text-5xl md:text-7xl font-sans tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-400 font-black leading-tight"
                style={{
                  textShadow: "0 0 35px rgba(255,255,255,0.18), 0 0 60px rgba(168,85,247,0.1)"
                }}
              >
                HI, I'M VIVEK BEHERA
              </h1>
            </motion.div>

            {/* Small font size description stacked immediately below */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xs md:text-sm font-medium leading-relaxed text-gray-400/90 tracking-wider font-sans max-w-xl mb-8"
            >
              A passionate <span className="text-purple-400 font-bold">Data Scientist</span>, <span className="text-zinc-200 font-bold">AI Enthusiast</span>, and <span className="text-purple-400 font-bold">Frontend Developer</span> focused on building intelligent and user-friendly digital solutions.
            </motion.p>

            {/* Actions aligned below */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 md:gap-6"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              >
                EXPLORE PROJECTS
                <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>


            </motion.div>

          </div>

          {/* RIGHT SIDE: Colorful Contact Button */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative group cursor-pointer my-8 lg:my-0"
            >
              {/* Pulsing neon colorful glow background */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 opacity-75 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition duration-1000 group-hover:duration-200 animate-pulse" />

              <a
                href="#contact"
                className="relative inline-flex items-center gap-4.5 rounded-full bg-black/90 px-9 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 border border-white/10 group-hover:border-transparent group-hover:scale-105"
              >

                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent group-hover:brightness-125 font-orbitron tracking-[0.25em] text-sm font-black">
                  CONTACT ME
                </span>
                <FiMail className="text-purple-400 text-xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}