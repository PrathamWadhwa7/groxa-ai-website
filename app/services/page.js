import CTA from "../../components/CTA";
import { detailedServices } from "../../data/site";

export const metadata = {
  title: "Services | Groxa.AI",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pageHero shell">
        <p className="eyebrow">Services</p>
        <h1>AI and digital execution for teams ready to move from idea to impact.</h1>
        <p>
          From intelligent agents to custom applications, Groxa.AI designs the
          systems that help your business operate faster, sell smarter, and make
          better decisions.
        </p>
      </section>

      <section className="section shell serviceStack">
        {detailedServices.map((service, index) => (
          <article className="detailCard" key={service.title}>
            <div>
              <span className="indexTag">0{index + 1}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <div className="solutionList">
              {service.solutions.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <CTA title="Let’s identify your highest-value AI opportunity." />
    </>
  );
}
