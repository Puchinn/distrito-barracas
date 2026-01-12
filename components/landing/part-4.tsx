import Image from "next/image";
import { Button } from "../ui/button";

export default function Part4() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/distrit-final-4.jpg"
            alt="Gastronomía Exclusiva"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 text-white">
            Gastronomía Exclusiva
          </h2>
          <Button
            size="lg"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/40 hover:border-white/60 px-10 py-6 text-xs tracking-widest rounded-full font-bold uppercase"
          >
            CONOCE MAS
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-400 mb-4">
              Reservá Tu Evento
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Completa el formulario y nos pondremos en contacto contigo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-3">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-3">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-3">
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="+52 123 456 7890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 text-gray-900 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-3">
                  Mensaje
                </label>
                <textarea
                  placeholder="Cuéntanos sobre tu evento..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 text-gray-900 placeholder:text-gray-400 resize-none"
                />
              </div>

              <Button className="w-full bg-black hover:bg-gray-800 text-white py-6 text-xs tracking-widest uppercase font-bold rounded-lg">
                ENVIAR CONSULTA
              </Button>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-4">
                  Dirección
                </h3>
                <p className="text-base text-gray-900 leading-relaxed">
                  Av. Principal 123, Colonia Centro, Ciudad
                </p>
              </div>

              <div>
                <h3 className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-4">
                  Contacto
                </h3>
                <p className="text-base text-gray-900 mb-2">
                  +52 (123) 456-7890
                </p>
                <p className="text-base text-gray-900">info@saloneventos.com</p>
              </div>

              <div>
                <h3 className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-4">
                  Horario
                </h3>
                <p className="text-base text-gray-900">Lunes - Sábado</p>
                <p className="text-base text-gray-900">9:00 AM - 7:00 PM</p>
              </div>

              {/* Map Placeholder */}
              <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-300">
                <Image
                  src="/map-location-venue-distrito-barracas.jpg"
                  alt="Mapa de ubicación"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            ¿Prefieres hablar directamente con nosotros?
          </h2>
          <p className="text-base text-gray-400 mb-10 leading-relaxed">
            Nuestro equipo de expertos está listo para ayudarte a planificar el
            evento perfecto.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-10 py-6 text-sm tracking-wider rounded-full font-medium"
            >
              Llamar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 px-10 py-6 text-sm tracking-wider rounded-full bg-transparent"
            >
              Agendar Visita al Salón
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
