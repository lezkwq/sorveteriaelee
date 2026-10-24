import { Reveal } from "@/components/Reveal";
import { image } from "@/lib/images";
export function Sobre() {
  return (
    <section id="sobre" className="border-b-2 border-cacau bg-creme">
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-acai">Sobre a Boutique</p>
          <h2 className="display-lg mt-7 text-cacau">
            Seu encontro
            <br />
            com o açaí
            <br />
            em Itajaí.
          </h2>
          <p className="font-editorial mt-8 max-w-[36ch] text-2xl leading-snug text-cacau">
            A Boutique do Açaí fica no São Vicente. Você pode aproveitar no local, levar para casa
            ou pedir com entrega sem contato.
          </p>
        </Reveal>
        <Reveal className="flex justify-center">
          <img
            src={image("logo")}
            alt="Logo da Boutique do Açaí, com frutos roxos e círculo verde"
            width="1080"
            height="1080"
            loading="lazy"
            className="w-full max-w-[440px] rounded-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
