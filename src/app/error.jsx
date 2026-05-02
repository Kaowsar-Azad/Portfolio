"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div
      style={{
        background: "#030712",
        color: "white",
        fontFamily: "monospace",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        flexDirection: "column",
        gap: "1rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#a78bfa", fontSize: "1.5rem" }}>Render Error</h2>
      <pre
        style={{
          background: "#0f172a",
          padding: "1rem",
          borderRadius: "8px",
          maxWidth: "700px",
          overflow: "auto",
          fontSize: "0.75rem",
          color: "#f87171",
          border: "1px solid #7c3aed33",
          textAlign: "left",
          whiteSpace: "pre-wrap",
        }}
      >
        {error.message}
        {"\n\n"}
        {error.stack}
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
        }}
      >
        Try Again
      </button>
    </div>
  );
}
