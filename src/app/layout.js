import Cabecalho from '../componentes/cabecalho';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
        {children}
      </body>
    </html>
  );
}