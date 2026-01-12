import Image from "next/image";
import InfiniteCarousel from "./components/infinite-carousel";

export default function Part3() {
  return (
    <div>
      {/* Premium Services Section */}
      <section className="bg-white py-20 px-6">
        <div className=" mx-auto">
          {/* Header */}
          <div className="text-center mx-auto max-w-7xl mb-6">
            <div className="inline-block px-6 py-2 bg-gray-200 rounded-full mb-8">
              <span className="text-xs tracking-widest text-gray-600 uppercase">
                SERVICIOS PREMIUM
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-black">
              Experiencias Inolvidables
            </h2>
            <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Compromiso con la calidad, el cuidado estético y la atención al
              detalle en cada espacio.
            </p>
          </div>

          {/* Horizontal Gallery */}
          <div className="w-full">
            <InfiniteCarousel />
          </div>

          {/* Spaces Section */}
          <div className="border-t max-w-7xl mx-auto border-gray-300 pt-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <h3 className="text-4xl md:text-5xl font-serif mb-4 text-black">
                  Conoce Nuestros Espacios
                </h3>
                <p className="text-base text-gray-700 max-w-xl leading-relaxed">
                  Compromiso con la calidad, el cuidado estético y la atención
                  al detalle en cada espacio.
                </p>
              </div>
              <span className="text-sm font-bold tracking-wider text-black uppercase">
                CONOCE MAS
              </span>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Espacios Interiores */}
              <div className="bg-gray-100 rounded-2xl p-8 md:p-10">
                <h4 className="text-xl font-light text-gray-500 mb-8">
                  Espacios Interiores
                </h4>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 text-gray-700">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 12h18M3 6h18M3 18h18"
                      />
                    </svg>
                    <span className="text-base">Predio de 7.000 m2</span>
                  </li>
                  <li className="flex items-center gap-4 text-gray-700">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span className="text-base">Hall de Recepción</span>
                  </li>
                  <li className="flex items-center gap-4 text-gray-700">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>
                    <span className="text-base">Gran Salón Principal</span>
                  </li>
                  <li className="flex items-center gap-4 text-gray-700">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    <span className="text-base">Espacio para ceremonias</span>
                  </li>
                  <li className="flex items-center gap-4 text-gray-700">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="text-base">Suite de lujo</span>
                  </li>
                  <li className="flex items-center gap-4 text-gray-700">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                    <span className="text-base">Camarín para shows</span>
                  </li>
                </ul>
              </div>

              {/* Amenities y Exteriores */}
              <div className="bg-gray-100 rounded-2xl p-8 md:p-10">
                <h4 className="text-xl font-light text-gray-500 mb-8">
                  Amenities y Exteriores
                </h4>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 text-gray-700">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-base">Galería Semi Cubierta</span>
                  </li>
                  <li className="flex items-center gap-4 text-gray-700">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    <span className="text-base">Espacio Verde</span>
                  </li>
                  <li className="flex items-center gap-4 text-gray-700">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="text-base">Terraza exclusiva</span>
                  </li>
                  <li className="flex items-center gap-4 text-gray-700">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    <span className="text-base">Parking exclusivo</span>
                  </li>
                  <li className="flex items-center gap-4 text-gray-700">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m-8 4V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    <span className="text-base">Cava Propia</span>
                  </li>
                  <li className="flex items-center gap-4 text-gray-700">
                    <svg
                      className="w-5 h-5 text-gray-400 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m-8 4V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    <span className="text-base">Horno de Barro y Parrilla</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
