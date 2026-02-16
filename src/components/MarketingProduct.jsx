export default function MarketingProduct() {
  const items = [
    "Creación y optimización de campañas en Meta Ads (Ads Manager / Meta Business Suite): objetivos, audiencias y estructuras por embudo.",
    "Segmentación y retargeting: públicos personalizados (interacción/visitas), lookalikes y exclusiones para mejorar eficiencia.",
    "Optimización de landing pages para conversión: propuesta de valor, CTAs, velocidad móvil y estructura de secciones.",
    "Creatividades para anuncios (estáticas/video) con enfoque en ángulos, hooks y pruebas A/B de copies.",
    "Lectura de métricas clave: CTR, CPC, CPM, CPA/Coste por resultado, ROAS y ajustes basados en datos.",
  ];

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900/50 p-6 glow">
      <h3 className="text-lg font-semibold text-cyan-200">
        Marketing aplicado a productos
      </h3>
      <ul className="mt-4 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-zinc-300">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
