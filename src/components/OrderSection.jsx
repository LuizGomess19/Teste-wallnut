import { useState, useEffect, useRef } from 'react';

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
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

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
            { threshold: 0.1 }
        );

        if (titleRef.current) observer.observe(titleRef.current);
        if (subtitleRef.current) observer.observe(subtitleRef.current);
        return () => observer.disconnect();
    }, []);

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
        <section className="order-section" id="pedidos" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title fade-in" ref={titleRef}>
                    Aluguel de Barris
                </h2>
                <p className="section-subtitle fade-in" ref={subtitleRef}>
                    Reserve seu barril de chopp Walnut para seu evento. Preencha os dados
                    abaixo e entraremos em contato.
                </p>

                {submitted ? (
                    <div className="order-success fade-in visible">
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
                    </div>
                ) : (
                    <form className="order-form" onSubmit={handleSubmit}>
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
                    </form>
                )}
            </div>
        </section>
    );
}
