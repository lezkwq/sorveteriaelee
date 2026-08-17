/**
 * Dados institucionais reais da Sorveteria Elee.
 * Nenhuma informacao aqui deve ser inventada: preco, sabor, premio ou historia
 * so entram neste arquivo quando forem fornecidos pelo cliente.
 */

export const WHATSAPP_NUMBER = "554791557148" as const;

export const WHATSAPP_MESSAGE =
  "Olá, vim pelo site da Sorveteria Elee e gostaria de fazer um pedido. Pode me ajudar?" as const;

export const WHATSAPP_URL =
  "https://wa.me/554791557148?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Sorveteria%20Elee%20e%20gostaria%20de%20fazer%20um%20pedido.%20Pode%20me%20ajudar%3F" as const;

export const INSTAGRAM_URL = "https://www.instagram.com/sorveteria_elee/" as const;

export const ADDRESS = {
  street: "R. Ernesto Bianchini, 254",
  district: "Rio Branco, Brusque, SC",
} as const;

export const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("R. Ernesto Bianchini, 254, Rio Branco, Brusque, SC");

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "O que tem", href: "#o-que-tem" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Onde estamos", href: "#onde-estamos" },
] as const;

export interface Category {
  readonly id: string;
  readonly name: string;
  readonly text: string;
}

export const CATEGORIES: readonly Category[] = [
  {
    id: "acai",
    name: "Açaí",
    text: "Cremoso, bem servido e pronto para montar do seu jeito.",
  },
  {
    id: "sorvetes",
    name: "Sorvetes",
    text: "Dos clássicos aos sabores que fazem você mudar de ideia na hora de escolher.",
  },
  {
    id: "picoles",
    name: "Picolés",
    text: "Produção artesanal e mais de 50 sabores para escolher.",
  },
  {
    id: "milk-shakes",
    name: "Milk shakes",
    text: "Gelados, cremosos e sem economia no sabor.",
  },
  {
    id: "pastel",
    name: "Pastel e caldo de cana",
    text: "Para quando a vontade não para no sorvete.",
  },
] as const;

export interface Review {
  readonly quote: string;
  readonly author: string;
}

export const REVIEWS: readonly Review[] = [
  {
    quote: "Sorvete muito gostoso, bem cremoso, de qualidade e sabores incríveis.",
    author: "Angela Pereira",
  },
  { quote: "Ambiente agradável. Ótimo atendimento.", author: "Milene Cristina" },
  {
    quote: "Melhor atendimento da região, sorvete muito bom.",
    author: "Cleiton Santos",
  },
] as const;

export const RATING = { score: "4,9", count: "120 avaliações no Google" } as const;
