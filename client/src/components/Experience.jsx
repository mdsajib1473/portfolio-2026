const jobs = [
  {
    org: 'DIU Software Engineering Club',
    location: 'Bangladesh',
    role: 'Senior Deputy',
    period: 'Oct 2025 – Current',
  },
  {
    org: 'Computer Programming Club, DIU',
    location: 'Bangladesh',
    role: 'Executive',
    period: 'Sep 2024 – Current',
  },
  {
    org: 'New Mitali Hardware Store',
    location: 'Cumilla, Bangladesh',
    role: 'Cashier / Manager',
    period: 'Mar 2018 – Jun 2025',
    desc: 'Manager and cashier at family business during vacations and holidays; bank transactions, deliveries.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Work Experience</h2>
      <ul className="experience__list">
        {jobs.map((job, i) => (
          <li key={i} className="experience__item">
            <div className="experience__header">
              <span className="experience__role">{job.role}</span>
              <span className="experience__period">{job.period}</span>
            </div>
            <div className="experience__org">{job.org}</div>
            <div className="experience__location">{job.location}</div>
            {job.desc && <p className="experience__desc">{job.desc}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
