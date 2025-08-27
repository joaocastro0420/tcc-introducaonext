import SkinCard from '../../componentes/skinCard';

export default function Lota() {
  return (
    <main style={{ maxWidth: 900, margin: '40px auto', background: 'rgba(34,34,34,0.85)', borderRadius: 16, padding: 32 }}>
      <h2 style={{ color: '#ffd700', marginBottom: 24 }}>Loja de Skins</h2>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        <SkinCard nome="AK-47 Neon Rider" preco="1200" img="/skins/ak47.png" />
        <SkinCard nome="AWP Dragon Lore" preco="5000" img="/skins/awp.png" />
        {/* Adicione mais skins aqui */}
      </div>
    </main>
  );
}