import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      background: "#fafafa",
      fontFamily: "sans-serif",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Cabeçalho fixo em português */}
      <header style={{
        width: "100%",
        background: "#fff",
        boxShadow: "0 2px 8px #0001",
        borderRadius: "0 0 16px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0 48px",
        height: 80,
        position: "sticky",
        top: 0,
        zIndex: 10
      }}>
        <nav style={{
          display: "flex",
          gap: 32,
          fontWeight: "bold",
          fontSize: 18
        }}>
          <Link href="/vendas-normais" style={{ color: "#222", textDecoration: "none" }}>VENDAS NORMAIS</Link>
          <Link href="/vendas-particulares" style={{ color: "#222", textDecoration: "none" }}>VENDAS PARTICULARES</Link>
          <Link href="/sorteios" style={{ color: "#222", textDecoration: "none" }}>SORTEIOS</Link>
        </nav>
      </header>

      <main style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "relative"
      }}>
        {/* Título e imagem centralizados */}
        <section style={{
          textAlign: "center",
          margin: "48px 0 32px 0",
          width: "100%"
        }}>
          <h1 style={{
            fontSize: 64,
            fontWeight: "bold",
            margin: 0,
            letterSpacing: "-2px",
            color: "#222"
          }}>
            CS lotus
          </h1>
          <img
            src="/foto.png.png"
            alt="Personagem CS"
            style={{
              width: 220,
              height: "auto",
              margin: "32px auto 0 auto",
              display: "block"
            }}
          />
        </section>
        {/* Card Minha Conta embaixo centralizado */}
        <section style={{
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 16px #0001",
          maxWidth: 900,
          width: "90vw",
          margin: "0 auto",
          marginTop: 32,
          padding: "40px 32px",
          position: "relative",
          zIndex: 2
        }}>
          <h2 style={{
            fontSize: 40,
            fontWeight: "bold",
            marginBottom: 8,
            color: "#222"
          }}>MINHA CONTA</h2>
          <p style={{
            fontSize: 20,
            color: "#222",
            marginBottom: 32
          }}>
            Gerencie suas informações e atividades da sua conta
          </p>
          <div style={{
            display: "flex",
            gap: 24,
            justifyContent: "center"
          }}>
            {/* Card Vendas Normais */}
            <Link href="/vendas-normais" style={{ flex: 1, textDecoration: "none" }}>
              <div style={{
                background: "#fafafa",
                borderRadius: 12,
                boxShadow: "0 2px 8px #0001",
                padding: "32px 24px",
                textAlign: "center",
                minWidth: 220,
                color: "#222"
              }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🏷️</div>
                <div style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8 }}>VENDAS NORMAIS</div>
                <div style={{ color: "#444", fontSize: 16 }}>
                  Liste skins à venda no mercado aberto
                </div>
              </div>
            </Link>
            {/* Card Vendas Particulares */}
            <Link href="/vendas-particulares" style={{ flex: 1, textDecoration: "none" }}>
              <div style={{
                background: "#fafafa",
                borderRadius: 12,
                boxShadow: "0 2px 8px #0001",
                padding: "32px 24px",
                textAlign: "center",
                minWidth: 220,
                color: "#222"
              }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>💬</div>
                <div style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8 }}>VENDAS PARTICULARES</div>
                <div style={{ color: "#444", fontSize: 16 }}>
                  Negocie skins diretamente com outros usuários
                </div>
              </div>
            </Link>
            {/* Card Sorteios */}
            <Link href="/sorteios" style={{ flex: 1, textDecoration: "none" }}>
              <div style={{
                background: "#fafafa",
                borderRadius: 12,
                boxShadow: "0 2px 8px #0001",
                padding: "32px 24px",
                textAlign: "center",
                minWidth: 220,
                color: "#222"
              }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🎁</div>
                <div style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8 }}>SORTEIOS</div>
                <div style={{ color: "#444", fontSize: 16 }}>
                  Participe e crie sorteios de skins
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}