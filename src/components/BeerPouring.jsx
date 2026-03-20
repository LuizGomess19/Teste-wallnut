"use client";
import { motion } from 'framer-motion';

const allBeers = [
  { id: 'ipa', image: '/assets/beer-ipa.png', name: 'Walnut IPA' },
  { id: 'pilsen', image: '/assets/beer-pilsen.png', name: 'Walnut Pilsen' },
  { id: 'stout', image: '/assets/beer-stout.png', name: 'Walnut Stout' },
  { id: 'wheat', image: '/assets/beer-wheat.png', name: 'Walnut Wheat' },
  { id: 'red-ale', image: '/assets/beer-red-ale.png', name: 'Walnut Red Ale' },
  { id: 'porter', image: '/assets/beer-porter.png', name: 'Walnut Porter' },
];

// Duplicamos a lista 3x para garantir loop visual sem lacunas
const reelBeers = [...allBeers, ...allBeers, ...allBeers];

export default function BeerPouring() {
    return (
        <section 
            className="beer-reel-section"
            style={{ 
                position: "relative", 
                overflow: "hidden",
                padding: "5rem 0",
                background: "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)"
            }}
        >
            {/* Título da seção */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ textAlign: "center", marginBottom: "3rem", position: "relative", zIndex: 5 }}
            >
                <h2 className="section-title">Nossa Coleção</h2>
                <p className="section-subtitle">Clique em qualquer rótulo para conhecer mais.</p>
            </motion.div>

            {/* Gradientes laterais fade-out */}
            <div style={{
                position: "absolute", top: 0, left: 0, bottom: 0, width: "120px",
                background: "linear-gradient(to right, var(--bg-primary), transparent)",
                zIndex: 3, pointerEvents: "none"
            }} />
            <div style={{
                position: "absolute", top: 0, right: 0, bottom: 0, width: "120px",
                background: "linear-gradient(to left, var(--bg-primary), transparent)",
                zIndex: 3, pointerEvents: "none"
            }} />

            {/* Fila infinita de cervejas */}
            <div style={{ 
                overflow: "hidden", 
                width: "100%",
                position: "relative",
                zIndex: 1
            }}>
                <motion.div
                    animate={{ x: ["0%", "-33.33%"] }}
                    transition={{
                        x: {
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }
                    }}
                    style={{
                        display: "flex",
                        gap: "3rem",
                        width: "fit-content",
                        paddingLeft: "1.5rem"
                    }}
                >
                    {reelBeers.map((beer, index) => (
                        <motion.a
                            key={`${beer.id}-${index}`}
                            href={`#card-${beer.id}`}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "1rem",
                                textDecoration: "none",
                                flexShrink: 0,
                                cursor: "pointer"
                            }}
                            whileHover={{ scale: 1.12, y: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div style={{
                                width: "clamp(140px, 18vw, 200px)",
                                height: "clamp(200px, 28vw, 300px)",
                                borderRadius: "16px",
                                overflow: "hidden",
                                background: "rgba(10, 31, 56, 0.6)",
                                border: "1px solid rgba(212, 165, 50, 0.15)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "1rem",
                                backdropFilter: "blur(8px)",
                                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)"
                            }}>
                                <img
                                    src={beer.image}
                                    alt={beer.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.6))",
                                        pointerEvents: "none"
                                    }}
                                />
                            </div>
                            <span style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "0.9rem",
                                color: "var(--gold-light)",
                                letterSpacing: "0.05em",
                                textAlign: "center",
                                whiteSpace: "nowrap"
                            }}>
                                {beer.name}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
