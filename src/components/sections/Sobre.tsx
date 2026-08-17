import picolesFachada from "@/assets/picoles-fachada.jpg.asset.json";
import { Reveal } from "@/components/Reveal";

export function Sobre() {
  return (
    <section id="sobre" className="border-b-2 border-cacau bg-acai">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">
        <div className="flex flex-col justify-center gap-9 px-5 py-16 md:px-10 md:py-24 lg:col-span-6">
          <Reveal>
            <p className="eyebrow mb-7 text-creme/55">Sobre a Elee</p>
            <h2 className="display-lg text-creme">
              Em Brusque
              <br />
              desde <span className="text-amarelo">2013</span>.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <span className="mb-7 block h-[2px] w-full bg-creme/30" />
            <p className="font-editorial text-xl leading-snug text-creme md:text-[1.6rem]">
              A Sorveteria Elee faz parte do Rio Branco há mais de uma década. O cardápio reúne
              sorvetes e picolés artesanais, açaí, milk shake e opções salgadas em um espaço
              simples, próximo e feito para receber todo mundo.
            </p>
          </Reveal>
        </div>

        {/* Produto, marca e loja na mesma imagem: a foto mais forte do conjunto */}
        <Reveal className="border-t-2 border-cacau lg:col-span-6 lg:border-t-0 lg:border-l-2">
          <img
            src={picolesFachada.url}
            alt="Três picolés da Sorveteria Elee segurados em frente à fachada colorida da loja"
            width={1122}
            height={1402}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover object-center sm:aspect-[16/10] lg:aspect-auto lg:h-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
