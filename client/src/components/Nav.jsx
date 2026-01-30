import { useState, useEffect } from 'react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'publications', label: 'Publications' },
  { id: 'volunteering', label: 'Volunteering' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo" onClick={handleClick}>
          SA
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={handleClick} className="nav__link">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
