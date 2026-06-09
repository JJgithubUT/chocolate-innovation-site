// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';

function Home() {
  const canvasRef = useRef(null);

  // Animated ECG/pulse line — referencia al sector salud
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const W = canvas.width = canvas.offsetWidth;
    const H = canvas.height = canvas.offsetHeight;

    // ECG pulse path (normalized 0-1)
    const ecgShape = [
      0, 0, 0, 0, 0, 0.02, 0, -0.05, 0, 0,
      0.02, 0.9, -0.6, 0.15, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];

    let offset = 0;
    let animId;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      const gradient = ctx.createLinearGradient(0, 0, W, 0);
      gradient.addColorStop(0, 'rgba(186,230,253,0)');
      gradient.addColorStop(0.3, 'rgba(56,189,248,0.7)');
      gradient.addColorStop(0.7, 'rgba(56,189,248,0.7)');
      gradient.addColorStop(1, 'rgba(186,230,253,0)');

      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = 'rgba(56,189,248,0.8)';
      ctx.shadowBlur = 8;

      const total = ecgShape.length;
      // eslint-disable-next-line no-unused-vars
      const segW = W / (total - 1);
      const midY = H / 2;
      const amp = H * 0.35;

      for (let i = 0; i < W; i++) {
        const xNorm = (i / W + offset) % 1;
        const idx = Math.floor(xNorm * (total - 1));
        const t = xNorm * (total - 1) - idx;
        const v0 = ecgShape[idx] ?? 0;
        const v1 = ecgShape[(idx + 1) % total] ?? 0;
        const y = midY - (v0 + (v1 - v0) * t) * amp;

        if (i === 0) ctx.moveTo(i, y);
        else ctx.lineTo(i, y);
      }

      ctx.stroke();
      offset = (offset + 0.003) % 1;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Fondo radial sutil */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(14,36,64,0.55) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Grid decorativo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Canvas ECG */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          bottom: '18%',
          left: 0,
          width: '100%',
          height: '80px',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      {/* Contenido principal */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '860px',
        width: '100%',
      }}>

        {/* Badge */}
        <div style={{
          display: 'inline-block',
          background: 'rgba(56,189,248,0.08)',
          border: '1px solid rgba(56,189,248,0.2)',
          borderRadius: '999px',
          padding: '6px 20px',
          marginBottom: '32px',
        }}>
          <span style={{
            fontSize: '0.7rem',
            fontFamily: 'monospace',
            color: '#bae6fd',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 700,
          }}>
            Tecnología · Salud · Innovación
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.6rem, 7vw, 5.2rem)',
          fontWeight: 900,
          lineHeight: 1.08,
          color: '#ffffff',
          letterSpacing: '-0.02em',
          marginBottom: '24px',
        }}>
          El sistema nervioso
          <br />
          <span style={{
            background: 'linear-gradient(90deg, #bae6fd 0%, #38bdf8 60%, #0ea5e9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            digital de tu hospital.
          </span>
        </h1>

        {/* Subtítulo */}
        <p style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
          color: '#94a3b8',
          lineHeight: 1.75,
          maxWidth: '560px',
          margin: '0 auto 44px',
          fontWeight: 400,
        }}>
          Desarrollamos software hospitalario que conecta áreas, optimiza flujos
          y pone la información correcta frente a quien la necesita.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="#contact" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #bae6fd 0%, #38bdf8 100%)',
            color: '#0a0a0a',
            fontWeight: 800,
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '15px 36px',
            borderRadius: '12px',
            textDecoration: 'none',
            boxShadow: '0 0 28px rgba(56,189,248,0.25)',
            transition: 'opacity 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Solicitar evaluación
          </a>

          <a href="#about" style={{
            display: 'inline-block',
            background: 'transparent',
            color: '#bae6fd',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '14px 36px',
            borderRadius: '12px',
            textDecoration: 'none',
            border: '1px solid rgba(56,189,248,0.3)',
            transition: 'border-color 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.7)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Conocer más
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(24px, 6vw, 64px)',
          marginTop: '68px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(56,189,248,0.1)',
          flexWrap: 'wrap',
        }}>
          {[
            { value: '3', label: 'Soluciones activas' },
            { value: 'SCRUM', label: 'Metodología ágil' },
            { value: 'PMBOK', label: 'Gestión de proyectos' },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                fontWeight: 900,
                color: '#38bdf8',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}>
                {value}
              </div>
              <div style={{
                fontSize: '0.7rem',
                color: '#64748b',
                marginTop: '6px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 600,
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0.35,
      }}>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, transparent, #38bdf8)',
          animation: 'pulse 2s infinite',
        }} />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
      `}</style>
    </section>
  );
}

export default Home;