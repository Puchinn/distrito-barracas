import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Play, Star, Instagram } from "lucide-react";

export default function Part2() {
  return (
    <div>
      {/* Video Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Text */}
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] text-gray-200 uppercase">
              SOMOS ESE ESPACIO QUE BUSCAS
            </p>
          </div>

          {/* Video Hero */}
          <div className="relative aspect-[16/7] mb-20 rounded-lg overflow-hidden group cursor-pointer">
            <Image
              src="/dum/1.jpg"
              alt="Somos Distrito Barracas"
              fill
              className="object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Title Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-white tracking-tight">
                  Somos Distrito Barracas
                </h2>
                {/* Play Button */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white hover:bg-white/90 transition-all group-hover:scale-110 shadow-2xl">
                  <Play className="w-8 h-8 text-black ml-1" fill="black" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 text-white md:grid-cols-3 gap-8 md:gap-12 mb-16 text-center">
            <div>
              <div className="text-5xl  md:text-6xl font-serif mb-3">+200</div>
              <p className="text-xs tracking-widest text-gray-400 uppercase">
                EVENTOS CON EXITO
              </p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-serif mb-3">800</div>
              <p className="text-xs tracking-widest text-gray-400 uppercase">
                INVITADOS
              </p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-serif mb-3">10K</div>
              <p className="text-xs tracking-widest text-gray-400 uppercase">
                DE SEGUIDORES
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-24">
            <Button
              size="lg"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/30 hover:border-white/50 px-12 py-6 text-xs tracking-widest rounded-full transition-all"
            >
              LA EXPERIENCIA NOS AVALA
            </Button>
          </div>

          {/* Values Cards */}
          <div className="grid text-white grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-white/20 rounded-3xl p-8 md:p-10 text-center hover:border-white/40 transition-colors bg-black/40">
              <h3 className="text-3xl md:text-4xl font-serif mb-6">
                Excelencia
              </h3>
              <p className="text-xs md:text-sm text-gray-400 tracking-wide mb-8 uppercase leading-relaxed">
                CUIDAMOS CADA DETALLE,
                <br />
                SIEMPRE A DISPOSICION
              </p>
              <div className="flex justify-center">
                <Star
                  className="w-6 h-6 md:w-7 md:h-7 text-white"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <div className="border border-white/20 rounded-3xl p-8 md:p-10 text-center hover:border-white/40 transition-colors bg-black/40">
              <h3 className="text-3xl md:text-4xl font-serif mb-6">
                Profesionalismo
              </h3>
              <p className="text-xs md:text-sm text-gray-400 tracking-wide mb-8 uppercase leading-relaxed">
                CUIDAMOS CADA DETALLE,
                <br />
                SIEMPRE A DISPOSICION
              </p>
              <div className="flex justify-center">
                <Star
                  className="w-6 h-6 md:w-7 md:h-7 text-white"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <div className="border border-white/20 rounded-3xl p-8 md:p-10 text-center hover:border-white/40 transition-colors bg-black/40">
              <h3 className="text-3xl md:text-4xl font-serif mb-6">
                Dedicación
              </h3>
              <p className="text-xs md:text-sm text-gray-400 tracking-wide mb-8 uppercase leading-relaxed">
                CUIDAMOS CADA DETALLE,
                <br />
                SIEMPRE A DISPOSICION
              </p>
              <div className="flex justify-center">
                <Star
                  className="w-6 h-6 md:w-7 md:h-7 text-white"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black rounded-3xl overflow-hidden">
            {/* Left Content */}
            <div className="p-12 lg:p-16">
              <div className="flex items-center gap-2 mb-6">
                <Instagram className="w-6 h-6 md:w-7 md:h-7 text-white" />
                <p className="text-xs tracking-wider text-gray-300 uppercase">
                  NUESTRA COMUNIDAD
                </p>
              </div>

              <h2 className="text-5xl md:text-6xl text-center text-white font-serif mb-6 leading-tight">
                Más de
                <br />
                10.000
                <br />
                Historias en
                <br />
                Instagram
              </h2>

              <p className="text-sm text-gray-400 mb-8 text-center leading-relaxed">
                Inspírate con nuestros eventos y descubre por
                <br />
                qué tantos nos eligen para su gran día.
              </p>

              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 py-5 text-xs tracking-wider rounded-full font-medium inline-flex items-center gap-2"
              >
                Ver Perfil
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px]">
              <Image
                src="/dum/6.jpg"
                alt="Elegant venue with crystal chandeliers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
