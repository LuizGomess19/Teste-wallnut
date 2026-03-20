"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BeerPouring() {
    const sectionRef = useRef(null);
    
    // Rastrear o scroll especificamente dentro desta seção
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax suave para o texto da esquerda
    const textLeftY = useTransform(scrollYProgress, [0.2, 0.8], [50, -100]);
    const textLeftOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

    // Parallax mais atrasado para o texto da direita
    const textRightY = useTransform(scrollYProgress, [0.3, 0.9], [100, -50]);
    const textRightOpacity = useTransform(scrollYProgress, [0.3, 0.6, 0.9], [0, 1, 0]);

    // Diferentes velocidades de parallax
    const bottle1Y = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const bottle2Y = useTransform(scrollYProgress, [0, 1], [300, -300]); 
    const bottle3Y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    
    // Opacidade geral
    const showcaseOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.65, 0.85], [0, 1, 1, 0]);

    return (
        <section 
            className="beer-pouring-section" 
            ref={sectionRef}
            style={{ position: "relative", overflow: "hidden", perspective: "1000px" }}
        >
            {/* Texto Esquerdo */}
            <motion.div 
                className="beer-pouring-text left"
                style={{ y: textLeftY, opacity: textLeftOpacity }}
            >
                <h3 style={{ textShadow: "0 0 20px rgba(212, 165, 80, 0.4)" }}>Tradição & Inovação</h3>
                <p>Nossas receitas clássicas ganham vida com aromas inconfundíveis.</p>
            </motion.div>

            {/* Vitrine de Garrafas Rodando e Clicáveis */}
            <motion.div 
                className="beer-showcase-wrapper"
                style={{ 
                    display: "flex", 
                    gap: "clamp(1.5rem, 5vw, 4rem)", 
                    justifyContent: "center", 
                    alignItems: "center",
                    opacity: showcaseOpacity,
                    zIndex: 5
                }}
            >
                {/* Garrafa Pilsen */}
                <motion.a 
                    href="#card-pilsen"
                    style={{ y: bottle1Y, display: "inline-block", cursor: "pointer", zIndex: 5 }}
                    whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                    <img
                        src="/assets/beer-pilsen.png"
                        alt="Walnut Pilsen"
                        style={{ 
                            width: "clamp(80px, 15vw, 140px)", 
                            height: "auto", 
                            filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.8))"
                        }}
                    />
                </motion.a>
                
                {/* Garrafa IPA */}
                <motion.a 
                    href="#card-ipa"
                    style={{ y: bottle2Y, display: "inline-block", cursor: "pointer", zIndex: 6 }}
                    whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                    <img
                        src="/assets/beer-ipa.png"
                        alt="Walnut IPA"
                        style={{ 
                            width: "clamp(100px, 18vw, 180px)", 
                            height: "auto", 
                            filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.9))"
                        }}
                    />
                </motion.a>
                
                {/* Garrafa Stout */}
                <motion.a 
                    href="#card-stout"
                    style={{ y: bottle3Y, display: "inline-block", cursor: "pointer", zIndex: 5 }}
                    whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                >
                    <img
                        src="/assets/beer-stout.png"
                        alt="Walnut Stout"
                        style={{ 
                            width: "clamp(80px, 15vw, 140px)", 
                            height: "auto", 
                            filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.8))"
                        }}
                    />
                </motion.a>
            </motion.div>

            {/* Texto Direito */}
            <motion.div 
                className="beer-pouring-text right"
                style={{ y: textRightY, opacity: textRightOpacity }}
            >
                <h3 style={{ textShadow: "0 0 20px rgba(212, 165, 80, 0.4)" }}>Sabor Artesanal</h3>
                <p>Uma experiência premium em cada gole da nossa coleção.</p>
            </motion.div>
        </section>
    );
}
