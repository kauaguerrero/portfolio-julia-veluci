export const profile = {
  name: "Julia Veluci Sperandir",
  title: "UGC Creator • Fashion • Beauty • Lifestyle",
  heroText:
    "Produzo conteúdos autênticos e estratégicos para marcas e empresas através de vídeos, fotos e campanhas criativas para redes sociais.",
  aboutText: [
    "Olá! Sou Julia Veluci Sperandir, criadora de conteúdo apaixonada por moda, beleza e lifestyle.",
    "Produzo vídeos UGC, provadores, fotos e conteúdos para Instagram e TikTok, sempre buscando criar materiais autênticos que aproximem marcas do seu público.",
    "Trabalho tanto com empresas da minha região quanto com marcas de qualquer lugar do Brasil e do exterior.",
  ],
  instagram: "@juveluci",
  instagramUrl: "https://instagram.com/juveluci",
  tiktok: "@juveluci",
  tiktokUrl: "https://tiktok.com/@juveluci",
  email: "juliasperandir@gmail.com",
};

export const services = [
  { title: "Vídeos UGC", icon: "video" },
  { title: "Provadores", icon: "hanger" },
  { title: "Fotos Lifestyle", icon: "camera" },
  { title: "Reels", icon: "reel" },
  { title: "TikTok", icon: "tiktok" },
  { title: "Conteúdo para Instagram", icon: "instagram" },
  { title: "Unboxing", icon: "box" },
  { title: "Reviews", icon: "star" },
  { title: "Divulgação de produtos", icon: "megaphone" },
  { title: "Conteúdo para campanhas", icon: "sparkles" },
] as const;

export const audience = [
  "Moda Feminina",
  "Lojas de roupas",
  "Vestidos de festa",
  "Vestidos para casamento",
  "Vestidos para madrinhas",
  "Vestidos para debutantes",
  "Lojas de maquiagem",
  "Cosméticos",
  "Acessórios",
  "Calçados",
  "Pequenos negócios",
  "Empresas locais",
  "Marcas nacionais",
  "Marcas internacionais",
] as const;

export const experiences = [
  "Produção de conteúdo para lojas de moda.",
  "Gravação de vídeos de provador.",
  "Conteúdo para Instagram e TikTok.",
  "Produção de vídeos UGC.",
  "Ensaios utilizando vestidos para casamentos, madrinhas, eventos sociais e debutantes.",
  "Produção de fotos e vídeos para divulgação de produtos.",
] as const;

export const differentials = [
  "Conteúdo autêntico",
  "Comunicação natural",
  "Vídeos modernos",
  "Conteúdo humanizado",
  "Facilidade em frente às câmeras",
  "Produção voltada para redes sociais",
  "Atendimento personalizado",
  "Disponibilidade para campanhas presenciais e remotas",
] as const;

export type PortfolioCategory =
  | "Moda"
  | "Beleza"
  | "Lifestyle"
  | "Vestidos"
  | "Maquiagem"
  | "Fotos espontâneas";

export const portfolioCategories: PortfolioCategory[] = [
  "Moda",
  "Beleza",
  "Lifestyle",
  "Vestidos",
  "Maquiagem",
  "Fotos espontâneas",
];

export interface PortfolioItem {
  id: number;
  category: PortfolioCategory;
  src: string;
  alt: string;
}

// Uma foto por arquivo em /public/img/portfolio — adicione mais arquivos
// placeholder-N.jpeg e aumente `length` conforme novas fotos forem enviadas.
export const portfolioItems: PortfolioItem[] = Array.from({ length: 6 }).map(
  (_, i) => ({
    id: i + 1,
    category: portfolioCategories[i % portfolioCategories.length],
    src: `/img/portfolio/placeholder-${i + 1}.jpeg`,
    alt: `Foto de portfólio ${i + 1} — ${portfolioCategories[i % portfolioCategories.length]}`,
  }),
);

export interface VideoEmbed {
  id: number;
  label: string;
  url: string;
}

export const videoEmbeds: VideoEmbed[] = [
  {
    id: 1,
    label: "Provador",
    url: "https://www.instagram.com/reel/DaVb0_4u0fo/",
  },
  {
    id: 2,
    label: "Conteúdo UGC",
    url: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTEyNDg0MjAzOTI1MTYw?story_media_id=3489068770394047588&igsh=MW81bm04NXRzaWYwdQ%3D%3D",
  },
  {
    id: 3,
    label: "Provador",
    url: "https://www.instagram.com/reel/DagwgjLIsef/",
  },
];
