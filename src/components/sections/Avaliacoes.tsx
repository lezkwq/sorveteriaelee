import { Reveal } from "@/components/Reveal";
import { RATING, REVIEWS } from "@/lib/site";

export function Avaliacoes() {
  return (
    <section id="avaliacoes" className="border-b-2 border-cacau bg-creme">
      <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-col gap-8 border-b-2 border-cacau pb-10 md:flex-row md:items-end md:justify-between">
          <Reveal className="flex items-end gap-6">
            <span className="font-display text-[clamp(4.5rem,16vw,12rem)] leading-[0.78] text-acai">
              {RATING.score}
            </span>
            <p className="eyebrow pb-3 max-w-[14ch] text-cacau/70">{RATING.count}</p>
          </Reveal>

          <Reveal delay={100} className="md:pb-3">
            <p className="font-editorial max-w-[26ch] text-xl text-cacau/70 md:text-2xl">
              O que escrevem sobre a Boutique, com as palavras de quem esteve aqui.
            </p>
          </Reveal>
        </div>

        {/* Depoimentos tratados como texto, empilhados no celular */}
        <ul className="grid grid-cols-1">
          {REVIEWS.map((review, i) => (
            <li
              key={review.author}
              className="border-b-2 border-cacau/15 py-10 md:border-r-0 md:border-b-0 md:pr-10 md:pt-12 md:last:border-r-0 last:border-b-0 md:[&:not(:first-child)]:pl-10"
            >
              <Reveal delay={i * 90}>
                <span className="eyebrow text-acai">0{i + 1}</span>
                <blockquote className="font-display mt-5 text-[clamp(1.35rem,2vw,1.75rem)] leading-[1.06] text-cacau">
                  {review.quote}
                </blockquote>
                <p className="eyebrow mt-6 text-cacau">{review.author}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
