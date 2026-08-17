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
              O que escrevem sobre a Elee, com as palavras de quem esteve aqui.
            </p>
          </Reveal>
        </div>

        {/* Depoimentos tratados como texto, sem componente generico de review */}
        <ul className="-mx-5 flex snap-x snap-mandatory gap-px overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {REVIEWS.map((review, i) => (
            <li
              key={review.author}
              className="min-w-[85%] shrink-0 snap-start border-r-2 border-cacau/15 pt-10 pr-8 last:border-r-0 md:min-w-0 md:pt-12 md:pr-10"
            >
              <Reveal delay={i * 90}>
                <span className="eyebrow text-rosa">0{i + 1}</span>
                <blockquote className="font-display mt-5 text-[clamp(1.35rem,2.1vw,1.85rem)] leading-[1.08] text-cacau uppercase">
                  {review.quote}
                </blockquote>
                <p className="eyebrow mt-6 text-cacau/55">{review.author}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
