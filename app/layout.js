import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundEffects from "../components/BackgroundEffects";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Groxa.AI | AI-Powered Growth for Modern Businesses",
  description:
    "Groxa.AI helps businesses automate operations, generate leads, improve customer experience, and build scalable digital solutions with AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BackgroundEffects />
        <ScrollReveal />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
