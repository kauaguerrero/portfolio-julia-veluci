import { useState } from "react";
import Reveal from "./Reveal";
import Section from "./Section";
import InstagramEmbed from "./InstagramEmbed";
import SocialCards from "./ui/card-fan-carousel";
import {
  portfolioCategories,
  portfolioItems,
  videoEmbeds,
} from "../data/content";

export default function Portfolio() {
  const [active, setActive] = useState<string>("Todos");
  const categories = ["Todos", ...portfolioCategories];

  const filtered =
    active === "Todos"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <Section
      id="portfolio"
      className="bg-white"
      eyebrow="Trabalhos"
      title="Portfólio"
      subtitle="Uma seleção de fotos e vídeos que mostram meu estilo de produção de conteúdo."
    >
      <Reveal>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm transition-colors border ${
                active === cat
                  ? "bg-ink text-white border-ink"
                  : "bg-white text-charcoal border-mist hover:border-blush-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <SocialCards
        key={active}
        cards={filtered.map((item) => ({
          imgUrl: item.src,
          alt: item.alt,
        }))}
      />

      <div className="mt-16">
        <Reveal>
          <h3 className="text-center font-light text-2xl text-ink mb-8">
            Vídeos
          </h3>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {videoEmbeds.map((video, i) => (
            <Reveal key={video.id} delay={i * 0.1}>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-mist/70 bg-cloud">
                <p className="text-center text-xs uppercase tracking-wider text-charcoal/50 pt-4 pb-2">
                  {video.label}
                </p>
                <InstagramEmbed url={video.url} caption={video.label} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
