import Link from "next/link";

export default function Cabecalho() {
  return (
    <header style={{
      width: "100%",
      height: 80,
      background: "#fff",
      boxShadow: "0 2px 8px #0001",
      borderRadius: "0 0 16px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 48px",
      position: "relative",
      zIndex: 2
    }}>
      <nav style={{
        display: "flex",
        gap: 32,
        fontWeight: "bold",
        fontSize: 18
      }}>
        <Link href="/perfil" style={{ color: "#222", textDecoration: "none" }}>PERFIL</Link>
        <Link href="/vendas-normais" style={{ color: "#222", textDecoration: "none" }}>VENDAS NORMAIS</Link>
        <Link href="/vendas-particulares" style={{ color: "#222", textDecoration: "none" }}>VENDAS PARTICULARES</Link>
        <Link href="/sorteios" style={{ color: "#222", textDecoration: "none" }}>SORTEIOS</Link>
      </nav>
      <div>
        <span style={{
          display: "inline-block",
          border: "2px solid #222",
          borderRadius: "50%",
          width: 40,
          height: 40,
          textAlign: "center",
          lineHeight: "36px",
          fontSize: 24
        }}>👤</span>
      </div>
    </header>
  );
}