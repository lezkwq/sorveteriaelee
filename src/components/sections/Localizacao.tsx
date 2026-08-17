import fachada from "@/assets/fachada.jpg.asset.json";
import { Reveal } from "@/components/Reveal";
import { ADDRESS, MAPS_URL } from "@/lib/site";

export function Localizacao() {
  return (
    <section id="onde-estamos" className="border-b-2 border-cacau bg-creme">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col justify-center gap-9 px-5 py-14 md:px-10 md:py-20 lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-6 text-rosa">Onde estamos</p>
            <h2 className="display-lg text-cacau">É aqui.</h2>
          </Reveal>

          <Reveal delay={100}>
            <address className="not-italic">
              <p className="font-display text-2xl leading-tight text-cacau uppercase md:text-3xl">
                {ADDRESS.street}
              </p>
              <p className="mt-2 text-lg text-cacau/70">{ADDRESS.district}</p>
            </address>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow mt-8 inline-flex h-14 items-center justify-center bg-cacau px-9 text-creme transition-colors hover:bg-acai"
            >
              Traçar rota
            </a>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7">
          <img
            src={fachada.url}
            alt="Fachada da Sorveteria Elee na R. Ernesto Bianchini, 254, em Brusque"
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
