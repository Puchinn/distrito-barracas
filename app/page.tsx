import { Button } from "@/components/ui/button";
import { Instagram, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex min-h-[55vh] flex-col items-center justify-center px-4 pb-8 pt-16">
        <div className="grayscale-100">
          <Image
            src="/logo-eventos.webp"
            className="w-[430px]"
            alt="Logo"
            width={500}
            height={500}
          />
        </div>
        <div className="mx-auto max-w-7xl text-center">
          {/* Main Heading */}
          <h1 className="mb-6 font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl text-balance">
            Nos Estamos Renovando
          </h1>

          {/* Instagram Card  */}

          <div className="mx-auto mb-8 relative max-w-lg rounded-2xl border-2 border-primary bg-card p-8">
            <Instagram className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-3 font-serif text-2xl font-bold text-foreground">
              Visita Nuestro Instagram
            </h2>
            <p className="mb-6 text-muted-foreground">
              Más de 10,000 seguidores nos eligen. Descubre fotos reales de
              nuestros eventos y espacios.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full max-w-max h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              <a
                href="https://www.instagram.com/distritobarracaseventos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @distritobarracaseventos
              </a>
            </Button>
          </div>

          <div className="mx-auto mb-10 max-w-lg">
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              ¿Listo para reservar tu evento?
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-2 bg-transparent"
              >
                <a
                  href="https://wa.me/541135141717"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-2 bg-transparent"
              >
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="mailto:comercial@distritobarracas.com"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Distrito Barracas Eventos. Sitio web en construcción.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            ¿Preguntas? Contáctanos:{" "}
            <a
              href="mailto:comercial@distritobarracas.com"
              className="text-primary hover:underline"
            >
              comercial@distritobarracas.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
