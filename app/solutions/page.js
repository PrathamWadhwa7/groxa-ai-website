import CTA from "../../components/CTA";
import { challenges, useCases, whyGroxa } from "../../data/site";

export const metadata = {
  title: "Solutions | Groxa.AI",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="pageHero shell">
        <p className="eyebrow">Solutions</p>
        <h1>Practical AI solutions for the challenges slowing growth.</h1>
        <p>
          We focus on business problems first, then design AI, automation, data,
          and digital systems that create measurable operational momentum.
        </p>
      </section>

      <section className="section shell">
        <div className="sectionHead">
          <p className="eyebrow">Challenges We Solve</p>
          <h2>Clear business problems. Focused technology responses.</h2>
        </div>
        <div className="cardGrid">
          {challenges.map((challenge) => (
            <article className="serviceCard" key={challenge.title}>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell split">
        <div>
          <p className="eyebrow">Popular Use Cases</p>
          <h2>Launch-ready ideas with real business utility.</h2>
        </div>
        <div className="pillCloud">
          {useCases.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section shell whyPanel">
        <p className="eyebrow">Why Groxa.AI</p>
        <div className="whyGrid">
          {whyGroxa.map((item) => (
            <div key={item}>✓ {item}</div>
          ))}
        </div>
      </section>

      <CTA title="Ready to map AI to your business goals?" />
    </>
  );
}
