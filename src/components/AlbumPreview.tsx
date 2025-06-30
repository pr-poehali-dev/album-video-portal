import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Album {
  id: number;
  title: string;
  year: string;
  tracks: number;
  cover: string;
  genre: string;
}

const mockAlbums: Album[] = [
  {
    id: 1,
    title: "Золотые мелодии",
    year: "2023",
    tracks: 12,
    cover: "/placeholder.svg",
    genre: "Поп",
  },
  {
    id: 2,
    title: "Ночные грёзы",
    year: "2022",
    tracks: 10,
    cover: "/placeholder.svg",
    genre: "Баллады",
  },
  {
    id: 3,
    title: "Летние ритмы",
    year: "2021",
    tracks: 15,
    cover: "/placeholder.svg",
    genre: "Танцевальный",
  },
];

export default function AlbumPreview() {
  return (
    <section className="py-20 bg-vintage-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-vintage text-4xl md:text-5xl font-bold text-vintage-sepia mb-4">
            Мои альбомы
          </h2>
          <p className="text-xl text-vintage-sepia/70 font-sans max-w-2xl mx-auto">
            Коллекция авторских композиций, записанных с душой и вдохновением
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockAlbums.map((album) => (
            <Card
              key={album.id}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-vintage-sand border-2"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vintage-sepia/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button
                        size="sm"
                        className="w-full bg-vintage-brown/90 hover:bg-vintage-brown text-vintage-cream"
                      >
                        <Icon name="Play" size={16} className="mr-2" />
                        Воспроизвести
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-vintage-brown/90 text-vintage-cream px-3 py-1 rounded-full text-sm font-sans">
                    {album.genre}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-vintage text-2xl font-bold text-vintage-sepia mb-2">
                    {album.title}
                  </h3>
                  <div className="flex justify-between items-center text-vintage-sepia/70 font-sans mb-4">
                    <span>{album.year}</span>
                    <span>{album.tracks} треков</span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-vintage-cream"
                    >
                      <Icon name="Music" size={16} className="mr-2" />
                      Слушать
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-vintage-cream"
                    >
                      <Icon name="Download" size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-vintage-cream font-sans font-semibold px-8"
          >
            Показать все альбомы
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
