import acaiDuplo from "@/assets/acai-duplo.jpg.asset.json";
import { Reveal } from "@/components/Reveal";

export function Editorial() {
  return (
    <section className="border-b-2 border-cacau bg-rosa">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <img
            src={acaiDuplo.url}
            alt="Dois copos de açaí com morango, banana e creme, com potes de cobertura ao fundo"
            width={1110}
            height={1417}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover object-center lg:aspect-[4/4.4]"
          />
        </Reveal>

        <div className="flex flex-col justify-center gap-8 px-5 py-14 md:px-10 md:py-20 lg:col-span-5">
          <Reveal>
            <h2 className="display-lg text-creme">
              Para sentar.
              <br />
              Para levar.
              <br />
              Para repetir.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <span className="mb-6 block h-[2px] w-16 bg-creme" />
            <p className="max-w-[36ch] text-lg leading-relaxed text-creme md:text-xl">
              Tem sorvete, picolé, açaí, milk shake, pastel frito na hora e caldo de cana. Escolha o
              seu e fique à vontade.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
