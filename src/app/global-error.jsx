"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body
        style={{
          background: "#030712",
          color: "white",
          fontFamily: "monospace",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          margin: 0,
          padding: "2rem",
          flexDirection: "column",
          gap: "1rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#a78bfa", fontSize: "2rem" }}>Something went wrong</h1>
        <pre
          style={{
            background: "#0f172a",
            padding: "1rem",
            borderRadius: "8px",
            maxWidth: "600px",
            overflow: "auto",
            fontSize: "0.8rem",
            color: "#f87171",
            border: "1px solid #7c3aed33",
          }}
        >
          {error.message}
        </pre>
        <button
          onClick={reset}
          style={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            border: "none",
            color: "white",
            padding: "0.75rem 2rem",
            borderRadius: "9999px",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
