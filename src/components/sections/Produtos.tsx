import { Reveal } from "@/components/Reveal";
import { CATEGORIES, CARDAPIO_URL } from "@/lib/site";
import { image } from "@/lib/images";
export function Produtos() {
  return (
    <section id="o-que-tem" className="border-b-2 border-cacau bg-creme">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="display-lg text-cacau">
            Açaí em cada
            <br />
            colherada.
          </h2>
          <p className="font-editorial max-w-[27ch] text-2xl text-acai">
            Tigela, copo ou casquinha. Qual combina com a sua vontade?
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.image} delay={i * 60}>
              <div className="bg-[#eee6da] p-3">
                <img
                  src={image(c.image)}
                  alt={c.text}
                  width="400"
                  height="500"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-contain"
                />
              </div>
              <p className="eyebrow mt-6 text-acai">0{i + 1}</p>
              <h3 className="display-md mt-3 text-cacau">{c.name}</h3>
              <p className="mt-4 leading-relaxed text-cacau">{c.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 grid gap-8 border-t border-cacau/30 pt-10 md:grid-cols-2">
          <Reveal>
            <h3 className="display-md text-acai">Acompanhamentos</h3>
            <p className="mt-4 max-w-[45ch] leading-relaxed">
              Nas fotos, morangos, leite condensado, gotas de chocolate e calda vermelha.
            </p>
          </Reveal>
          <Reveal>
            <h3 className="display-md text-acai">Salada de Fruta da Boutique</h3>
            <p className="mt-4 leading-relaxed">Uma das mais pedidas da Boutique.</p>
            <a
              href={CARDAPIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow mt-5 inline-block underline underline-offset-4"
            >
              Consultar no cardápio
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
