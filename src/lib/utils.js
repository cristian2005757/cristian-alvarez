/**
 * Utilidades generales para el proyecto
 */

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date) {
  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
  }).format(new Date(date));
}
