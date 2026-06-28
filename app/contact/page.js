export const metadata = {
  title: "Contact | Groxa.AI",
};

export default function ContactPage() {
  return (
    <section className="contactPage shell">
      <div className="contactIntro">
        <p className="eyebrow">Contact</p>
        <h1>Let’s discuss your business goals.</h1>
        <p>
          Whether you are exploring AI, Automation, Analytics, or Digital
          Solutions, we will help identify practical opportunities for growth.
        </p>
        <div className="contactCards">
          <span>Email: hello@groxa.ai</span>
          <span>Phone: +91 XXXXX XXXXX</span>
          <span>Location: Bengaluru, India</span>
        </div>
        <div className="discoveryBox">
          <h2>Free Discovery Session</h2>
          <p>In 30 minutes, we will review your current challenges, AI opportunities, automation possibilities, digital roadmap, and recommended next steps.</p>
        </div>
      </div>

      <form className="contactForm">
        <h2>Request a Free Consultation</h2>
        <label>Name<input type="text" name="name" placeholder="Your name" /></label>
        <label>Company<input type="text" name="company" placeholder="Company name" /></label>
        <label>Email<input type="email" name="email" placeholder="you@company.com" /></label>
        <label>Phone Number<input type="tel" name="phone" placeholder="+91" /></label>
        <label>
          Service Interested In
          <select name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>AI Agents & AI Copilots</option>
            <option>Business Process Automation</option>
            <option>AI-Powered Sales & Marketing</option>
            <option>Web, Mobile & Custom Applications</option>
            <option>Data Analytics & Business Intelligence</option>
            <option>Technology Consulting & Managed Services</option>
          </select>
        </label>
        <label>Message<textarea name="message" placeholder="Tell us what you want to improve" rows="5" /></label>
        <button className="button primary" type="submit">Submit Request</button>
      </form>
    </section>
  );
}
