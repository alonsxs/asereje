'use client';

import { useState } from 'react';

export default function RegistroPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '0a338304-1e2c-4164-9caf-23a6429f9bd5',
          nombre: formData.nombre,
          correo: formData.correo,
          telefono: formData.telefono
        })
      });

      if (!response.ok) {
        // If Web3Forms returns non-2xx, treat as error
        throw new Error(`Error ${response.status}`);
      }

      // Optionally parse response if needed
      // const result = await response.json();

      // Show success message and reset form
      setShowSuccess(true);
      setFormData({
        nombre: '',
        correo: '',
        telefono: ''
      });
    } catch (err: any) {
      console.error('Form submission error:', err);
      setSubmitError('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0b0b] flex flex-col items-center justify-center p-6">
      {showSuccess ? (
        <div className="text-center text-white space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="text-2xl font-bold">¡Registro exitoso!</h2>
          </div>
          <p className="text-lg text-gray-300">
            Tu información ha sido enviada. Nos pondremos en contacto pronto.
          </p>
          <a href="/" className="inline-block px-6 py-3 rounded-full font-bold text-white bg-[#D4142A] hover:bg-[#D4142A]/90 transition-colors">
            Volver al inicio
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">Únete a la familia Siclo</h1>
            <p className="text-lg text-gray-300 mt-2">
              Completa tus datos para comenzar tu jornada como coach en nuestra comunidad
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4142A] focus:border-transparent"
                placeholder="Ingresa tu nombre completo"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="correo" className="block text-sm font-medium text-gray-300 mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4142A] focus:border-transparent"
                placeholder="Ingresa tu email"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                Contraseña
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4142A] focus:border-transparent"
                placeholder="Ingresa tu contraseña"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 rounded-full font-bold text-white bg-[#D4142A] hover:bg-[#D4142A]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Guardando...' : 'Crear Cuenta'}
          </button>

          {submitError && (
            <p className="text-center text-sm text-red-500 mt-2">
              {submitError}
            </p>
          )}

          <p className="text-center text-sm text-gray-400">
            Al registrarte, aceptas nuestros términos y condiciones
          </p>
        </form>
      )}
    </main>
  );
}