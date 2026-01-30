export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">© {year} Md Sajib Ahammad. All rights reserved.</p>
      </div>
    </footer>
  );
}
