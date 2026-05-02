"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
      <p className="text-slate-400 mb-8 max-w-md">
        {error?.message || "An unexpected error occurred during rendering."}
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-primary rounded-full text-white font-semibold hover:bg-primary/80 transition-all"
      >
        Try again
      </button>
    </div>
  );
}
