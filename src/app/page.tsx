import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 mb-2 sm:mb-0">
            <a href="https://www.siclo.com/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
            <Image
              src="https://cache.siclo.com/bussines/Logos/logo.svg"
              alt="Siclo Logo"
              width={120}
              height={40}
              priority
            />
            </a>
          </div>
          
          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <a href="https://www.siclo.com/purchases" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Comprar
            </a>
            <a href="https://www.siclo.com/instructors" className="text-sm font-medium text-muted-foreground hover:text-relative">
              Instructores
            </a>
            <a href="https://www.siclo.com/studios" className="text-sm font-medium text-muted-foreground hover:text-relative">
              Estudios
            </a>
            {/* Dropdown Experiencias Síclo */}
            <div className="relative">
              <button
                className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center space-x-1"
              >
                Experiencias Síclo
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown menu (simple) */}
              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg hidden">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Síclo Run
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Síclo Pro
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Certificaciones Barre Sí
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Síclo For Business
                </a>
              </div>
            </div>

            <a href="https://www.landing.siclo.com/historias" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Historias
            </a>
            {/* Dropdown Tienda */}
            <div className="relative">
              <button
                className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center space-x-1"
              >
                Tienda
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg hidden">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  alas
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Suscripción Prime
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Facturación
                </a>
              </div>
            </div>
          </div>

          {/* User icon + Agendar Conversacion button */}
          <div className="flex space-x-3 mt-4 sm:mt-0">
            {/* User icon placeholder */}
            <button className="flex items-center space-x-2 rounded-full border border-gray-300 px-3 py-1 text-sm">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Perfil
            </button>

            {/* Agendar Conversacion button */}
            <Link href="/registro" className="px-4 py-2 border border-transparent text-sm font-medium rounded-full font-bold text-white bg-[#D4142A] hover:bg-[#D4142A]/90 transition-colors">
              Agendar Conversacion
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section (Recruitment Message) */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Tu energía podría ser la próxima voz sobre el podio de Siclo.
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Aseret, queremos invitarte a conocer una oportunidad para formar parte de nuestra comunidad de coaches y transformar cada rodada en una experiencia inolvidable.
        </p>
        <p className="text-base text-muted-foreground mb-8 whitespace-pre-line">
          Hola Aseret,
          Hemos conocido tu perfil y creemos que tu energía, liderazgo y capacidad para conectar con las personas podrían encajar con la experiencia que buscamos crear dentro de nuestros estudios.

          Buscamos más que coaches. En Siclo creemos que las mejores clases no se construyen únicamente con técnica, sino con personas capaces de inspirar, conectar y crear comunidad. Estamos buscando talento con presencia, pasión por el fitness y la capacidad de generar una experiencia que motive a cada rider a superar sus propios límites.
        </p>
        <blockquote className="italic text-xl text-foreground/90 mb-6">
          “No buscamos únicamente instructores. Buscamos personas capaces de inspirar, liderar y construir comunidad.”
        </blockquote>
      </section>

      {/* Disciplines Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Conoce las disciplinas de Síclo
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Bootcamp */}
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="https://www.siclo.com/assets/images/home/brands-bg/bootcamp.png"
                alt="Bootcamp"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
                <h3 className="font-semibold text-white mb-2">Bootcamp</h3>
                <p className="text-sm text-white/90">
                  Combina intervalos de cardio en caminadora y entrenamiento de fuerza con pesas, enfocado en resistencia y en la quema calórica a base de HIIT.
                </p>
              </div>
            </div>
            {/* Rueda */}
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="https://www.siclo.com/assets/images/home/brands-bg/siclo.png"
                alt="Rueda"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
                <h3 className="font-semibold text-white mb-2">Rueda</h3>
                <p className="text-sm text-white/90">
                  Disfruta durante 45 o 60 min del poder de la música mientras ruedas a tu mejor versión en sesiones de indoor cycling.
                </p>
              </div>
            </div>
            {/* Fuerza */}
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="https://www.siclo.com/assets/images/home/brands-bg/fuerza.png"
                alt="Fuerza"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
                <h3 className="font-semibold text-white mb-2">Fuerza</h3>
                <p className="text-sm text-white/90">
                  Un combo de calistenia, peso libre y entrenamiento funcional, donde aumentarás tu nivel de fuerza y tono muscular.
                </p>
              </div>
            </div>
            {/* Barre */}
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="https://www.siclo.com/assets/images/home/brands-bg/barre.png"
                alt="Barre"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
                <h3 className="font-semibold text-white mb-2">Barre</h3>
                <p className="text-sm text-white/90">
                  Una clase de bajo impacto que fusiona pilates, ballet y yoga dónde estilizarás y tonificarás tu cuerpo.
                </p>
              </div>
            </div>
            {/* Kentro */}
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="https://www.siclo.com/assets/images/home/brands-bg/kentro.png"
                alt="Kentro"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
                <h3 className="font-semibold text-white mb-2">Kentro</h3>
                <p className="text-sm text-white/90">
                  Una clase de cardio, flexibilidad y fuerza, que busca tener tu cuerpo activo y mente presente.
                </p>
              </div>
            </div>
            {/* Box */}
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="https://www.siclo.com/assets/images/home/brands-bg/box.png"
                alt="Box"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
                <h3 className="font-semibold text-white mb-2">Box</h3>
                <p className="text-sm text-white/90">
                  Clase inspirada en el boxeo con 10 rounds en los que alternarás entre entrenamiento de boxeo y ejercicios de resistencia.
                </p>
              </div>
            </div>
            {/* Run */}
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="https://www.siclo.com/assets/images/home/brands-bg/run.png"
                alt="Run"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
                <h3 className="font-semibold text-white mb-2">Run</h3>
                <p className="text-sm text-white/90">
                  ¡Corre en comunidad con Síclo Run Crew! No importa cual sea tu meta, tendrás un plan personalizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section (moved to middle) */}
      <section className="relative flex-1 flex flex-col items-center justify-center bg-background">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://cache.siclo.com/video/LoopWeb_comp2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center space-y-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Pasa tu mejor hora del día en los estudios Síclo
          </h1>
          <a href="#" className="inline-flex items-center px-6 py-3 border border-white text-white rounded-md hover:bg-white/20 transition-colors font-medium">
            Ver video
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5l6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Recruitment Perks Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            ¿Por qué unirte a Siclo?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Lidera experiencias */}
            <div className="flex flex-col items-center text-center p-6">
              <span className="text-3xl mb-4">🚴</span>
              <h3 className="font-semibold text-foreground mb-2">Lidera experiencias</h3>
              <p className="text-sm text-muted-foreground text-center">
                Conecta con cientos de riders a través de sesiones llenas de energía, motivación y autenticidad.
              </p>
            </div>
            {/* Música y emoción */}
            <div className="flex flex-col items-center text-center p-6">
              <span className="text-3xl mb-4">🎵</span>
              <h3 className="font-semibold text-foreground mb-2">Música y emoción</h3>
              <p className="text-sm text-muted-foreground text-center">
                Convierte cada playlist en una experiencia capaz de mover a toda una sala.
              </p>
            </div>
            {/* Comunidad Siclo */}
            <div className="flex flex-col items-center text-center p-6">
              <span className="text-3xl mb-4">🌎</span>
              <h3 className="font-semibold text-foreground mb-2">Comunidad Siclo</h3>
              <p className="text-sm text-muted-foreground text-center">
                Forma parte de una de las marcas fitness boutique más reconocidas de Latinoamérica.
              </p>
            </div>
            {/* Desarrollo profesional */}
            <div className="flex flex-col items-center text-center p-6">
              <span className="text-3xl mb-4">📈</span>
              <h3 className="font-semibold text-foreground mb-2">Desarrollo profesional</h3>
              <p className="text-sm text-muted-foreground text-center">
                Accede a entrenamiento, mentoría y oportunidades de crecimiento dentro de la organización.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center bg-[#0b0b0b]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tu próxima rodada podría comenzar aquí.
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Nos encantaría compartirte más detalles sobre esta oportunidad y conocer tu interés en formar parte de Siclo.
          </p>
          <Link href="/registro" className="inline-block px-6 py-3 rounded-full font-bold text-white bg-[#D4142A] hover:bg-[#D4142A]/90 transition-colors">
            Agendar Conversacion
          </Link>
        </div>
      </section>

      {/* Footer (keep original) */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Descarga nuestra app Síclo</h3>
              <div className="flex space-x-4">
                <a href="https://apps.apple.com/mx/app/s%C3%ADclo/id1485622852" className="flex items-center">
                  <img src="https://www.siclo.com/assets/images/home/appstore-button.png" alt="App Store" className="h-8 w-auto" />
                </a>
                <a href="https://apps.apple.com/mx/app/s%C3%ADclo/id1485622852" className="flex items-center">
                  <img src="https://www.siclo.com/assets/images/home/google-play-button.png" alt="Google Play" className="h-8 w-auto" />
                </a>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Síclo, Barre, Fuerza, BALA, Run, Kentro son las disciplinas de la familia síclo.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-3">Estudios</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Reservar</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Comprar clases</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Instructores</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-3">biSí</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Conocer la biSí</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Comprar</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-3">App</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">iOS</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Android</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-3">Experiencias Síclo</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Síclo Run Crew</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Síclo Pro</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Certificaciones Barre Sí</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Síclo For Business</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-3">Tienda</h4>
              <ul className="space-y-2">
                <li><a href="https://shop.siclo.com/mx/suscripcion-siclo-mensual" className="text-sm text-muted-foreground hover:text-foreground">Suscripción</a></li>
                <li><a href="https://shop.siclo.com/mx/alas-negras-con-amarillo" className="text-sm text-muted-foreground hover:text-foreground">Alas</a></li>
                <li><a href="https://shop.siclo.com/mx/mat-para-bisi" className="text-sm text-muted-foreground hover:text-foreground">Props</a></li>
                <li><a href="https://shop.siclo.com/mx/kit-1-bala" className="text-sm text-muted-foreground hover:text-foreground">Kit Bala</a></li>
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfhcWNm37KxIfMD1Y9T4d7icFhqWKFDdQAtuW5J8nwsNT0M6A/viewform" className="text-sm text-muted-foreground hover:text-foreground">Facturación</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-3">FAQ'S</h4>
              <ul className="space-y-2">
                <li><a href="https://www.landing.siclo.com/mx/faq" className="text-sm text-muted-foreground hover:text-foreground">Estudios</a></li>
                <li><a href="https://shop.siclo.com/mx/suscripcion-siclo-mensual" className="text-sm text-muted-foreground hover:text-foreground">Suscripción</a></li>
                <li><a href="https://www.landing.siclo.com/mx/bisi-3" className="text-sm text-muted-foreground hover:text-foreground">biSí</a></li>
                <li><a href="https://apps.apple.com/mx/app/s%C3%ADclo/id1485622852" className="text-sm text-muted-foreground hover:text-foreground">App</a></li>
                <li><a href="https://cache.siclo.com/docs/clients-etic-code.pdf" className="text-sm text-muted-foreground hover:text-foreground">Código de ética</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-b-2">
            <p className="text-center text-sm text-muted-foreground">
              México (MX) © 2025 Síclo
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}