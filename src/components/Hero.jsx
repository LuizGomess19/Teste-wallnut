export default function Hero() {
    return (
        <section className="hero" id="inicio">
            <img
                src="/assets/logo-walnut.png"
                alt="Walnut Cervejaria Artesanal"
                className="hero-logo"
            />
            <h1>Walnut <span>Cervejaria</span></h1>
            <p>
                Cervejas artesanais feitas com paixão, ingredientes selecionados e o
                espírito da nossa cidade.
            </p>
            <a href="#cervejas" className="hero-cta">
                Conheça Nossos Rótulos
            </a>

            <div className="scroll-indicator">
                <span>Scroll</span>
                <div className="arrow"></div>
            </div>
        </section>
    );
}
