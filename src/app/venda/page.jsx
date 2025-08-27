import SkinCard from '../../componentes/skinCard';

export default function Venda() {
  return (
    <main style={{ maxWidth: 900, margin: '40px auto', background: 'rgba(34,34,34,0.85)', borderRadius: 16, padding: 32 }}>
      <h2 style={{ color: '#ffd700', marginBottom: 24 }}>Venda Particular</h2>
      <p style={{ color: '#fff', marginBottom: 24 }}>Negocie diretamente com outro usuário, sem burocracia!</p>
      <SkinCard nome="AK-47 Neon Rider" preco="1200" img="/skins/ak47.png" />
      <button>Negociar com comprador específico</button>
    </main>
  );
}