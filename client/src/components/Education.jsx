const items = [
  {
    degree: 'B.Sc in Software Engineering (major in Cybersecurity)',
    school: 'Daffodil International University',
    period: 'Jan 2023 – Current',
    link: 'https://daffodilvarsity.edu.bd/',
  },
  {
    degree: 'Higher Secondary Certificate',
    school: 'Comilla Government City College',
    period: 'Jun 2018 – Jan 2020',
    link: 'https://www.cgcc.ac.bd',
  },
  {
    degree: 'Secondary School Certificate',
    school: 'Subarnapur High School',
    period: 'Feb 2013 – May 2018',
  },
  {
    degree: 'Bootcamp on Research Methodology and Video Steganography',
    school: 'Cyber Security Center, Daffodil International University',
    period: 'Sep 2023',
  },
];

export default function Education() {
  return (
    <section id="education" className="education">
      <h2 className="section-title">Education & Training</h2>
      <ul className="education__list">
        {items.map((item, i) => (
          <li key={i} className="education__item">
            <div className="education__degree">{item.degree}</div>
            <div className="education__school">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.school}
                </a>
              ) : (
                item.school
              )}
            </div>
            <span className="education__period">{item.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
