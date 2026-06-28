export default function CTA({
  title = "Ready to unlock the power of AI for your business?",
}) {
  return (
    <section className="cta shell">
      <div>
        <p className="eyebrow">Next Step</p>
        <h2>{title}</h2>
      </div>
      <a className="button primary" href="/contact">Schedule a Free Discovery Call</a>
    </section>
  );
}
