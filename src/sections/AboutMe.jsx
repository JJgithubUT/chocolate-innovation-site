// eslint-disable-next-line no-unused-vars
import React from 'react';

function AboutMe() {
  return (
    <section className="bg-[#000000] text-white py-20 px-6 md:px-12 lg:px-24" id="about">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabecera de la Sección */}
        <div className="text-center mb-16">
          <span className="text-sky-200 font-semibold tracking-widest uppercase text-xs bg-sky-400/10 px-4 py-1.5 rounded-full border border-sky-400/20">
            Nosotros
          </span>
          <h2 className="text-4xl font-black mt-4 mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-400">
              Chocolate Innovation
            </span>
          </h2>
          <p className="text-sky-300 font-medium tracking-wide text-sm md:text-base uppercase">
            Innovación tecnológica para el sector salud
          </p>
        </div>

        {/* Tarjeta de Descripción Principal corporativa */}
        <div className="bg-neutral-900/10 p-8 md:p-10 rounded-2xl border border-neutral-800 shadow-2xl backdrop-blur-sm mb-12 max-w-4xl mx-auto space-y-6">
          <p className="text-gray-400 leading-relaxed text-sm md:text-base text-center">
            Chocolate Innovation es una empresa dedicada al desarrollo de soluciones tecnológicas 
            innovadoras orientadas al sector salud. Nuestro objetivo es optimizar procesos hospitalarios 
            mediante herramientas digitales que mejoren la eficiencia operativa y la calidad de atención 
            a los pacientes.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base text-center">
            Trabajamos aplicando metodologías ágiles como SCRUM y buenas prácticas de gestión de 
            proyectos basadas en PMBOK, permitiendo el desarrollo de sistemas confiables, escalables y 
            adaptados a las necesidades de cada organización.
          </p>
        </div>

        {/* Cuadrícula de Objetivos / Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          
          {/* Misión */}
          <div className="bg-neutral-900/10 p-6 rounded-2xl border border-neutral-800 shadow-xl backdrop-blur-sm hover:border-sky-400/50 hover:-translate-y-2 hover:shadow-sky-400/10 transition-all duration-300 group">
            <div className="text-2xl mb-4">🎯</div>
            <h3 className="text-sky-200 font-bold tracking-wider uppercase text-sm mb-3 group-hover:text-sky-300 transition-colors">
              Misión
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Desarrollar soluciones tecnológicas innovadoras que impulsen la transformación digital del sector salud mediante herramientas eficientes, seguras y accesibles.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-neutral-900/10 p-6 rounded-2xl border border-neutral-800 shadow-xl backdrop-blur-sm hover:border-sky-400/50 hover:-translate-y-2 hover:shadow-sky-400/10 transition-all duration-300 group">
            <div className="text-2xl mb-4">🚀</div>
            <h3 className="text-sky-200 font-bold tracking-wider uppercase text-sm mb-3 group-hover:text-sky-300 transition-colors">
              Visión
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Ser una empresa líder en innovación tecnológica para instituciones de salud, reconocida por la calidad y confiabilidad de sus soluciones.
            </p>
          </div>

          {/* Innovación */}
          <div className="bg-neutral-900/10 p-6 rounded-2xl border border-neutral-800 shadow-xl backdrop-blur-sm hover:border-sky-400/50 hover:-translate-y-2 hover:shadow-sky-400/10 transition-all duration-300 group">
            <div className="text-2xl mb-4">💡</div>
            <h3 className="text-sky-200 font-bold tracking-wider uppercase text-sm mb-3 group-hover:text-sky-300 transition-colors">
              Innovación
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Implementamos tecnologías modernas para optimizar procesos, mejorar la toma de decisiones y facilitar la gestión hospitalaria.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-neutral-900/10 p-6 rounded-2xl border border-neutral-800 shadow-xl backdrop-blur-sm hover:border-sky-400/50 hover:-translate-y-2 hover:shadow-sky-400/10 transition-all duration-300 group">
            <div className="text-2xl mb-4">🤝</div>
            <h3 className="text-sky-200 font-bold tracking-wider uppercase text-sm mb-3 group-hover:text-sky-300 transition-colors">
              Valores
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Compromiso, responsabilidad, trabajo en equipo, calidad e innovación continua para brindar el mejor servicio a nuestros clientes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutMe;