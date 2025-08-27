export default function Perfil() {
  return (
    <main style={{ maxWidth: 900, margin: '40px auto', background: 'rgba(34,34,34,0.85)', borderRadius: 16, padding: 32 }}>
      <h2 style={{ color: '#ffd700', marginBottom: 24 }}>Meu Perfil</h2>
      <p style={{ color: '#fff' }}>Nome: João</p>
      <p style={{ color: '#fff' }}>Email: joao@email.com</p>
      <p style={{ color: '#fff', marginBottom: 24 }}>Skins cadastradas: 2</p>
      <div style={{ background: '#222', borderRadius: 8, padding: 16 }}>
        <h3 style={{ color: '#ffd700' }}>Avaliações dos compradores</h3>
        <div style={{ marginBottom: 12 }}>
          <strong style={{ color: '#fff' }}>Maria:</strong> <span style={{ color: '#ffd700' }}>⭐⭐⭐⭐⭐</span>
          <p style={{ color: '#fff' }}>Ótimo vendedor, entrega rápida!</p>
        </div>
        <div>
          <strong style={{ color: '#fff' }}>Carlos:</strong> <span style={{ color: '#ffd700' }}>⭐⭐⭐⭐</span>
          <p style={{ color: '#fff' }}>Negociação tranquila, recomendo.</p>
        </div>
      </div>
    </main>
  );
}