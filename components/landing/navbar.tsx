import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="py-3 relative z-50">
      <div className="bg-white/30 backdrop-blur-xs  text-white max-w-7xl mx-auto py-1 rounded-full px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex grayscale-100 items-center">
            <Image
              src="/logo-bn.webp"
              className="w-16 h-w-16"
              alt="Logo"
              width={200}
              height={200}
            />
          </div>

          {/* Menu */}
          <div className="flex items-center font-medium gap-10">
            <a
              href="#inicio"
              className="text-sm tracking-widest hover:text-purple-300 transition-colors"
            >
              INICIO
            </a>
            <a
              href="#servicios"
              className="text-sm tracking-widest hover:text-purple-300 transition-colors"
            >
              SERVICIOS
            </a>
            <a
              href="#eventos"
              className="text-sm tracking-widest hover:text-purple-300 transition-colors"
            >
              EVENTOS
            </a>
            <a
              href="#galeria"
              className="text-sm tracking-widest hover:text-purple-300 transition-colors"
            >
              GALERIA
            </a>
            <a
              href="#CONTACTO"
              className="text-sm tracking-widest hover:text-purple-300 transition-colors"
            >
              CONTACTANOS
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
