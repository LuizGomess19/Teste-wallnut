"use client";
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="about" id="sobre">
            <div className="container">
                <div className="about-content">
                    <motion.div className="about-text"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2>A arte de <span>fazer cerveja</span></h2>
                        <p>
                            A Walnut nasceu da paixão por cervejas que contam uma história.
                            Cada receita é pensada para surpreender, usando ingredientes
                            cuidadosamente selecionados e técnicas que respeitam a tradição
                            cervejeira.
                        </p>
                        <p>
                            Da nossa cidade para o seu copo — com muito sabor, personalidade
                            e o carinho que só uma cervejaria artesanal pode oferecer.
                        </p>

                        <motion.div style={{
                            display: "flex", gap: "3rem", marginTop: "2rem", paddingTop: "1.5rem",
                            borderTop: "1px solid rgba(212, 165, 50, 0.12)"
                        }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {[
                                { n: "6+", l: "Rótulos" },
                                { n: "20K", l: "Seguidores" },
                                { n: "100%", l: "Artesanal" }
                            ].map((s) => (
                                <div key={s.l} style={{ textAlign: "center" }}>
                                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.7rem", color: "var(--gold)", display: "block", lineHeight: 1, fontWeight: 700 }}>{s.n}</span>
                                    <span style={{ fontSize: "0.7rem", color: "var(--gray-200)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 500 }}>{s.l}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div className="about-image"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <img src="/assets/brewery-about.png" alt="Interior da cervejaria Walnut" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
