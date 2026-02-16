import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import MarketingProduct from "@/components/MarketingProduct";
import Toolbox from "@/components/Toolbox";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />

      <Section id="about" title="Sobre mí">
        <div className="max-w-3xl text-zinc-400 leading-relaxed">
          <p>
            Soy Tecnólogo en Análisis y Desarrollo de Software y me desempeño
            como desarrollador junior con experiencia tanto en frontend como en
            backend. He trabajado construyendo y ajustando funcionalidades,
            corrigiendo errores y apoyando procesos en entornos reales, además
            de desarrollar APIs y operaciones CRUD, manejar autenticación (JWT)
            y trabajar con bases de datos relacionales (PostgreSQL/MySQL)
            creando consultas y estructuras para resolver necesidades del
            negocio. En la parte web, me enfoco en que el producto sea claro y
            usable: diseño interfaces responsive, cuido la experiencia del
            usuario y optimizo el rendimiento. Además, complemento mi perfil con
            marketing digital: creo landing pages orientadas a conversión,
            estructuro CTAs (WhatsApp/formularios) y alineo el flujo anuncio →
            landing → acción, apoyando campañas en Meta Ads (Ads Manager /
            Business Suite). Busco un equipo donde pueda crecer aportando
            disciplina, aprendizaje rápido, documentación y entregas
            consistentes.
          </p>
        </div>
      </Section>

      <Section id="projects" title="Proyectos">
        <Projects />
      </Section>

      <Section id="experience" title="Experiencia">
        <Experience />
      </Section>

      <Section id="marketing" title="Marketing aplicado a productos">
        <MarketingProduct />
      </Section>

      <Section id="skills" title="Toolbox">
        <Toolbox />
      </Section>

      <Section id="contact" title="Contacto">
        <Contact />
      </Section>

      <footer className="border-t border-zinc-800 py-10">
        <div className="container text-sm text-zinc-500">
          © {new Date().getFullYear()} Cristian Alvarez
        </div>
      </footer>
    </main>
  );
}
