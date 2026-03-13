import { useEffect, useRef } from 'react';

export default function About() {
    const textRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (textRef.current) observer.observe(textRef.current);
        if (imgRef.current) observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="about" id="sobre">
            <div className="container">
                <div className="about-content">
                    <div className="about-text fade-in" ref={textRef}>
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
                    </div>
                    <div className="about-image fade-in" ref={imgRef}>
                        <img
                            src="/assets/brewery-about.png"
                            alt="Interior da cervejaria Walnut"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
