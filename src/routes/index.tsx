import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsappFab } from "@/components/WhatsappFab";
import { Hero } from "@/components/sections/Hero";
import { Produtos } from "@/components/sections/Produtos";
import { Editorial } from "@/components/sections/Editorial";
import { Sobre } from "@/components/sections/Sobre";
import { Avaliacoes } from "@/components/sections/Avaliacoes";
import { Localizacao } from "@/components/sections/Localizacao";
import { CtaFinal } from "@/components/sections/CtaFinal";

import { Pudim } from "@/components/sections/Pudim";
import { SITE, ADDRESS, INSTAGRAM_URL, PUBLIC_SITE_URL } from "@/lib/site";
const DESCRIPTION =
  "Boutique do Açaí no São Vicente, em Itajaí. Açaí na tigela, no copo e na casquinha. Consulte o cardápio e faça seu pedido.";
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Boutique do Açaí | Itajaí, SC" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: SITE.name },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: `${PUBLIC_SITE_URL ?? ""}/images/acai-principal.webp` },
      ...(PUBLIC_SITE_URL ? [{ property: "og:url", content: PUBLIC_SITE_URL }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${PUBLIC_SITE_URL ?? ""}/images/acai-principal.webp` },
      { name: "twitter:title", content: SITE.name },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: PUBLIC_SITE_URL ? [{ rel: "canonical", href: PUBLIC_SITE_URL }] : [],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FoodEstablishment",
          name: SITE.name,
          description: DESCRIPTION,
          telephone: "+5547999595793",
          priceRange: "R$ 20 a R$ 40 por pessoa",
          address: {
            "@type": "PostalAddress",
            streetAddress: ADDRESS.street,
            addressLocality: "Itajaí",
            addressRegion: "SC",
            addressCountry: "BR",
          },
          sameAs: [INSTAGRAM_URL],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "320" },
        }),
      },
    ],
  }),
});
function Index() {
  return (
    <div className="min-h-screen bg-creme">
      <SiteHeader />
      <main>
        <Hero />
        <Produtos />
        <Editorial />
        <Pudim />
        <Sobre />
        <Avaliacoes />
        <Localizacao />
        <CtaFinal />
      </main>
      <SiteFooter />
      <WhatsappFab />
    </div>
  );
}
