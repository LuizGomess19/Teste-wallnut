"use client";
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="about" id="sobre">
            <div className="container">
                <div className="about-content">
                    <motion.div 
                        className="about-text"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2>
                            A arte de <span>fazer cerveja</span>
                        </h2>
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

                        {/* Estatísticas rápidas */}
                        <motion.div 
                            style={{ 
                                display: "flex", 
                                gap: "2.5rem", 
                                marginTop: "2rem",
                                paddingTop: "2rem",
                                borderTop: "1px solid rgba(178, 130, 40, 0.2)"
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {[
                                { number: "6+", label: "Rótulos" },
                                { number: "20K", label: "Seguidores" },
                                { number: "100%", label: "Artesanal" }
                            ].map((stat) => (
                                <div key={stat.label} style={{ textAlign: "center" }}>
                                    <span style={{ 
                                        fontFamily: "var(--font-display)", 
                                        fontSize: "1.8rem", 
                                        color: "var(--gold)",
                                        display: "block",
                                        lineHeight: 1
                                    }}>
                                        {stat.number}
                                    </span>
                                    <span style={{ 
                                        fontSize: "0.75rem", 
                                        color: "var(--gray-light)", 
                                        textTransform: "uppercase", 
                                        letterSpacing: "0.1em" 
                                    }}>
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className="about-image"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <img
                            src="/assets/brewery-about.png"
                            alt="Interior da cervejaria Walnut"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
