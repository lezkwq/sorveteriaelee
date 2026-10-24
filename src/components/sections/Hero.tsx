import { SITE, WHATSAPP_URL, CARDAPIO_URL } from "@/lib/site";
import { image } from "@/lib/images";
export function Hero() {
  return (
    <section id="inicio" className="border-b-2 border-cacau bg-creme">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-12">
        <div className="flex flex-col justify-between px-5 py-10 md:px-10 lg:col-span-7 lg:py-16">
          <div>
            <p className="eyebrow text-acai">São Vicente · {SITE.city}</p>
            <h1 className="display-xl mt-6 text-cacau">
              Sua pausa.
              <br />
              <span className="text-acai">Seu açaí.</span>
              <br />
              Sua Boutique.
            </h1>
            <p className="font-editorial mt-7 max-w-[34ch] text-2xl leading-snug text-cacau">
              Da tigela à casquinha, um convite para a próxima colherada.
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow inline-flex min-h-14 items-center justify-center bg-acai px-7 text-creme hover:bg-cacau"
            >
              Pedir pelo WhatsApp
            </a>
            <a
              href={CARDAPIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow inline-flex min-h-14 items-center justify-center border-2 border-cacau px-7 text-cacau hover:bg-white"
            >
              Ver cardápio
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#eee6da] px-5 py-8 lg:col-span-5 lg:p-8">
          <img
            src={image("acai-principal")}
            alt="Pote da Boutique do Açaí com calda vermelha e gotas de chocolate, sobre tábua de madeira"
            width="1066"
            height="1333"
            fetchPriority="high"
            className="max-h-[640px] w-full object-contain"
          />
        </div>
      </div>
      <div className="border-t-2 border-cacau bg-acai px-5 py-4">
        <p className="eyebrow flex flex-wrap justify-center gap-x-10 gap-y-3 text-creme">
          <span>No local</span>
          <span>Para viagem</span>
          <span>Entrega sem contato</span>
        </p>
      </div>
    </section>
  );
}
