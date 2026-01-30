const papers = [
  {
    year: '2025',
    title: 'Undergraduate Program Recommendation for Bangladeshi Students: A Deep Learning Approach',
    venue: '4th ECCE, ICUET, EEE Bangladesh Section',
    publisher: 'IEEE Xplore',
  },
  {
    year: '2025',
    title: 'Multilingual Large Language Models for Low-Resource NLP: A Comparative Study on Tamil News Classification',
    venue: 'ICCCNT 2025',
    note: 'Comparative evaluation of transformer-based multilingual models (mBERT and IndicBERTv2-MLM-only) for Tamil text classification. Co-authored with peers at Daffodil International University.',
  },
  {
    year: '2025',
    title: 'Advancing Bangla NLP: A Systematic Evaluation of Preprocessing Techniques for Improved Text Classification',
    venue: '3rd International Conference on Big Data, IoT and Machine Learning (BIM 2025) at DU, BD',
    authors: 'Md Istiak Tanvir (et al.)',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="publications">
      <h2 className="section-title">Publications</h2>
      <ul className="publications__list">
        {papers.map((p, i) => (
          <li key={i} className="publications__item">
            <span className="publications__year">{p.year}</span>
            <div className="publications__body">
              <h3 className="publications__title">{p.title}</h3>
              <div className="publications__venue">{p.venue}</div>
              {p.publisher && <div className="publications__publisher">{p.publisher}</div>}
              {p.note && <p className="publications__note">{p.note}</p>}
              {p.authors && <div className="publications__authors">{p.authors}</div>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
