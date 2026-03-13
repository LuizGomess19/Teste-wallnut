import { useEffect, useRef, useState } from 'react';

export default function BeerPouring() {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);
    const [tilt, setTilt] = useState(0);
    const [splashActive, setSplashActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const sectionHeight = rect.height;
            const viewportHeight = window.innerHeight;

            // Calculate how far we've scrolled through this section
            // When section top hits viewport bottom: progress = 0
            // When section bottom hits viewport top: progress = 1
            const progress = 1 - (rect.bottom / (sectionHeight + viewportHeight));
            const clampedProgress = Math.max(0, Math.min(1, progress));

            // Tilt from 0° to 45° as user scrolls through
            const tiltAngle = clampedProgress * 45;
            setTilt(tiltAngle);
            setSplashActive(tiltAngle > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="beer-pouring-section" ref={sectionRef}>
            <div className="beer-pouring-text left fade-in">
                <h3>Tradição & Inovação</h3>
                <p>Cada gota carrega a essência da nossa cervejaria.</p>
            </div>

            <div className="beer-pouring-wrapper">
                <img
                    ref={imgRef}
                    src="/assets/beer-pouring.png"
                    alt="Cerveja sendo entornada"
                    className="beer-pouring-img"
                    style={{
                        transform: `rotate(${tilt}deg)`,
                        transformOrigin: 'bottom center',
                    }}
                />
                <div className={`beer-splash${splashActive ? ' active' : ''}`} />
            </div>

            <div className="beer-pouring-text right fade-in">
                <h3>Sabor Artesanal</h3>
                <p>Feita com ingredientes selecionados da nossa região.</p>
            </div>
        </section>
    );
}
