export default function Footer() {
    return (
        <>
            <div className="age-banner">
                <div className="container">
                    <p>🍺 Beba com moderação. Venda proibida para menores de 18 anos.</p>
                </div>
            </div>

            <footer className="footer" id="contato">
                <div className="container">
                    <div className="footer-brand">
                        <img
                            src="/assets/logo-walnut.jpeg?t=1773715000"
                            alt="Cervejaria Walnut"
                            className="footer-logo"
                            style={{ borderRadius: "50%", width: "80px", height: "80px", objectFit: "cover", mixBlendMode: "screen", margin: "0 auto 1rem" }}
                        />
                        <h3>Cervejaria Walnut</h3>
                        <p>Delivery de chopp artesanal de alto padrão — da nossa cidade para o seu copo.</p>
                    </div>

                    <div className="footer-socials">
                        <a href="https://www.instagram.com/cervejariawalnut" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="E-mail">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </a>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2026 Cervejaria Walnut. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
