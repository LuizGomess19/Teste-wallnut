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

    // Mapeando o progresso do scroll (0 a 1) para rotação do copo (0 a 60 graus) e opacidade
    const tilt = useTransform(scrollYProgress, [0.3, 0.7], [0, 60]);
    
    // Parallax suave para o texto da esquerda (sobe e some quando a página rola muito)
    const textLeftY = useTransform(scrollYProgress, [0.2, 0.8], [50, -100]);
    const textLeftOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

    // Parallax mais atrasado para o texto da direita
    const textRightY = useTransform(scrollYProgress, [0.3, 0.9], [100, -50]);
    const textRightOpacity = useTransform(scrollYProgress, [0.3, 0.6, 0.9], [0, 1, 0]);

    // Splash do líquido revelando em determinado momento da inclinação
    const splashScale = useTransform(scrollYProgress, [0.5, 0.6], [0, 1.5]);
    const splashOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.8], [0, 1, 0]);

    return (
        <section 
            className="beer-pouring-section" 
            ref={sectionRef}
            style={{ position: "relative", overflow: "hidden" }}
        >
            {/* Texto Esquerdo com Parallax */}
            <motion.div 
                className="beer-pouring-text left"
                style={{ y: textLeftY, opacity: textLeftOpacity }}
            >
                <h3 style={{ textShadow: "0 0 20px rgba(212, 165, 80, 0.4)" }}>Tradição & Inovação</h3>
                <p>Cada gota carrega a essência da nossa cervejaria.</p>
            </motion.div>

            {/* Imagem Central Inclinando */}
            <div className="beer-pouring-wrapper">
                <motion.img
                    src="/assets/beer-pouring.png"
                    alt="Cerveja sendo entornada"
                    className="beer-pouring-img"
                    style={{
                        rotate: tilt,
                        transformOrigin: 'bottom center',
                        boxShadow: "0 20px 50px rgba(0,0,0,0.9)",
                        zIndex: 5
                    }}
                />
                
                {/* Poça splash do líquido (usando transform para animar escala e opacidade ligada ao scroll) */}
                <motion.div 
                    className="beer-splash"
                    style={{
                         scale: splashScale, 
                         opacity: splashOpacity,
                         background: "radial-gradient(ellipse, rgba(212, 165, 50, 0.5) 0%, transparent 70%)",
                         filter: "blur(2px)"
                    }} 
                />
            </div>

            {/* Texto Direito com Parallax */}
            <motion.div 
                className="beer-pouring-text right"
                style={{ y: textRightY, opacity: textRightOpacity }}
            >
                <h3 style={{ textShadow: "0 0 20px rgba(212, 165, 80, 0.4)" }}>Sabor Artesanal</h3>
                <p>Feita com ingredientes selecionados da nossa região.</p>
            </motion.div>
        </section>
    );
}
