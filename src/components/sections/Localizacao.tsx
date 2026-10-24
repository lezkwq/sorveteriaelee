import { Reveal } from "@/components/Reveal";
import { ADDRESS, MAPS_URL, SITE, WHATSAPP_INFO_URL } from "@/lib/site";
export function Localizacao() {
  return (
    <section id="onde-estamos" className="border-b-2 border-cacau bg-creme">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-acai">Onde estamos</p>
          <h2 className="display-lg mt-6 text-cacau">
            No São Vicente.
            <br />
            Perto da sua
            <br />
            próxima pausa.
          </h2>
        </Reveal>
        <Reveal>
          <address className="not-italic">
            <p className="font-display text-3xl uppercase">{ADDRESS.street}</p>
            <p className="mt-3 text-lg">{ADDRESS.district}</p>
          </address>
          <p className="mt-6">WhatsApp: {SITE.phone}</p>
          <p className="mt-3">Faixa de preço no Google: R$ 20 a R$ 40 por pessoa</p>
          <p className="mt-6">Consulte os horários e a entrega no seu bairro pelo WhatsApp.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow inline-flex min-h-14 items-center bg-acai px-7 text-creme"
            >
              Traçar rota
            </a>
            <a
              href={WHATSAPP_INFO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow inline-flex min-h-14 items-center border-2 border-cacau px-7"
            >
              Consultar horários
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
