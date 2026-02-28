"use client"

import { use, useState } from "react";

export default  function RatingSection({ movieId }: { movieId: string}) {

  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const handleRate = async (value: number) => {
    setRating(value);

    const res = await fetch("/api/rate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tmdbId: Number(movieId),
        value,
      }),
    });

    const data = await res.json();

    (res.ok ? setMessage("Rating Berhasil disimpan") : setMessage(data.error || "Gagal menyimpan Data"));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Beri Rating</h2>

      {/* Tombol Rating 1-5 */}
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} onClick={() => handleRate(star)} className={`btn ${rating >= star ? "btn-warning" : "btn-outline"}`}>
            ⭐ {star}
          </button>
        ))}
      </div>

      {/* Pesan sukses/gagal */}
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
