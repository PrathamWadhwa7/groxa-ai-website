import Link from "next/link";

const footerNav = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["Industries", "/industries"],
  ["Contact", "/contact"],
];

const services = [
  "AI Agents",
  "Automation",
  "Sales AI",
  "Custom Apps",
  "Analytics",
  "Managed Services",
];

const socials = [
  ["in", "LinkedIn", "https://www.linkedin.com"],
  ["@", "Email", "mailto:hello@groxa.ai"],
  ["P", "Phone", "tel:+910000000000"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footerTop">
        <div className="footerIntro">
          <div className="brand footerBrand">
            <span className="brandIcon">G</span>
            <span>Groxa.AI</span>
          </div>
          <p>
            Premium AI, automation, analytics, and digital solutions for modern
            businesses ready to scale smarter.
          </p>
          <div className="footerBadges">
            <span>AI Strategy</span>
            <span>Automation</span>
            <span>Growth Systems</span>
          </div>
        </div>

        <div className="footerColumn">
          <h3>Explore</h3>
          <div className="footerLinks">
            {footerNav.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </div>
        </div>

        <div className="footerColumn">
          <h3>Capabilities</h3>
          <div className="footerLinks">
            {services.map((service) => (
              <Link href="/services" key={service}>{service}</Link>
            ))}
          </div>
        </div>

        <div className="footerContact">
          <h3>Start a Conversation</h3>
          <p>hello@groxa.ai</p>
          <p>Bengaluru, India</p>
          <div className="socialRow">
            {socials.map(([icon, label, href]) => (
              <a
                href={href}
                key={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
              >
                <span>{icon}</span>
              </a>
            ))}
          </div>
          <Link className="footerCta" href="/contact">Book Discovery Call</Link>
        </div>
      </div>

      <div className="shell footerBottom">
        <span>© 2026 Groxa.AI. All rights reserved.</span>
        <span>Built for AI-powered growth.</span>
      </div>
    </footer>
  );
}
