import ImageWithFallback from "./ImageWithFallback";

export default function ProfileImage() {
  return (
    <ImageWithFallback
      src="/images/Profile.jpg"
      sources={[
        "/images/Profile.jpg",
        "/images/profile.jpg",
        "https://placehold.co/400x400/27272a/52525b?text=CA",
      ]}
      alt="Foto de perfil"
      className="h-56 w-56 rounded-xl object-cover"
      fallbackClassName="h-56 w-56 rounded-xl"
      fallbackText="Foto de perfil"
    />
  );
}
