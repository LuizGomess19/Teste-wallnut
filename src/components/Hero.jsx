"use client";

import { motion } from "framer-motion";

export default function Hero() {
    // Definindo as animações para o framer-motion (Stagger)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Atraso entre o surgimento de cada elemento
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    const floatingLogo = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
        float: {
            y: [0, -12, 0],
            transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
        }
    };

    return (
        <section className="hero" id="inicio">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="hero-content"
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
                <motion.img
                    variants={floatingLogo}
                    animate={["visible", "float"]}
                    src="/assets/logo-walnut.jpeg?t=1773715000"
                    alt="Walnut Cervejaria Artesanal"
                    className="hero-logo"
                    style={{ animation: "none" }} // overriding the CSS keyframe to use framer motion
                />
                
                <motion.p variants={itemVariants}>
                    Cervejas artesanais feitas com paixão, ingredientes selecionados e o
                    espírito da nossa cidade.
                </motion.p>
                
                <motion.div variants={itemVariants}>
                    <motion.a 
                        href="#cervejas" 
                        className="hero-cta"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Conheça Nossos Rótulos
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div 
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span>Scroll</span>
                <div className="arrow"></div>
            </motion.div>
        </section>
    );
}
