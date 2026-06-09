// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    interest: 'HIS',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead Corporativo Recibido:', formData);
    alert('¡Solicitud recibida! Nuestro Product Owner o Project Manager se pondrá en contacto con su organización.');
  };

  return (
    <section className="bg-[#000000] text-white py-20 px-6 md:px-12 lg:px-24" id="contacto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Columna Izquierda: Información Estratégica */}
        <div className="lg:col-span-5">
          <span className="text-sky-200 font-semibold tracking-widest uppercase text-xs bg-sky-400/10 px-4 py-1.5 rounded-full border border-sky-400/20">
            Contacto 
          </span>
          <h2 className="text-4xl font-black mt-4 mb-6 tracking-tight">
            ¿Listo para iniciar su <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-400">
              transformación?
            </span>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
            "Impulse la eficiencia de su clínica, hospital o empresa con herramientas digitales de última generación. Conecte con nuestros desarrolladores y dé el primer paso hacia una infraestructura tecnológica impecable."
          </p>

          {/* Información de Chocolate Innovation */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-neutral-900/40 border border-neutral-800 rounded-xl text-sky-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-sky-200 font-bold uppercase tracking-wider">Público Objetivo</p>
                <p className="text-sm text-gray-300 mt-1 font-medium">Hospitales, Clínicas y Centros Médicos</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-neutral-900/40 border border-neutral-800 rounded-xl text-sky-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-sky-200 font-bold uppercase tracking-wider">Correo Electrónico</p>
                <p className="text-sm text-gray-300 mt-1 font-medium">chocolateinnovation@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-neutral-900/40 border border-neutral-800 rounded-xl text-sky-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72.55.55 0 00.1.24l1.5 3.5a1 1 0 01-.25 1.1l-1.24.91a15.13 15.13 0 005.25 5.25l.91-1.24a1 1 0 011.1-.25l3.5 1.5c.1.05.17.14.24.24a1 1 0 01.72.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-sky-200 font-bold uppercase tracking-wider">Teléfono</p>
                <p className="text-sm text-gray-300 mt-1 font-medium">+52 (247) 110-20-36</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-neutral-900/40 border border-neutral-800 rounded-xl text-sky-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-sky-200 font-bold uppercase tracking-wider">Centro de Operaciones</p>
                <p className="text-sm text-gray-300 mt-1 font-medium">Huamantla, Tlaxcala, México</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="lg:col-span-7 w-full bg-neutral-900/10 p-8 rounded-2xl border border-neutral-800 shadow-2xl backdrop-blur-sm relative overflow-hidden">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Nombre Representante
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-400 transition-colors text-sm"
                  placeholder="Ej. Dr. Alejandro Ramos"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Organización / Institución
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-400 transition-colors text-sm"
                  placeholder="Ej. Clínica Médica Central"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-400 transition-colors text-sm"
                placeholder="contacto@organizacion.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Solución de Interés
              </label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-400 transition-colors text-sm appearance-none"
              >
                <option value="HIS">Sistema de Información Hospitalaria (HIS)</option>
                <option value="Custom">Desarrollo de Software a la Medida (Empresarial)</option>
                <option value="Consulting">Consultoría en Transformación Digital</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                Descripción de Requerimientos Iniciales
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-sky-400 transition-colors resize-none text-sm leading-relaxed"
                placeholder="Describa brevemente las necesidades tecnológicas o módulos requeridos para su sistema..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-200 to-sky-400 hover:opacity-90 text-neutral-950 font-bold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-sky-400/10 text-sm tracking-wider uppercase"
            >
              Solicitar Evaluación Técnica
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
