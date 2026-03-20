"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const beerOptions = [
    { id: 'ipa', name: 'Walnut IPA', price30: 450, price50: 680 },
    { id: 'pilsen', name: 'Walnut Pilsen', price30: 380, price50: 580 },
    { id: 'stout', name: 'Walnut Stout', price30: 500, price50: 750 },
    { id: 'wheat', name: 'Walnut Wheat', price30: 420, price50: 640 },
    { id: 'red-ale', name: 'Walnut Red Ale', price30: 460, price50: 700 },
    { id: 'porter', name: 'Walnut Porter', price30: 480, price50: 720 },
];

const freteOptions = {
    retirada: 0,
    entrega: 80,
};

// Formato visual simples para celular e CPF (máscara apenas no display não aplicada estritamente aqui por brevidade)
export default function OrderSection() {
    const [form, setForm] = useState({
        nome: '',
        cpf: '',
        celular: '',
        cerveja: '',
        tamanho: '30',
        dataRetirada: '',
        dataEntrega: '',
        horario: '',
        local: '',
        tipoFrete: 'retirada',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (submitted) setSubmitted(false);
    };

    const selectedBeer = beerOptions.find((b) => b.id === form.cerveja);

    const valorBarril = selectedBeer
        ? form.tamanho === '30'
            ? selectedBeer.price30
            : selectedBeer.price50
        : 0;

    const frete = freteOptions[form.tipoFrete] || 0;
    const total = valorBarril + frete;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    // Animação stagger para os campos do formulário
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="order-section" id="pedidos" style={{ overflow: "hidden" }}>
            {/* Ambient Background Glows */}
            <div className="glow-blob gold" />
            <div className="glow-blob dark" />

            <div className="container" style={{ position: "relative", zIndex: 10 }}>
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}
                >
                    Delivery de Chopp de Alto Padrão
                </motion.h2>
                <motion.p 
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    Agende o verdadeiro chopp artesanal padrão Walnut para o seu evento ou para a sua casa. Preencha os dados abaixo rapidamente para a sua reserva de entrega.
                </motion.p>

                {submitted ? (
                    <motion.div 
                        className="order-success glass"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        style={{ textAlign: "center", padding: "4rem", borderRadius: "var(--radius)", background: "rgba(20, 20, 20, 0.5)", border: "1px solid rgba(212, 165, 50, 0.2)" }}
                    >
                        <div className="order-success-icon" style={{ fontSize: "4rem", marginBottom: "1rem" }}>🍺</div>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--gold)", marginBottom: "1rem" }}>Reserva Solicitada!</h3>
                        <p style={{ color: "var(--gray-light)", maxWidth: "500px", margin: "0 auto 2rem" }}>
                            Obrigado, <strong>{form.nome}</strong>! Recebemos seu pedido do barril de <strong>{form.tamanho}L</strong> de <strong>{selectedBeer?.name}</strong>.
                            Entraremos em contato pelo número <strong>{form.celular}</strong> em breve para finalização.
                        </p>
                        <button
                            className="order-btn"
                            style={{ width: "auto" }}
                            onClick={() => {
                                setSubmitted(false);
                                setForm({
                                    nome: '', cpf: '', celular: '',
                                    cerveja: '', tamanho: '30',
                                    dataRetirada: '', dataEntrega: '',
                                    horario: '', local: '', tipoFrete: 'retirada',
                                });
                            }}
                        >
                            Fazer Novo Pedido
                        </button>
                    </motion.div>
                ) : (
                    <form className="order-form" onSubmit={handleSubmit}>
                        <div className="order-grid">
                            
                            {/* Coluna Esquerda - Dados do Pedido */}
                            <motion.div 
                                className="order-col"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                            >
                                {/* Bloco 1: Dados do Cliente */}
                                <motion.div variants={itemVariants} style={{ marginBottom: "1rem" }}>
                                    <h4 style={{ color: "var(--gold-light)", marginBottom: "1rem", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>1. Seus Dados</h4>
                                    <div className="order-field" style={{ marginBottom: "1rem" }}>
                                        <label htmlFor="nome">Nome Completo</label>
                                        <input
                                            type="text" id="nome" name="nome"
                                            placeholder="Digite seu nome completo"
                                            value={form.nome} onChange={handleChange} required
                                        />
                                    </div>
                                    <div className="order-row">
                                        <div className="order-field">
                                            <label htmlFor="cpf">CPF</label>
                                            <input
                                                type="text" id="cpf" name="cpf"
                                                placeholder="000.000.000-00"
                                                value={form.cpf} onChange={handleChange} required
                                            />
                                        </div>
                                        <div className="order-field">
                                            <label htmlFor="celular">Celular (WhatsApp)</label>
                                            <input
                                                type="text" id="celular" name="celular"
                                                placeholder="(00) 00000-0000"
                                                value={form.celular} onChange={handleChange} required
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Bloco 2: O Pedido */}
                                <motion.div variants={itemVariants} style={{ marginBottom: "1rem" }}>
                                    <h4 style={{ color: "var(--gold-light)", marginBottom: "1rem", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>2. O Chopp</h4>
                                    <div className="order-row">
                                        <div className="order-field">
                                            <label htmlFor="cerveja">Cerveja</label>
                                            <select
                                                id="cerveja" name="cerveja"
                                                value={form.cerveja} onChange={handleChange} required
                                            >
                                                <option value="" disabled>Escolha a cerveja</option>
                                                {beerOptions.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
                                            </select>
                                        </div>
                                        <div className="order-field">
                                            <label htmlFor="tamanho">Tamanho do Barril</label>
                                            <select
                                                id="tamanho" name="tamanho"
                                                value={form.tamanho} onChange={handleChange} required
                                            >
                                                <option value="30">30 Litros</option>
                                                <option value="50">50 Litros</option>
                                            </select>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Bloco 3: Logística */}
                                <motion.div variants={itemVariants}>
                                    <h4 style={{ color: "var(--gold-light)", marginBottom: "1rem", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>3. Logística</h4>
                                    <div className="order-row" style={{ marginBottom: "1rem" }}>
                                        <div className="order-field">
                                            <label htmlFor="dataRetirada">Data de Início</label>
                                            <input type="date" id="dataRetirada" name="dataRetirada" value={form.dataRetirada} onChange={handleChange} required />
                                        </div>
                                        <div className="order-field">
                                            <label htmlFor="dataEntrega">Data de Devolução</label>
                                            <input type="date" id="dataEntrega" name="dataEntrega" value={form.dataEntrega} onChange={handleChange} required />
                                        </div>
                                    </div>

                                    <div className="order-row" style={{ marginBottom: "1rem" }}>
                                        <div className="order-field">
                                            <label htmlFor="horario">Horário Preferido</label>
                                            <input type="time" id="horario" name="horario" value={form.horario} onChange={handleChange} required />
                                        </div>
                                        <div className="order-field">
                                            <label htmlFor="tipoFrete">Tipo de Entrega</label>
                                            <select id="tipoFrete" name="tipoFrete" value={form.tipoFrete} onChange={handleChange}>
                                                <option value="retirada">Retirada no Local</option>
                                                <option value="entrega">Entrega (+ R$ 80,00)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="order-field">
                                        <label htmlFor="local">
                                            {form.tipoFrete === 'entrega' ? 'Endereço de Entrega' : 'Observações (opcional)'}
                                        </label>
                                        <input
                                            type="text" id="local" name="local"
                                            placeholder={form.tipoFrete === 'entrega' ? 'Rua, nº, bairro, cidade' : 'Ex: Buscar na porta dos fundos...'}
                                            value={form.local} onChange={handleChange}
                                            required={form.tipoFrete === 'entrega'}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Coluna Direita - Resumo Glassmorphism */}
                            <motion.div 
                                className="order-col"
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="order-summary glass">
                                    <h3>Resumo da Reserva</h3>
                                    <div className="summary-items">
                                        
                                        <div className="summary-row">
                                            <span>Cliente</span>
                                            <span>{form.nome ? form.nome.split(' ')[0] : '—'}</span>
                                        </div>
                                        <div className="summary-divider" />
                                        
                                        <div className="summary-row">
                                            <span>Cerveja</span>
                                            <span>{selectedBeer?.name || '—'}</span>
                                        </div>
                                        <div className="summary-row">
                                            <span>Barril</span>
                                            <span>{form.tamanho}L</span>
                                        </div>
                                        <div className="summary-row">
                                            <span>Retirada</span>
                                            <span>{form.dataRetirada ? new Date(form.dataRetirada + 'T12:00').toLocaleDateString('pt-BR') : '—'}</span>
                                        </div>
                                        <div className="summary-row">
                                            <span>Devolução</span>
                                            <span>{form.dataEntrega ? new Date(form.dataEntrega + 'T12:00').toLocaleDateString('pt-BR') : '—'}</span>
                                        </div>
                                        <div className="summary-divider" />
                                        <div className="summary-row">
                                            <span>Subtotal</span>
                                            <span>{valorBarril > 0 ? `R$ ${valorBarril.toFixed(2).replace('.', ',')}` : '—'}</span>
                                        </div>
                                        <div className="summary-row">
                                            <span>Frete/Taxa</span>
                                            <span>{form.tipoFrete === 'retirada' ? 'Grátis' : `R$ ${frete.toFixed(2).replace('.', ',')}`}</span>
                                        </div>
                                        <div className="summary-divider" />
                                        <div className="summary-row summary-total">
                                            <span>Total Estimado</span>
                                            <span>{total > 0 ? `R$ ${total.toFixed(2).replace('.', ',')}` : '—'}</span>
                                        </div>
                                    </div>
                                    <motion.button 
                                        type="submit" 
                                        className="order-btn"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Finalizar Reserva
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
}
