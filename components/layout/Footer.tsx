export default function Footer() {
  return (
    <footer className="border-t border-line px-6 md:px-10 py-10 mt-24">
      <div className="flex flex-col md:flex-row justify-between gap-6 text-sm text-muted">
        <p className="font-display text-ink text-lg">Ashan Perera</p>
        <div className="flex gap-6">
          <a href="https://instagram.com" className="hover:text-ink transition-colors">
            Instagram
          </a>
          <a href="mailto:hello@ashanperera.com" className="hover:text-ink transition-colors">
            hello@ashanperera.com
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} — Colombo, Sri Lanka</p>
      </div>
    </footer>
  );
}
