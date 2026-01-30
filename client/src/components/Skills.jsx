const skillGroups = [
  {
    title: 'Technical',
    items: ['Web Development', 'C', 'Python', 'Java', 'JavaScript', 'Data Entry'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Facebook Marketing', 'Social Media'],
  },
  {
    title: 'Languages',
    items: ['Bengali (Mother tongue)', 'English (B2)', 'Hindi (B2)', 'Arabic (A1)'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__grid">
        {skillGroups.map((group, i) => (
          <div key={i} className="skills__group">
            <h3 className="skills__group-title">{group.title}</h3>
            <ul className="skills__tags">
              {group.items.map((s, j) => (
                <li key={j} className="skills__tag">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
