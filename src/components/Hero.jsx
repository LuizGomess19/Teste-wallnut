export default function Hero() {
    return (
        <section className="hero" id="inicio">
            <img
                src="/assets/logo-walnut.jpeg?t=1773715000"
                alt="Walnut Cervejaria Artesanal"
                className="hero-logo"
            />
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
