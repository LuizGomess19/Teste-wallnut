"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        const observer = new IntersectionObserver(
            ([entry]) => setShow(!entry.isIntersecting),
            { threshold: 0.1 }
        );
        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.nav 
                    className="navbar" 
                    id="navbar"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transform: "none" }} // remove the old css transform logic
                >
                    <div className="navbar-logo">
                        <img src="/assets/logo-walnut.jpeg?t=1773715000" alt="Walnut Logo" />
                    </div>
                    <div className="navbar-links">
                        <a href="#inicio">Início</a>
                        <a href="#sobre">Sobre</a>
                        <a href="#cervejas">Cervejas</a>
                        <a href="#pedidos">Pedidos</a>
                        <a href="#contato">Contato</a>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
