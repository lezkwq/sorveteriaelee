import { Reveal } from "@/components/Reveal";
import { WHATSAPP_URL } from "@/lib/site";

export function CtaFinal() {
  return (
    <section className="border-b-2 border-cacau bg-ameixa">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 px-5 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <h2 className="display-xl text-creme">
            Bateu
            <br />
            vontade?
          </h2>
        </Reveal>

        <Reveal delay={120} className="lg:pb-4">
          <p className="font-editorial max-w-[24ch] text-2xl leading-snug text-creme md:text-3xl">
            Chama no WhatsApp e fala com a Elee.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow mt-8 inline-flex h-14 items-center justify-center bg-amarelo px-10 text-cacau transition-colors hover:bg-creme"
          >
            Fazer pedido
          </a>
        </Reveal>
      </div>
    </section>
  );
}
