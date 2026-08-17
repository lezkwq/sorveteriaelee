import { createFileRoute } from "@tanstack/react-router";

import { IMG_ACAI_COPOS } from "@/lib/images";

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

const TITLE = "Sorveteria Elee";
const DESCRIPTION =
  "Sorvetes e picolés artesanais, açaí, milk shake, pastel e caldo de cana no Rio Branco, em Brusque. Conheça a Sorveteria Elee.";
const SITE_URL = "https://sorveteriaelee.lovable.app";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      // LCP: a foto do hero e o unico recurso de imagem com prioridade.
      {
        rel: "preload",
        as: "image",
        href: IMG_ACAI_COPOS.src,
        imageSrcSet: IMG_ACAI_COPOS.srcSet,
        imageSizes: "(min-width: 1024px) 45vw, 100vw",
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "IceCreamShop",
          name: "Sorveteria Elee",
          description: DESCRIPTION,
          url: SITE_URL,
          telephone: "+554791557148",
          address: {
            "@type": "PostalAddress",
            streetAddress: "R. Ernesto Bianchini, 254",
            addressLocality: "Brusque",
            addressRegion: "SC",
            addressCountry: "BR",
          },
          sameAs: ["https://www.instagram.com/sorveteria_elee/"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "120",
          },
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
