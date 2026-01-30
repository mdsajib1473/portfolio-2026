const events = [
  { role: 'Protocol Officer (BEVY COMMERCE)', event: 'DIU JOB UTSOB 2024', when: 'Nov 2024', place: 'DIU, Savar' },
  { role: 'Food booth volunteer', event: 'DIU 11th Convocation 2024', when: 'Mar 2024', place: 'DIU, Savar' },
  { role: 'Transport & food booth', event: 'DIU Family Day 2024', when: 'Jan–Feb 2024', place: 'DIU Campus' },
  { role: 'Protocol Officer (ACI Ltd.)', event: 'DIU Job Utsob 2023', when: 'Nov 2023', place: 'DIU', link: 'https://jobutsob.daffodilvarsity.edu.bd/' },
  { role: 'Volunteer', event: 'AvengersCon Dhaka 2024', when: 'Sep 2024' },
  { role: 'Security & crowd management', event: 'Dhaka Pop and Cosplay Event 2024', when: 'Feb 2024', place: 'Mirpur Convention Center' },
  { role: 'Assistant Country Director', event: 'International Youth Summit', when: 'Mar 2023 – Jan 2024', place: 'Mohammadpur, Dhaka', link: 'https://internationalyouthsummit.com/' },
  { role: 'Food packaging team', event: '1 Taka Meal (Biddanondho)', when: 'Mar–Apr 2023', link: 'https://m.facebook.com/1Tk.Meal' },
  { role: 'Official shop & crowd management', event: 'AnimeCon Dhaka 2024', when: 'Jun 2024', place: 'Mirpur, Dhaka' },
  { role: 'Security & crowd management', event: 'AnimeCon Dhaka 2023', when: 'Jun 2023', place: 'Tokyo Convention Center, Mohammadpur', link: 'https://www.facebook.com/animecondhakaofficial/' },
];

export default function Volunteering() {
  return (
    <section id="volunteering" className="volunteering">
      <h2 className="section-title">Volunteering</h2>
      <ul className="volunteering__list">
        {events.map((v, i) => (
          <li key={i} className="volunteering__item">
            <span className="volunteering__role">{v.role}</span>
            <span className="volunteering__event">
              {v.link ? (
                <a href={v.link} target="_blank" rel="noopener noreferrer">
                  {v.event}
                </a>
              ) : (
                v.event
              )}
            </span>
            <span className="volunteering__meta">
              {v.when}
              {v.place && ` · ${v.place}`}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
