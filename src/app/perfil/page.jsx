"use client";
import { useState } from "react";

export default function Perfil() {
  const [comentario, setComentario] = useState("");
  const [avaliacao, setAvaliacao] = useState(0);
  const [feedbacks, setFeedbacks] = useState([
    { nome: "Maria", estrelas: 5, texto: "Ótimo vendedor, entrega rápida!" },
    { nome: "Carlos", estrelas: 4, texto: "Negociação tranquila, recomendo." },
  ]);

  function enviarFeedback() {
    if (comentario.trim() && avaliacao > 0) {
      setFeedbacks([
        ...feedbacks,
        { nome: "Você", estrelas: avaliacao, texto: comentario },
      ]);
      setComentario("");
      setAvaliacao(0);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
      }}
    >
      <main
        style={{
          width: "100%",
          maxWidth: 900,
          background: "rgba(34,34,34,0.98)",
          borderRadius: 24,
          padding: "40px 32px",
          color: "#fff",
          boxShadow: "0 0 32px #000a",
          margin: "40px 0",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <img
            src="/perfil.png"
            alt="Foto do Perfil"
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              marginBottom: 16,
              objectFit: "cover",
              border: "3px solid #ffd700",
              boxShadow: "0 2px 16px #0008",
            }}
          />
          <h1 style={{ color: "#ffd700", marginBottom: 8, fontSize: 32 }}>
            João - Melhor vendedor de skins
          </h1>
          <p style={{ fontSize: 18, marginBottom: 4 }}>Contato: 99719-9249</p>
          <p style={{ fontSize: 16, color: "#ccc" }}>Skins cadastradas: 2</p>
        </div>

        <section
          style={{
            background: "#222",
            borderRadius: 16,
            padding: 24,
            marginBottom: 40,
            boxShadow: "0 2px 12px #0006",
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2 style={{ color: "#ffd700", marginBottom: 16, textAlign: "center" }}>
            Deixe seu Feedback
          </h2>
          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Escreva seu comentário..."
            style={{
              width: "100%",
              minHeight: 70,
              borderRadius: 8,
              border: "none",
              background: "#333",
              color: "#fff",
              padding: 14,
              marginBottom: 18,
              fontSize: 17,
              resize: "none",
              boxShadow: "0 1px 6px #0002",
            }}
          />
          <div style={{ marginBottom: 18, textAlign: "center" }}>
            <span style={{ marginRight: 8, fontSize: 18 }}>Avaliação:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={{
                  fontSize: 32,
                  cursor: "pointer",
                  color: star <= avaliacao ? "#ffd700" : "#555",
                  transition: "color 0.2s",
                  marginRight: 4,
                  userSelect: "none",
                }}
                onClick={() => setAvaliacao(star)}
                onMouseOver={() => setAvaliacao(star)}
                onMouseOut={() => setAvaliacao(avaliacao)}
              >
                ★
              </span>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              onClick={enviarFeedback}
              style={{
                background: "#ffd700",
                color: "#222",
                border: "none",
                borderRadius: 8,
                padding: "10px 32px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: 18,
                boxShadow: "0 1px 6px #0002",
                transition: "background 0.2s",
              }}
              disabled={!comentario.trim() || avaliacao === 0}
            >
              Enviar Feedback
            </button>
          </div>
        </section>

        <section style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ color: "#ffd700", marginBottom: 18, textAlign: "center" }}>
            Avaliações dos compradores
          </h2>
          {feedbacks.length === 0 && (
            <p style={{ color: "#ccc", textAlign: "center" }}>
              Nenhum feedback ainda.
            </p>
          )}
          {feedbacks.map((fb, idx) => (
            <div
              key={idx}
              style={{
                background: "#333",
                borderRadius: 12,
                padding: 18,
                marginBottom: 16,
                boxShadow: "0 2px 8px #0004",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                <strong style={{ color: "#ffd700", fontSize: 18 }}>{fb.nome}</strong>
                <span style={{ marginLeft: 12, fontSize: 22, color: "#ffd700" }}>
                  {"★".repeat(fb.estrelas)}
                  {"☆".repeat(5 - fb.estrelas)}
                </span>
              </div>
              <p style={{ color: "#fff", marginTop: 4, fontSize: 16 }}>{fb.texto}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}