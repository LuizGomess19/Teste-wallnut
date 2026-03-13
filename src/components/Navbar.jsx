import { useState, useEffect } from 'react';

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
        <nav className={`navbar${show ? ' show' : ''}`} id="navbar">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#cervejas">Cervejas</a>
            <a href="#contato">Contato</a>
        </nav>
    );
}
