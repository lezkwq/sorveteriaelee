/** Dados fornecidos pelo cliente. Atualizar somente com informações confirmadas. */
export const SITE = {
  name: "Boutique do Açaí",
  city: "Itajaí, SC",
  phone: "(47) 99959 5793",
  instagram: "@boutiquedoacaisc",
  menu: "https://pedir.delivery/boutiquedoacaisc",
  cardapioOnlineStatus: "CONFIRMAR", // Link fornecido retorna loja não encontrada. Confirmar URL ativa.
  horario: "CONFIRMAR", // Falta a grade completa de dias e horários de funcionamento.
  fundacao: "CONFIRMAR", // Falta o ano de fundação.
  url: "CONFIRMAR", // Falta o domínio oficial para canonical e URLs absolutas de compartilhamento.
  fotoSalada: "CONFIRMAR", // Falta uma foto identificada da Salada de Fruta da Boutique.
  mostrarPudim: false, // CONFIRMAR se a Boutique vende os produtos da Fábrica do Pudim antes de ativar.
} as const;
export const PUBLIC_SITE_URL: string | null = String(SITE.url) === "CONFIRMAR" ? null : SITE.url;
export const WHATSAPP_NUMBER = "5547999595793";
export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Boutique do Açaí e quero fazer um pedido. Pode me passar o cardápio de hoje?";
export const whatsapp = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
export const WHATSAPP_URL = whatsapp(WHATSAPP_MESSAGE);
// Cardápio pelo WhatsApp até o cliente confirmar um link online ativo.
export const CARDAPIO_URL = WHATSAPP_URL;
export const WHATSAPP_INFO_URL = whatsapp(
  "Olá! Vim pelo site da Boutique do Açaí. Qual o horário de funcionamento e vocês entregam no meu bairro?",
);
export const INSTAGRAM_URL = "https://instagram.com/boutiquedoacaisc";
export const ADDRESS = {
  street: "Rua Manoel Francisco Coelho, 839",
  district: "São Vicente, Itajaí, SC",
};
export const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(`${ADDRESS.street}, ${ADDRESS.district}`);
export const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Nosso açaí", href: "#o-que-tem" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Onde estamos", href: "#onde-estamos" },
];
// colar aqui avaliações reais do Google, sem alterar
export const REVIEWS = [
  {
    quote: "O melhor da região, açaí de qualidade, atendimento diferenciado. Recomendado!",
    author: "Paloma A., avaliação no Google",
  },
];
export const RATING = { score: "4,7", count: "320 avaliações no Google" };
export const CATEGORIES = [
  {
    name: "Açaí na tigela",
    text: "Açaí com morango, granulado de chocolate e leite condensado.",
    image: "acai-tigela",
  },
  {
    name: "Açaí no copo",
    text: "Camadas de açaí, creme e cobertura em um copo transparente.",
    image: "acai-copo",
  },
  {
    name: "Açaí na casquinha",
    text: "Açaí em casquinha de waffle com morangos e gotas de chocolate.",
    image: "acai-waffle",
  },
  {
    name: "Açaí puro",
    text: "Açaí servido em um pote branco, sem acompanhamentos na foto.",
    image: "acai-puro",
  },
];
