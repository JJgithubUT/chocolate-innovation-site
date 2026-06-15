function Footer() {
  const footerStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center",
    marginTop: "50px",
  };

  const titleStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#60a5fa",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    maxWidth: "700px",
    margin: "0 auto",
    color: "#d1d5db",
  };

  const copyStyle = {
    marginTop: "20px",
    fontSize: "0.9rem",
    color: "#9ca3af",
  };

  return (
    <footer style={footerStyle}>
      <h3 style={titleStyle}>Chocolate Innovation Site</h3>

      <p style={textStyle}>
        Desarrollamos soluciones innovadoras para la industria del chocolate,
        integrando tecnología, creatividad y sostenibilidad para transformar
        ideas en proyectos exitosos.
      </p>

      <p style={copyStyle}>
        © {new Date().getFullYear()} Chocolate Innovation Site. Todos los
        derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;