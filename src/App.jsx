import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeerPouring from './components/BeerPouring';
import About from './components/About';
import BeerCard from './components/BeerCard';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';
import { useEffect, useRef } from 'react';

const beers = [
  {
    id: 'ipa',
    name: 'Walnut IPA',
    badge: 'IPA',
    style: 'India Pale Ale',
    description: 'Lupulada e aromática, para quem gosta de intensidade no copo.',
    abv: '6.5%',
    ibu: '55',
    tastingNotes: 'Notas cítricas de maracujá e toranja, com final amargo equilibrado e corpo médio.',
    image: '/assets/beer-ipa.png',
  },
  {
    id: 'pilsen',
    name: 'Walnut Pilsen',
    badge: 'Pilsen',
    style: 'Pilsner Lager',
    description: 'Clássica, leve e perfeita para qualquer momento.',
    abv: '4.8%',
    ibu: '20',
    tastingNotes: 'Leve e refrescante, com sutil aroma floral e final seco e limpo.',
    image: '/assets/beer-pilsen.png',
  },
  {
    id: 'stout',
    name: 'Walnut Stout',
    badge: 'Stout',
    style: 'Dry Stout',
    description: 'Escura e encorpada, com notas de café e cacau.',
    abv: '7.2%',
    ibu: '35',
    tastingNotes: 'Sabor intenso de café e chocolate amargo, com textura aveludada e cremosa.',
    image: '/assets/beer-stout.png',
  },
  {
    id: 'wheat',
    name: 'Walnut Wheat',
    badge: 'Wheat',
    style: 'Hefeweizen',
    description: 'Cerveja de trigo clássica, frutada e descomplicada.',
    abv: '5.0%',
    ibu: '15',
    tastingNotes: 'Turbidez natural com notas de banana e cravo, refrescante e suave.',
    image: '/assets/beer-wheat.png',
  },
  {
    id: 'red-ale',
    name: 'Walnut Red Ale',
    badge: 'Red Ale',
    style: 'Irish Red Ale',
    description: 'Avermelhada e equilibrada, com notas de caramelo e toffee.',
    abv: '5.5%',
    ibu: '30',
    tastingNotes: 'Malte caramelizado com toque tostado, amargor suave e final adocicado.',
    image: '/assets/beer-red-ale.png',
  },
  {
    id: 'porter',
    name: 'Walnut Porter',
    badge: 'Porter',
    style: 'Robust Porter',
    description: 'Robusta e complexa, com camadas de sabor em cada gole.',
    abv: '6.0%',
    ibu: '28',
    tastingNotes: 'Chocolate ao leite e biscoito amanteigado, com final levemente defumado.',
    image: '/assets/beer-porter.png',
  },
];

function BeerSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

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

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="beers" id="cervejas">
      <div className="container">
        <h2 className="section-title fade-in" ref={titleRef}>
          Nossos Rótulos
        </h2>
        <p className="section-subtitle fade-in" ref={subtitleRef}>
          Cada cerveja feita com dedicação e ingredientes especiais. Passe o
          mouse para descobrir mais.
        </p>

        <div className="beers-grid">
          {beers.map((beer, index) => (
            <BeerCard key={beer.id} beer={beer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  // Smooth scroll for internal links
  useEffect(() => {
    const handleClick = (e) => {
      const href = e.target.closest('a[href^="#"]')?.getAttribute('href');
      if (!href) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <BeerPouring />
      <About />
      <BeerSection />
      <OrderSection />
      <Footer />
    </>
  );
}
