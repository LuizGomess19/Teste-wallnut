"use client";
import { motion } from "framer-motion";

export default function Hero() {
    const stagger = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <section className="hero" id="inicio">
            {/* Background Image */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "url('/assets/hero-bg.png')",
                backgroundSize: "cover", backgroundPosition: "center",
                opacity: 0.2, zIndex: 0
            }} />

            {/* Logo no canto */}
            <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src="/assets/logo-walnut.jpeg?t=1773715000"
                alt="Walnut"
                className="hero-logo-corner"
                style={{
                    position: "absolute", top: "1.5rem", left: "1.5rem",
                    width: "clamp(100px, 15vw, 180px)",
                    borderRadius: "50%", mixBlendMode: "screen", zIndex: 20
                }}
            />

            {/* Conteúdo Central */}
            <motion.div variants={stagger} initial="hidden" animate="visible"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 10, gap: "1.5rem", marginTop: "4rem" }}
            >
                <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span className="cervejaria-text">Cervejaria Artesanal</span>
                    <h1 className="walnut-text">Walnut</h1>
                </motion.div>

                <motion.p variants={fadeUp} style={{
                    fontSize: "clamp(1rem, 2vw, 1.15rem)", fontWeight: 300,
                    maxWidth: "550px", textAlign: "center",
                    color: "rgba(240, 236, 228, 0.75)", lineHeight: 1.7
                }}>
                    O autêntico <strong style={{ color: "var(--gold-light)", fontWeight: 500 }}>Delivery de Chopp de Alto Padrão</strong>. 
                    Ingredientes selecionados e a essência da nossa cidade direto para a sua casa.
                </motion.p>

                <motion.div variants={fadeUp} style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
                    <motion.a href="#cervejas" className="hero-cta"
                        whileHover={{ scale: 1.05, backgroundColor: "var(--gold)", color: "#020a14" }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Nossos Rótulos
                    </motion.a>
                    <motion.a href="#pedidos" className="hero-cta"
                        whileHover={{ scale: 1.05, backgroundColor: "var(--gold)", color: "#020a14" }}
                        whileTap={{ scale: 0.97 }}
                        style={{ borderColor: "rgba(212, 165, 50, 0.4)", color: "var(--gray-100)" }}
                    >
                        Fazer Pedido
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div className="scroll-indicator"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span>Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ width: "16px", height: "16px", borderRight: "1.5px solid var(--gold)", borderBottom: "1.5px solid var(--gold)", transform: "rotate(45deg)" }}
                />
            </motion.div>
        </section>
    );
}
