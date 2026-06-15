function Navbar() {
const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#aboutme", label: "Nosotros" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

  return (
    <>
      <style>{`
        .navbar {
          background: rgba(2, 8, 23, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(56, 189, 248, 0.2);
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          color: #7dd3fc;
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
          transition: all 0.3s ease;
        }

        .logo:hover {
          color: #38bdf8;
          text-shadow: 0 0 15px rgba(56, 189, 248, 0.8);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links li {
          position: relative;
        }

        .nav-links a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
        }

        .nav-links a:hover {
          color: #38bdf8;
          text-shadow: 0 0 8px rgba(56, 189, 248, 0.8);
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #38bdf8, #0ea5e9);
          transition: width 0.3s ease;
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.8);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .navbar-container {
            flex-direction: column;
            gap: 1rem;
          }

          .nav-links {
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
          }

          .logo {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="logo">
            Chocolate Innovation Site
          </a>

          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;