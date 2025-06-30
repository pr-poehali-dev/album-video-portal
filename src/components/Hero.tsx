import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-vintage-cream to-vintage-tan flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-vintage-brown animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-vintage-copper animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-vintage-sepia animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-vintage-brown/20 flex items-center justify-center border-4 border-vintage-brown/30">
            <Icon name="Music" size={64} className="text-vintage-brown" />
          </div>
        </div>

        <h1 className="font-vintage text-5xl md:text-7xl font-bold text-vintage-sepia mb-6">
          Музыкальная
          <br />
          <span className="text-vintage-brown">Коллекция</span>
        </h1>

        <p className="text-xl md:text-2xl text-vintage-sepia/80 mb-8 max-w-2xl mx-auto font-sans">
          Авторские альбомы, видеоклипы и караоке с субтитрами. Погрузитесь в
          атмосферу винтажного звучания.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-vintage-brown hover:bg-vintage-sepia text-vintage-cream font-sans font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Слушать музыку
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-vintage-cream font-sans font-semibold px-8 py-4 text-lg transition-all duration-300"
          >
            <Icon name="Video" size={20} className="mr-2" />
            Смотреть клипы
          </Button>
        </div>

        <div className="mt-12 flex justify-center space-x-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-vintage-brown font-vintage">
              12
            </div>
            <div className="text-vintage-sepia/70 font-sans">Альбомов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-vintage-brown font-vintage">
              48
            </div>
            <div className="text-vintage-sepia/70 font-sans">Треков</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-vintage-brown font-vintage">
              24
            </div>
            <div className="text-vintage-sepia/70 font-sans">Видео</div>
          </div>
        </div>
      </div>
    </section>
  );
}
