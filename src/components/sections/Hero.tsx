import acaiCopos from "@/assets/acai-copos.jpg.asset.json";
import { WHATSAPP_URL } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="relative border-b-2 border-cacau bg-creme">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        {/* Bloco tipografico */}
        <div className="order-2 flex flex-col justify-between px-5 pt-10 pb-12 md:px-10 lg:order-1 lg:col-span-7 lg:pt-20 lg:pb-16">
          <div>
            <p className="eyebrow flex items-center gap-3 text-acai">
              <span className="inline-block h-[2px] w-8 bg-acai" />
              Sorveteria Elee · Brusque, SC
            </p>

            <h1 className="display-xl mt-6 text-cacau">
              Cremoso,
              <br />
              <span className="text-acai">gelado</span> e difícil
              <br />
              de largar.
            </h1>

            <p className="font-editorial mt-8 max-w-[38ch] text-xl leading-snug text-cacau/80 md:text-2xl">
              Sorvete artesanal, picolé, açaí e muito mais no Rio Branco, em Brusque.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-14">
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

        {/* Fotografia protagonista, transbordando o grid */}
        <div className="relative order-1 lg:order-2 lg:col-span-5">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-rosa lg:inset-0 lg:h-auto" />
          <img
            src={acaiCopos.url}
            alt="Dois copos de açaí montados com morango, granola e creme sobre balcão de inox"
            width={960}
            height={1600}
            fetchPriority="high"
            decoding="async"
            className="relative aspect-[4/5] w-full object-cover object-center lg:absolute lg:inset-y-0 lg:aspect-auto lg:h-full lg:w-[calc(100%+2rem)]"
          />
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
