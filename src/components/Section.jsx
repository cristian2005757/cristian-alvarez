export default function Section({ title, id, children }) {
  return (
    <section id={id} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>
        {children}
      </div>
    </section>
  );
}
