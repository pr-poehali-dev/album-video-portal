import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
}

const mockTrack: Track = {
  id: 1,
  title: "Летний дождь",
  artist: "Ваше имя",
  album: "Золотые мелодии",
  duration: "3:45",
  cover: "/placeholder.svg",
};

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState([45]);
  const [volume, setVolume] = useState([75]);

  return (
    <section className="py-20 bg-gradient-to-b from-vintage-tan to-vintage-sand">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-vintage text-4xl md:text-5xl font-bold text-vintage-sepia mb-4">
            Музыкальный плеер
          </h2>
          <p className="text-xl text-vintage-sepia/70 font-sans max-w-2xl mx-auto">
            Слушайте треки с текстами песен и возможностью караоке
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-vintage-cream/90 backdrop-blur border-vintage-brown/30 border-2 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden border-4 border-vintage-brown/20 shadow-lg">
                    <img
                      src={mockTrack.cover}
                      alt={mockTrack.album}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="lg:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="font-vintage text-3xl font-bold text-vintage-sepia mb-2">
                      {mockTrack.title}
                    </h3>
                    <p className="text-xl text-vintage-sepia/70 font-sans mb-1">
                      {mockTrack.artist}
                    </p>
                    <p className="text-lg text-vintage-sepia/50 font-sans mb-6">
                      {mockTrack.album}
                    </p>

                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-vintage-sepia/70 font-sans mb-2">
                        <span>1:23</span>
                        <span>{mockTrack.duration}</span>
                      </div>
                      <Slider
                        value={currentTime}
                        onValueChange={setCurrentTime}
                        max={225}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-center items-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-vintage-cream"
                      >
                        <Icon name="Shuffle" size={20} />
                      </Button>

                      <Button
                        variant="outline"
                        size="icon"
                        className="border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-vintage-cream"
                      >
                        <Icon name="SkipBack" size={20} />
                      </Button>

                      <Button
                        size="icon"
                        className="w-16 h-16 bg-vintage-brown hover:bg-vintage-sepia text-vintage-cream"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
                      </Button>

                      <Button
                        variant="outline"
                        size="icon"
                        className="border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-vintage-cream"
                      >
                        <Icon name="SkipForward" size={20} />
                      </Button>

                      <Button
                        variant="outline"
                        size="icon"
                        className="border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-vintage-cream"
                      >
                        <Icon name="Repeat" size={20} />
                      </Button>
                    </div>

                    <div className="flex items-center gap-4">
                      <Icon
                        name="Volume2"
                        size={20}
                        className="text-vintage-brown"
                      />
                      <Slider
                        value={volume}
                        onValueChange={setVolume}
                        max={100}
                        step={1}
                        className="flex-1"
                      />
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-vintage-cream"
                        >
                          <Icon name="FileText" size={16} className="mr-2" />
                          Текст
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-vintage-cream"
                        >
                          <Icon name="Mic" size={16} className="mr-2" />
                          Караоке
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
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-vintage-cream/70 border-vintage-brown/20">
              <CardContent className="p-4 text-center">
                <Icon
                  name="Music"
                  size={32}
                  className="text-vintage-brown mx-auto mb-2"
                />
                <h4 className="font-vintage font-bold text-vintage-sepia">
                  Качество Hi-Fi
                </h4>
                <p className="text-sm text-vintage-sepia/70 font-sans">
                  Студийное качество звука
                </p>
              </CardContent>
            </Card>

            <Card className="bg-vintage-cream/70 border-vintage-brown/20">
              <CardContent className="p-4 text-center">
                <Icon
                  name="FileText"
                  size={32}
                  className="text-vintage-brown mx-auto mb-2"
                />
                <h4 className="font-vintage font-bold text-vintage-sepia">
                  Тексты песен
                </h4>
                <p className="text-sm text-vintage-sepia/70 font-sans">
                  Синхронизированные тексты
                </p>
              </CardContent>
            </Card>

            <Card className="bg-vintage-cream/70 border-vintage-brown/20">
              <CardContent className="p-4 text-center">
                <Icon
                  name="Mic"
                  size={32}
                  className="text-vintage-brown mx-auto mb-2"
                />
                <h4 className="font-vintage font-bold text-vintage-sepia">
                  Режим караоке
                </h4>
                <p className="text-sm text-vintage-sepia/70 font-sans">
                  Пойте вместе с клипами
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
