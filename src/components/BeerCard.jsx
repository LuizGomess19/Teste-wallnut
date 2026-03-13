import { useEffect, useRef } from 'react';

export default function BeerCard({ beer, index }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <article
            className="beer-card fade-in"
            ref={cardRef}
            style={{ transitionDelay: `${index * 0.1}s` }}
            id={`card-${beer.id}`}
        >
            <div className="beer-card-image">
                <img src={beer.image} alt={beer.name} />
                <span className="beer-badge">{beer.badge}</span>
                <div className="beer-overlay">
                    <div className="stats">
                        <div className="stat">
                            {beer.abv}
                            <small>ABV</small>
                        </div>
                        <div className="stat">
                            {beer.ibu}
                            <small>IBU</small>
                        </div>
                    </div>
                    <p className="tasting-notes">{beer.tastingNotes}</p>
                </div>
            </div>
            <div className="beer-card-info">
                <h3>{beer.name}</h3>
                <p className="beer-style">{beer.style}</p>
                <p>{beer.description}</p>
            </div>
        </article>
    );
}
