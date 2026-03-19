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

export default function OrderSection() {
    const [form, setForm] = useState({
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

    return (
        <section className="order-section" id="pedidos">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    Aluguel de Barris
                </motion.h2>
                <motion.p 
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    Reserve seu barril de chopp Walnut para seu evento. Preencha os dados
                    abaixo e entraremos em contato.
                </motion.p>

                {submitted ? (
                    <motion.div 
                        className="order-success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="order-success-icon">🍺</div>
                        <h3>Pedido Enviado!</h3>
                        <p>
                            Recebemos seu pedido de <strong>{selectedBeer?.name}</strong> —
                            barril de <strong>{form.tamanho}L</strong>. Entraremos em contato
                            em breve para confirmar os detalhes.
                        </p>
                        <button
                            className="order-btn"
                            onClick={() => {
                                setSubmitted(false);
                                setForm({
                                    cerveja: '',
                                    tamanho: '30',
                                    dataRetirada: '',
                                    dataEntrega: '',
                                    horario: '',
                                    local: '',
                                    tipoFrete: 'retirada',
                                });
                            }}
                        >
                            Fazer Novo Pedido
                        </button>
                    </motion.div>
                ) : (
                    <motion.form 
                        className="order-form" 
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="order-grid">
                            {/* Coluna Esquerda - Dados do Pedido */}
                            <div className="order-col">
                                <div className="order-field">
                                    <label htmlFor="cerveja">Cerveja</label>
                                    <select
                                        id="cerveja"
                                        name="cerveja"
                                        value={form.cerveja}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>
                                            Selecione a cerveja
                                        </option>
                                        {beerOptions.map((b) => (
                                            <option key={b.id} value={b.id}>
                                                {b.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="order-field">
                                    <label htmlFor="tamanho">Tamanho do Barril</label>
                                    <select
                                        id="tamanho"
                                        name="tamanho"
                                        value={form.tamanho}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="30">30 Litros</option>
                                        <option value="50">50 Litros</option>
                                    </select>
                                </div>

                                <div className="order-row">
                                    <div className="order-field">
                                        <label htmlFor="dataRetirada">Data de Retirada</label>
                                        <input
                                            type="date"
                                            id="dataRetirada"
                                            name="dataRetirada"
                                            value={form.dataRetirada}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="order-field">
                                        <label htmlFor="dataEntrega">Data de Devolução</label>
                                        <input
                                            type="date"
                                            id="dataEntrega"
                                            name="dataEntrega"
                                            value={form.dataEntrega}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="order-row">
                                    <div className="order-field">
                                        <label htmlFor="horario">Horário Preferido</label>
                                        <input
                                            type="time"
                                            id="horario"
                                            name="horario"
                                            value={form.horario}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="order-field">
                                        <label htmlFor="tipoFrete">Tipo de Entrega</label>
                                        <select
                                            id="tipoFrete"
                                            name="tipoFrete"
                                            value={form.tipoFrete}
                                            onChange={handleChange}
                                        >
                                            <option value="retirada">Retirada no Local</option>
                                            <option value="entrega">Entrega (+ R$ 80,00)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="order-field">
                                    <label htmlFor="local">
                                        {form.tipoFrete === 'entrega'
                                            ? 'Endereço de Entrega'
                                            : 'Observações (opcional)'}
                                    </label>
                                    <input
                                        type="text"
                                        id="local"
                                        name="local"
                                        placeholder={
                                            form.tipoFrete === 'entrega'
                                                ? 'Rua, nº, bairro, cidade'
                                                : 'Alguma observação sobre o pedido...'
                                        }
                                        value={form.local}
                                        onChange={handleChange}
                                        required={form.tipoFrete === 'entrega'}
                                    />
                                </div>
                            </div>

                            {/* Coluna Direita - Resumo */}
                            <div className="order-col">
                                <div className="order-summary">
                                    <h3>Resumo do Pedido</h3>
                                    <div className="summary-items">
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
                                            <span>
                                                {form.dataRetirada
                                                    ? new Date(form.dataRetirada + 'T12:00').toLocaleDateString('pt-BR')
                                                    : '—'}
                                            </span>
                                        </div>
                                        <div className="summary-row">
                                            <span>Devolução</span>
                                            <span>
                                                {form.dataEntrega
                                                    ? new Date(form.dataEntrega + 'T12:00').toLocaleDateString('pt-BR')
                                                    : '—'}
                                            </span>
                                        </div>
                                        <div className="summary-row">
                                            <span>Horário</span>
                                            <span>{form.horario || '—'}</span>
                                        </div>
                                        <div className="summary-divider" />
                                        <div className="summary-row">
                                            <span>Valor do Barril</span>
                                            <span>
                                                {valorBarril > 0
                                                    ? `R$ ${valorBarril.toFixed(2).replace('.', ',')}`
                                                    : '—'}
                                            </span>
                                        </div>
                                        <div className="summary-row">
                                            <span>Frete</span>
                                            <span>
                                                {form.tipoFrete === 'retirada'
                                                    ? 'Grátis'
                                                    : `R$ ${frete.toFixed(2).replace('.', ',')}`}
                                            </span>
                                        </div>
                                        <div className="summary-divider" />
                                        <div className="summary-row summary-total">
                                            <span>Total</span>
                                            <span>
                                                {total > 0
                                                    ? `R$ ${total.toFixed(2).replace('.', ',')}`
                                                    : '—'}
                                            </span>
                                        </div>
                                    </div>
                                    <button type="submit" className="order-btn" id="submit-order">
                                        Enviar Pedido
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.form>
                )}
            </div>
        </section>
    );
}
