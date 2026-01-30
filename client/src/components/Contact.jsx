const links = [
  { label: 'Email', href: 'mailto:sajib2305341473@diu.edu.bd', text: 'sajib2305341473@diu.edu.bd' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sajib1473/', text: 'linkedin.com/in/sajib1473' },
  { label: 'GitHub', href: 'https://github.com/mdsajib1473', text: 'github.com/mdsajib1473' },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>
      <p className="contact__intro">
        Open to collaborations, research opportunities, and roles in web development and software engineering.
      </p>
      <ul className="contact__list">
        {links.map((item, i) => (
          <li key={i} className="contact__item">
            <span className="contact__label">{item.label}</span>
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact__link">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
      <p className="contact__location">
        Based in Cumilla & Dhaka, Bangladesh
      </p>
    </section>
  );
}
