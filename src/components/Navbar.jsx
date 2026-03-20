"use client";
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${show ? 'show' : ''}`}>
            <div className="navbar-logo">
                <img
                    src="/assets/logo-walnut.jpeg?t=1773715000"
                    alt="Walnut Logo"
                    style={{ borderRadius: "50%", width: "38px", height: "38px", objectFit: "cover" }}
                />
            </div>
            <div className="navbar-links">
                <a href="#inicio">Início</a>
                <a href="#cervejas">Cervejas</a>
                <a href="#sobre">Sobre</a>
                <a href="#pedidos">Pedidos</a>
                <a href="#contato">Contato</a>
            </div>
        </nav>
    );
}
