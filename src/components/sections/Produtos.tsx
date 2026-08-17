import tacaSorvete from "@/assets/taca-sorvete.jpg.asset.json";
import bandejaAcai from "@/assets/bandeja-acai.jpg.asset.json";
import { Reveal } from "@/components/Reveal";
import { CATEGORIES, type Category } from "@/lib/site";

/** Fallback defensivo: garante um objeto valido caso o id nao seja encontrado. */
const EMPTY_CATEGORY: Category = { id: "", name: "", text: "" };

function pick(id: string): Category {
  return CATEGORIES.find((c) => c.id === id) ?? EMPTY_CATEGORY;
}

export function Produtos() {
  const acai = pick("acai");
  const sorvetes = pick("sorvetes");
  const picoles = pick("picoles");
  const milkshakes = pick("milk-shakes");
  const pastel = pick("pastel");

  return (
    <section id="o-que-tem" className="border-b-2 border-cacau bg-creme">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="display-lg max-w-[9ch] text-cacau">Tem de tudo um pouco.</h2>
          <p className="font-editorial max-w-[26ch] text-xl text-cacau/75 md:pb-2 md:text-2xl">
            E sempre tem uma boa desculpa para voltar.
          </p>
        </Reveal>

        {/* Composicao assimetrica: cada categoria ocupa um peso diferente */}
        <div className="mt-14 grid grid-cols-1 gap-px border-2 border-cacau bg-cacau md:grid-cols-6">
          {/* Acai: bloco largo em roxo */}
          <Reveal className="bg-acai p-7 md:col-span-4 md:p-12">
            <span className="eyebrow text-creme/60">01</span>
            <h3 className="display-md mt-4 text-creme">{acai.name}</h3>
            <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-creme/85 md:text-lg">
              {acai.text}
            </p>
          </Reveal>

          {/* Picoles: coluna estreita, tratamento tipografico */}
          <Reveal
            delay={80}
            className="flex flex-col justify-between bg-amarelo p-7 md:col-span-2 md:p-10"
          >
            <div>
              <span className="eyebrow text-cacau/50">03</span>
              <h3 className="display-md mt-4 text-cacau">{picoles.name}</h3>
            </div>
            <p className="mt-6 text-base leading-relaxed text-cacau/80">{picoles.text}</p>
          </Reveal>

          {/* Bandeja de acai: montagem real da casa */}
          <Reveal className="relative overflow-hidden bg-rosa md:col-span-3">
            <img
              src={bandejaAcai.url}
              alt="Bandeja de açaí montada com creme, chocolate, morango e confeitos"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.04] md:absolute md:inset-0 md:aspect-auto md:h-full"
            />
          </Reveal>

          <Reveal
            delay={80}
            className="flex flex-col justify-center bg-creme p-7 md:col-span-3 md:p-12"
          >
            <span className="eyebrow text-cacau/50">02</span>
            <h3 className="display-md mt-4 text-cacau">{sorvetes.name}</h3>
            <p className="mt-4 max-w-[32ch] text-base leading-relaxed text-cacau/75 md:text-lg">
              {sorvetes.text}
            </p>
          </Reveal>

          {/* Milk shakes e salgados fecham a composicao */}
          <Reveal className="bg-ciano p-7 md:col-span-2 md:p-10">
            <span className="eyebrow text-cacau/50">04</span>
            <h3 className="display-md mt-4 text-cacau">{milkshakes.name}</h3>
            <p className="mt-4 text-base leading-relaxed text-cacau/80">{milkshakes.text}</p>
          </Reveal>

          <Reveal delay={80} className="relative overflow-hidden bg-cacau md:col-span-2">
            <img
              src={tacaSorvete.url}
              alt="Taça de sorvete com calda de morango, confeitos crocantes e wafer"
              width={1122}
              height={1402}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.04] md:absolute md:inset-0 md:aspect-auto md:h-full"
            />
          </Reveal>

          <Reveal className="flex flex-col justify-between bg-ameixa p-7 md:col-span-2 md:p-12">
            <div>
              <span className="eyebrow text-creme/55">05</span>
              <h3 className="display-md mt-4 max-w-[14ch] text-creme">{pastel.name}</h3>
            </div>
            <p className="mt-6 max-w-[34ch] text-base leading-relaxed text-creme/85 md:text-lg">
              {pastel.text}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
