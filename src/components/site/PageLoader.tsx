import logo from "@/assets/axisx-logo.png";
import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] gradient-hero flex items-center justify-center">
      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative mx-auto mb-5 w-24 h-24 sm:w-28 sm:h-28">
          {/* Glow orb */}
          <motion.div
            className="absolute inset-0 rounded-full bg-accent/20 blur-xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Outer ring */}
          <motion.div
            className="absolute -inset-3 rounded-full border-2 border-white/20 border-t-accent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner ring (reverse) */}
          <motion.div
            className="absolute -inset-5 rounded-full border border-white/10 border-b-blue-300/70"
            animate={{ rotate: -360 }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
          />
          {/* Logo */}
          <motion.img
            src={logo}
            alt="AXGROUPS logo"
            width={112}
            height={112}
            className="relative w-full h-full object-contain"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <motion.h2
          className="font-display text-white text-2xl sm:text-3xl font-bold tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          AXGROUPS
        </motion.h2>
        <motion.p
          className="text-white/70 text-sm sm:text-base mt-1"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          Engineering & Construction
        </motion.p>

        {/* Loading dots */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-accent"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.18 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
