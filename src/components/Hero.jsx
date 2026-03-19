"use client";

import { motion } from "framer-motion";

export default function Hero() {

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, 
                delayChildren: 0.2,
            },
        },
    };

    const textReveal = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
    };

    const floatingLogo = {
        hidden: { opacity: 0, scale: 0.6, rotate: -5 },
        visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
        float: {
            y: [0, -15, 0],
            rotate: [0, 2, -2, 0],
            transition: { duration: 5, ease: "easeInOut", repeat: Infinity },
        }
    };

    const pulseGlow = {
        animate: {
            boxShadow: ["0 0 25px rgba(212, 165, 50, 0.2)", "0 0 60px rgba(212, 165, 50, 0.6)", "0 0 25px rgba(212, 165, 50, 0.2)"],
            transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }
    };

    return (
        <section className="hero" id="inicio" style={{ perspective: "1000px" }}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="hero-content"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10 }}
            >
                <motion.img
                    variants={floatingLogo}
                    animate={["visible", "float"]}
                    src="/assets/logo-walnut.jpeg?t=1773715000"
                    alt="Walnut Cervejaria Artesanal"
                    className="hero-logo"
                    style={{ animation: "none", borderRadius: "50%", mixBlendMode: 'screen' }} 
                />
                
                <motion.p variants={textReveal} style={{ fontSize: "1.3rem", fontWeight: "300", letterSpacing: "1px" }}>
                    Cervejas artesanais feitas com paixão, ingredientes selecionados e o
                    espírito da nossa cidade.
                </motion.p>
                
                <motion.div variants={textReveal} style={{ marginTop: "1rem" }}>
                    <motion.a 
                        href="#cervejas" 
                        className="hero-cta"
                        variants={pulseGlow}
                        animate="animate"
                        whileHover={{ scale: 1.1, backgroundColor: "var(--gold)", color: "#000", boxShadow: "0 0 80px rgba(212, 165, 50, 0.9)" }}
                        whileTap={{ scale: 0.9 }}
                        style={{ border: "2px solid var(--gold)", color: "var(--gold)" }}
                    >
                        Conheça Nossos Rótulos
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div 
                className="scroll-indicator"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 1 }}
            >
                <span>Scroll</span>
                <div className="arrow" style={{ animation: "none", transform: "rotate(45deg)" }}></div>
                <motion.div 
                    animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }} 
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ width: "20px", height: "20px", borderRight: "2px solid var(--gold)", borderBottom: "2px solid var(--gold)", transform: "rotate(45deg)", position: "absolute", top: "15px" }}
                />
            </motion.div>
        </section>
    );
}
