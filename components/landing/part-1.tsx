import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./navbar";

export default function Part1() {
  return (
    <div className=" bg-gray-700 text-white">
      <div className="relative min-h-[80vh]">
        <Navbar />
        <section className="relative min-h-[80vh] flex items-center z-50 justify-center overflow-hidden">
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
            <p className="text-xs tracking-[0.3em] mb-6 text-gray-300/90 uppercase">
              EXPERIENCIAS INOLVIDABLES
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-6">
              <span className="block text-balance">Donde La Elegancia</span>
              <span className="block italic font-light text-gray-200">
                Cobra Vida
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-300/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Un espacio hecho a tu medida. Diseñado para celebrar esos momentos
              importantes de tu vida
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 py-5 text-sm tracking-wider rounded-full font-medium"
              >
                RESERVAR
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 px-8 py-5 text-sm tracking-wider rounded-full bg-transparent"
              >
                VER GALERIA
              </Button>
            </div>
          </div>
        </section>
        <Image
          src="/dum/bg-hero.webp"
          className="w-full h-full object-cover inset-0 z-0 absolute"
          alt=""
          width={2000}
          height={2000}
        />
        <div className=" absolute inset-0 z-10 bg-gradient-to-t from-black via-black/30 to-black/30"></div>
      </div>
      <div className="h-[140px] bg-black"></div>

      {/* Excellence Section */}
      <section className="bg-black pt-4 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">
                Excelencia en Cada Detalle
              </h2>
              <p className="text-base text-gray-400 max-w-xl leading-relaxed">
                Compromiso con la calidad, el cuidado estético y la atención al
                detalle en cada espacio.
              </p>
            </div>
            <a
              href="#"
              className="text-xs tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              conoce mas
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg group">
              <Image
                src="/dum/1.jpg"
                alt="Modern venue with dramatic lighting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg group">
              <Image
                src="/dum/2.jpg"
                alt="Elegant dining setup"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg group">
              <Image
                src="/dum/3.jpg"
                alt="Luxury floral arrangements"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-black border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-serif mb-4">db</div>
          <p className="text-sm text-gray-500">
            © 2026 Distrito. Todos los derechos reservados.
          </p>
        </div>
      </footer> */}
    </div>
  );
}
