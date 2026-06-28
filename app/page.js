import AnimatedBanner from "../components/AnimatedBanner";
import CTA from "../components/CTA";
import { outcomes, partnerLogos, services } from "../data/site";

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="heroCopy reveal">
          <p className="eyebrow">AI • Automation • Analytics • Digital Solutions</p>
          <h1>AI-Powered Growth for Modern Businesses</h1>
          <p className="heroText">
            We help ambitious teams automate operations, generate qualified demand,
            elevate customer experience, and build scalable digital products using
            practical, business-first AI.
          </p>
          <div className="heroActions">
            <a className="button primary" href="/contact">Book a Free Consultation</a>
            <a className="button secondary" href="/solutions">Request an AI Assessment</a>
          </div>
          <div className="impactStrip">
            <span><strong>30 min</strong> discovery</span>
            <span><strong>24/7</strong> AI workflows</span>
            <span><strong>End-to-end</strong> delivery</span>
          </div>
        </div>
        <AnimatedBanner />
      </section>

      <section className="logoBand">
        <div className="logoTrack">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <span key={`${logo}-${index}`}>{logo}</span>
          ))}
        </div>
      </section>

      <section className="section shell split">
        <div>
          <p className="eyebrow">What We Do</p>
          <h2>Turn business bottlenecks into intelligent growth systems.</h2>
        </div>
        <p className="lead">
          Groxa.AI brings Artificial Intelligence, Automation, Analytics, and
          Digital Solutions together so your business can reduce waste, accelerate
          decisions, and move faster with confidence.
        </p>
      </section>

      <section className="section shell">
        <div className="sectionHead">
          <p className="eyebrow">Core Services</p>
          <h2>Everything needed to design, launch, and scale AI-powered operations.</h2>
        </div>
        <div className="cardGrid">
          {services.map((service) => (
            <a className="serviceCard lift" href="/services" key={service.title}>
              <span className="iconMark">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section shell outcomePanel">
        <div className="sectionHead">
          <p className="eyebrow">Business Outcomes</p>
          <h2>Built around the numbers your leadership team actually cares about.</h2>
        </div>
        <div className="outcomeGrid">
          {outcomes.map((outcome) => (
            <div className="outcomeItem" key={outcome}>✓ {outcome}</div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
