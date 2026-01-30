export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__content">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">Md Sajib Ahammad</h1>
        <p className="hero__tagline">
          B.Sc in Software Engineering · Daffodil International University
        </p>
        <p className="hero__intro">
          Web Developer · Researcher · Volunteer · Building skills in leadership &amp; communication
        </p>
        <div className="hero__cta">
          <a href="#contact" className="btn btn--primary">
            Get in touch
          </a>
          <a href="#about" className="btn btn--outline">
            About me
          </a>
        </div>
      </div>
    </section>
  );
}
