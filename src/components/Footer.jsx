function Footer() {
  const footerStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "50px 20px",
    textAlign: "center",
    marginTop: "50px",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#60a5fa",
    marginBottom: "10px",
  };

  const sloganStyle = {
    color: "#93c5fd",
    fontSize: "1rem",
    marginBottom: "20px",
  };

  const textStyle = {
    fontSize: "1rem",
    lineHeight: "1.8",
    maxWidth: "800px",
    margin: "0 auto",
    color: "#d1d5db",
  };

  const infoStyle = {
    marginTop: "25px",
    color: "#9ca3af",
    lineHeight: "1.8",
  };

  const copyStyle = {
    marginTop: "30px",
    fontSize: "0.9rem",
    color: "#6b7280",
  };

  return (
    <footer style={footerStyle}>
      <h3 style={titleStyle}>Chocolate Innovation</h3>

      <p style={sloganStyle}>
        Tecnología · Salud · Innovación
      </p>

      <p style={textStyle}>
        Desarrollamos software hospitalario que conecta áreas, optimiza
        procesos y pone la información correcta frente a quien la necesita.
        Impulsamos la transformación digital del sector salud mediante
        soluciones seguras, escalables e innovadoras.
      </p>

      <div style={infoStyle}>
        <p>🏥 Hospitales, Clínicas y Centros Médicos</p>
        <p>📧 chocolateinnovation@gmail.com</p>
        <p>📞 +52 (247) 101 22 28</p>
        <p>📍 Huamantla, Tlaxcala, México</p>
        <p>🚀 SCRUM | PMBOK | Innovación Tecnológica</p>
      </div>

      <p style={copyStyle}>
        © {new Date().getFullYear()} Chocolate Innovation. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;