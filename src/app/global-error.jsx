"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="bg-[#030712] text-white flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Critical Error</h2>
        <p className="text-slate-400 mb-8">
          A critical error occurred. Please try refreshing the page.
        </p>
        <button
          onClick={() => reset()}
          className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold"
        >
          Refresh App
        </button>
      </body>
    </html>
  );
}
