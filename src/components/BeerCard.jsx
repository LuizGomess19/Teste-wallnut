"use client";
import { motion } from 'framer-motion';

export default function BeerCard({ beer, index }) {
    return (
        <motion.article
            className="beer-card"
            id={`card-${beer.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="beer-card-image">
                <img src={beer.image} alt={beer.name} />
                <span className="beer-badge">{beer.badge}</span>
                <div className="beer-overlay">
                    <div className="stats">
                        <div className="stat">
                            {beer.abv}
                            <small>Teor Alcoólico</small>
                        </div>
                        <div className="stat">
                            {beer.ibu}
                            <small>Amargor</small>
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
        </motion.article>
    );
}
