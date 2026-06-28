import CTA from "../../components/CTA";
import { industries } from "../../data/site";

export const metadata = {
  title: "Industries | Groxa.AI",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="pageHero shell">
        <p className="eyebrow">Industries</p>
        <h1>AI solutions shaped for the way your industry actually operates.</h1>
        <p>
          We bring reusable AI patterns and tailor them to your workflows,
          compliance needs, customer journeys, and growth priorities.
        </p>
      </section>

      <section className="section shell industryGrid">
        {industries.map((industry) => (
          <article className="industryCard" key={industry.title}>
            <span>{industry.icon}</span>
            <h2>{industry.title}</h2>
            <p>{industry.description}</p>
          </article>
        ))}
      </section>

      <CTA title="Build the intelligent layer your industry needs next." />
    </>
  );
}
