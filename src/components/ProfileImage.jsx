"use client";

import { useState } from "react";

export default function ProfileImage() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex h-56 w-56 items-center justify-center rounded-xl bg-zinc-800/50 text-sm text-zinc-500">
        Foto de perfil
      </div>
    );
  }

  return (
    <img
      src="/images/profile.jpg"
      alt="Foto de perfil"
      className="h-56 w-56 rounded-xl object-cover"
      onError={() => setError(true)}
    />
  );
}
