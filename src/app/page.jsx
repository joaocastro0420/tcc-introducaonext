import Link from "next/link";
import Cabecalho from "@/componentes/cabecalho";

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
      <Cabecalho />
      <main style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "relative"
      }}>
        {/* Título centralizado */}
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
            COMPRA E VENDA<br />DE SKINS
          </h1>
        </section>
        {/* Botão à direita */}
        <div style={{
          position: "absolute",
          top: 140,
          right: 80
        }}>
          <Link href="/skins">
            <button style={{
              background: "#222",
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "18px 48px",
              fontSize: 28,
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 2px 8px #0002"
            }}>
              VER SKINS
            </button>
          </Link>
        </div>
        {/* Imagem de fundo do personagem centralizada */}
        <div style={{
          width: "80vw",
          maxWidth: 1200,
          height: 220,
          background: "url('/cs-personagem.jpg') center/cover no-repeat",
          borderRadius: 16,
          margin: "32px 0",
          zIndex: 1,
          position: "relative"
        }} />

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
            <div style={{
              background: "#fafafa",
              borderRadius: 12,
              boxShadow: "0 2px 8px #0001",
              padding: "32px 24px",
              textAlign: "center",
              flex: 1,
              minWidth: 220
            }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🏷️</div>
              <div style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8 }}>VENDAS NORMAIS</div>
              <div style={{ color: "#444", fontSize: 16 }}>
                Liste skins à venda no mercado aberto
              </div>
            </div>
            {/* Card Vendas Particulares */}
            <div style={{
              background: "#fafafa",
              borderRadius: 12,
              boxShadow: "0 2px 8px #0001",
              padding: "32px 24px",
              textAlign: "center",
              flex: 1,
              minWidth: 220
            }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>💬</div>
              <div style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8 }}>VENDAS PARTICULARES</div>
              <div style={{ color: "#444", fontSize: 16 }}>
                Negocie skins diretamente com outros usuários
              </div>
            </div>
            {/* Card Sorteios */}
            <div style={{
              background: "#fafafa",
              borderRadius: 12,
              boxShadow: "0 2px 8px #0001",
              padding: "32px 24px",
              textAlign: "center",
              flex: 1,
              minWidth: 220
            }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🎁</div>
              <div style={{ fontWeight: "bold", fontSize: 20, marginBottom: 8 }}>SORTEIOS</div>
              <div style={{ color: "#444", fontSize: 16 }}>
                Participe e crie sorteios de skins
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}