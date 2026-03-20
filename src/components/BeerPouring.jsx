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

const reelBeers = [...allBeers, ...allBeers, ...allBeers];

export default function BeerPouring() {
    return (
        <section style={{
            position: "relative", overflow: "hidden",
            padding: "5rem 0",
            background: "linear-gradient(180deg, var(--bg-deep) 0%, var(--bg-secondary) 50%, var(--bg-deep) 100%)"
        }}>
            {/* Título */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ textAlign: "center", marginBottom: "3rem", position: "relative", zIndex: 5 }}
            >
                <h2 className="section-title">Nossa Coleção</h2>
                <p className="section-subtitle">Toque em um rótulo para conhecer mais.</p>
            </motion.div>

            {/* Fade edges */}
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "100px", background: "linear-gradient(to right, var(--bg-deep), transparent)", zIndex: 3, pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "100px", background: "linear-gradient(to left, var(--bg-deep), transparent)", zIndex: 3, pointerEvents: "none" }} />

            {/* Marquee */}
            <div style={{ overflow: "hidden", width: "100%", position: "relative", zIndex: 1 }}>
                <motion.div
                    animate={{ x: ["0%", "-33.33%"] }}
                    transition={{ x: { duration: 18, repeat: Infinity, ease: "linear" } }}
                    style={{ display: "flex", gap: "2.5rem", width: "fit-content", paddingLeft: "1rem" }}
                >
                    {reelBeers.map((beer, i) => (
                        <motion.a
                            key={`${beer.id}-${i}`}
                            href={`#card-${beer.id}`}
                            style={{
                                display: "flex", flexDirection: "column", alignItems: "center",
                                gap: "0.8rem", textDecoration: "none", flexShrink: 0, cursor: "pointer"
                            }}
                            whileHover={{ scale: 1.1, y: -8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div style={{
                                width: "clamp(130px, 16vw, 180px)", height: "clamp(190px, 25vw, 270px)",
                                borderRadius: "var(--radius)", overflow: "hidden",
                                background: "var(--bg-glass)",
                                border: "1px solid rgba(212, 165, 50, 0.08)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                padding: "0.8rem", boxShadow: "var(--shadow-md)"
                            }}>
                                <img src={beer.image} alt={beer.name} style={{
                                    width: "100%", height: "100%", objectFit: "contain",
                                    filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.5))", pointerEvents: "none"
                                }} />
                            </div>
                            <span style={{
                                fontFamily: "var(--font-display)", fontSize: "0.8rem",
                                color: "var(--gold-light)", letterSpacing: "0.04em",
                                textAlign: "center", whiteSpace: "nowrap", fontWeight: 400
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
