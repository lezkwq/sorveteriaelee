import { IMG_ACAI_COPOS } from "@/lib/images";
import { WHATSAPP_URL } from "@/lib/site";

/**
 * Hero editorial.
 *
 * Mobile: a fotografia entra com altura controlada (~40vh) e o bloco tipografico
 * sobe sobre ela com encaixe solido em creme, no espirito de capa de revista.
 * Assim a primeira dobra ja entrega marca, manchete e CTA.
 *
 * Desktop (lg+): mantem a direcao aprovada, com texto a esquerda e foto
 * transbordando o grid a direita.
 */
export function Hero() {
  return (
    <section id="inicio" className="relative border-b-2 border-cacau bg-creme">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        {/* Fotografia protagonista */}
        <div className="relative order-1 lg:order-2 lg:col-span-5">
          <div className="absolute inset-0 bg-rosa" />
          <img
            src={IMG_ACAI_COPOS.src}
            srcSet={IMG_ACAI_COPOS.srcSet}
            sizes="(min-width: 1024px) 45vw, 100vw"
            alt="Dois copos de açaí montados com morango, granola e creme sobre balcão de inox"
            width={960}
            height={1600}
            fetchPriority="high"
            decoding="async"
            className="relative h-[40vh] max-h-[420px] min-h-[240px] w-full object-cover object-center lg:absolute lg:inset-y-0 lg:h-full lg:max-h-none lg:w-[calc(100%+2rem)]"
          />
        </div>

        {/* Bloco tipografico: encaixa sobre a foto no celular */}
        <div className="relative order-2 -mt-10 flex flex-col justify-between border-t-2 border-cacau bg-creme px-5 pt-7 pb-10 md:px-10 lg:order-1 lg:col-span-7 lg:mt-0 lg:border-t-0 lg:pt-20 lg:pb-16">
          <div>
            <p className="eyebrow flex items-center gap-3 text-acai">
              <span className="inline-block h-[2px] w-8 bg-acai" />
              Sorveteria Elee · Brusque, SC
            </p>

            <h1 className="display-xl mt-4 text-cacau lg:mt-6">
              Cremoso,
              <br />
              <span className="text-acai">gelado</span> e difícil
              <br />
              de largar.
            </h1>

            <p className="font-editorial mt-5 max-w-[38ch] text-xl leading-snug text-cacau/80 md:text-2xl lg:mt-8">
              Sorvete artesanal, picolé, açaí e muito mais no Rio Branco, em Brusque.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-14">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow inline-flex h-14 items-center justify-center bg-acai px-9 text-creme transition-colors hover:bg-ameixa"
            >
              Fazer pedido
            </a>
            <a
              href="#o-que-tem"
              className="eyebrow inline-flex h-14 items-center justify-center border-2 border-cacau px-9 text-cacau transition-colors hover:bg-cacau hover:text-creme"
            >
              Ver o que tem
            </a>
          </div>
        </div>
      </div>

      {/* Faixa de repeticao inspirada em impressos antigos */}
      <div className="overflow-hidden border-t-2 border-cacau bg-cacau py-2.5">
        <p className="eyebrow flex justify-center gap-6 whitespace-nowrap text-creme">
          <span>Sorvete</span>
          <span aria-hidden="true">·</span>
          <span>Picolé</span>
          <span aria-hidden="true">·</span>
          <span>Açaí</span>
          <span aria-hidden="true">·</span>
          <span>Milk shake</span>
          <span aria-hidden="true">·</span>
          <span className="hidden sm:inline">Pastel</span>
          <span aria-hidden="true" className="hidden sm:inline">
            ·
          </span>
          <span className="hidden sm:inline">Caldo de cana</span>
        </p>
      </div>
    </section>
  );
}
