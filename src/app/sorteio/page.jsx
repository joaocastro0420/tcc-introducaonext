import SkinCard from '../../componentes/skinCard';

export default function Sorteio() {
  return (
    <main style={{ maxWidth: 900, margin: '40px auto', background: 'rgba(34,34,34,0.85)', borderRadius: 16, padding: 32 }}>
      <h2 style={{ color: '#ffd700', marginBottom: 24 }}>Sorteios de Skins</h2>
      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        <div>
          <h3 style={{ color: '#fff' }}>Relâmpago (2 minutos)</h3>
          <SkinCard nome="USP-S Kill Confirmed" preco="800" img="/skins/usps.png" />
          <button>Participar</button>
        </div>
        <div>
          <h3 style={{ color: '#fff' }}>Rápido (1 hora)</h3>
          <SkinCard nome="M4A4 Howl" preco="3000" img="/skins/m4a4.png" />
          <button>Participar</button>
        </div>
        <div>
          <h3 style={{ color: '#fff' }}>Diário (1 dia)</h3>
          <SkinCard nome="AK-47 Neon Rider" preco="1200" img="/skins/ak47.png" />
          <button>Participar</button>
        </div>
        <div>
          <h3 style={{ color: '#fff' }}>Semanal (1 semana)</h3>
          <SkinCard nome="AWP Dragon Lore" preco="5000" img="/skins/awp.png" />
          <button>Participar</button>
        </div>
      </div>
    </main>
  );
}