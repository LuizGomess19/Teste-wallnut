"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const allBeers = [
  { id: 'ipa', image: '/assets/beer-ipa.png', name: 'Walnut IPA' },
  { id: 'pilsen', image: '/assets/beer-pilsen.png', name: 'Walnut Pilsen' },
  { id: 'stout', image: '/assets/beer-stout.png', name: 'Walnut Stout' },
  { id: 'wheat', image: '/assets/beer-wheat.png', name: 'Walnut Wheat' },
  { id: 'red-ale', image: '/assets/beer-red-ale.png', name: 'Walnut Red Ale' },
  { id: 'porter', image: '/assets/beer-porter.png', name: 'Walnut Porter' },
];

export default function BeerPouring() {
    const sectionRef = useRef(null);
    
    // Rastrear o scroll
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const textLeftY = useTransform(scrollYProgress, [0.2, 0.8], [50, -100]);
    const textLeftOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

    const textRightY = useTransform(scrollYProgress, [0.3, 0.9], [100, -50]);
    const textRightOpacity = useTransform(scrollYProgress, [0.3, 0.6, 0.9], [0, 1, 0]);

    const showcaseOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.65, 0.85], [0, 1, 1, 0]);

    return (
        <section 
            className="beer-pouring-section" 
            ref={sectionRef}
            style={{ position: "relative", overflow: "hidden", perspective: "1200px" }}
        >
            {/* Texto Esquerdo */}
            <motion.div 
                className="beer-pouring-text left"
                style={{ y: textLeftY, opacity: textLeftOpacity, zIndex: 10 }}
            >
                <h3 style={{ textShadow: "0 0 20px rgba(212, 165, 80, 0.4)" }}>Nossa Coleção</h3>
                <p>Descubra os sabores autênticos que compõem o nosso menu.</p>
            </motion.div>

            {/* Carrossel 3D */}
            <motion.div 
                className="beer-showcase-wrapper"
                style={{ 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center",
                    opacity: showcaseOpacity,
                    zIndex: 5,
                    width: "100%",
                    height: "500px"
                }}
            >
                <motion.div
                    style={{
                        position: "relative",
                        width: "clamp(180px, 25vw, 260px)", 
                        height: "clamp(180px, 25vw, 260px)",
                        transformStyle: "preserve-3d" // Mantém a profundidade 3D dos filhos
                    }}
                    animate={{ rotateY: [0, -360] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                    {allBeers.map((beer, index) => {
                        // 6 itens = 360 / 6 = 60 graus de diferença pra cada um
                        const angle = index * 60;
                        return (
                            <motion.a 
                                key={beer.id}
                                href={`#card-${beer.id}`}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // A mágica do Carrossel 3D: roda no proprio eixo e afasta do centro
                                    transform: `rotateY(${angle}deg) translateZ(clamp(200px, 30vw, 380px))`,
                                    cursor: "pointer",
                                    borderRadius: "50%",
                                    backgroundColor: "rgba(20, 20, 20, 0.5)",
                                    border: "2px solid rgba(212, 165, 50, 0.4)",
                                    backdropFilter: "blur(8px)",
                                    padding: "1.5rem",
                                    boxSizing: "border-box"
                                }}
                                whileHover={{ scale: 1.15, filter: "brightness(1.3)", boxShadow: "0 0 40px rgba(212, 165, 50, 0.6)" }}
                            >
                                <img
                                    src={beer.image}
                                    alt={beer.name}
                                    style={{ 
                                        width: "100%", 
                                        height: "100%", 
                                        objectFit: "contain",
                                        filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.8))",
                                        pointerEvents: "none" // Pra não bugar o hover do link
                                    }}
                                />
                            </motion.a>
                        );
                    })}
                </motion.div>
            </motion.div>

            {/* Texto Direito */}
            <motion.div 
                className="beer-pouring-text right"
                style={{ y: textRightY, opacity: textRightOpacity, zIndex: 10 }}
            >
                <h3 style={{ textShadow: "0 0 20px rgba(212, 165, 80, 0.4)" }}>Sabor Artesanal</h3>
                <p>Uma experiência premium em cada estilo, clique e conheça.</p>
            </motion.div>
        </section>
    );
}
