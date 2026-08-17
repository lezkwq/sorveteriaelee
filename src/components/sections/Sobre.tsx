import { Reveal } from "@/components/Reveal";

export function Sobre() {
  return (
    <section id="sobre" className="border-b-2 border-cacau bg-acai">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 py-16 md:px-10 md:py-28 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow mb-7 text-creme/55">Sobre a Elee</p>
          <h2 className="display-lg text-creme">
            Em Brusque
            <br />
            desde <span className="text-amarelo">2013</span>.
          </h2>
        </Reveal>

        <Reveal delay={120} className="flex items-end lg:col-span-5">
          <div>
            <span className="mb-7 block h-[2px] w-full bg-creme/30" />
            <p className="font-editorial text-xl leading-snug text-creme md:text-[1.6rem]">
              A Sorveteria Elee faz parte do Rio Branco há mais de uma década. O cardápio reúne
              sorvetes e picolés artesanais, açaí, milk shake e opções salgadas em um espaço
              simples, próximo e feito para receber todo mundo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
