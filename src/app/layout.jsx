import './globals.css';

export const metadata = {
  title: 'Walnut — Cervejaria Artesanal',
  description: 'Walnut Cervejaria Artesanal — cervejas feitas com paixão e ingredientes selecionados. Descubra nossos rótulos premiados.',
  icons: {
    icon: '/assets/logo-walnut.jpeg?t=1773715000',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Pirata+One&family=Courier+Prime&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
