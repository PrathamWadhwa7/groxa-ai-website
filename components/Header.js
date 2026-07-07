import Link from "next/link";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["Industries", "/industries"],
  ["Contact", "/contact"],
];

export default function Header() {
  return (
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label="Groxa.AI home">
        <img src="/GLogo-cropped.png" alt="Groxa.AI logo" className="brandLogo" />
      </Link>
      <nav>
        {navItems.map(([label, href]) => (
          <Link href={href} key={href}>{label}</Link>
        ))}
      </nav>
      <Link className="navCta" href="/contact">Free Consultation</Link>
      <details className="mobileMenu">
        <summary aria-label="Open navigation">
          <span />
          <span />
          <span />
        </summary>
        <div className="mobileMenuPanel">
          {navItems.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
          <Link className="mobileMenuCta" href="/contact">Free Consultation</Link>
        </div>
      </details>
    </header>
  );
}
