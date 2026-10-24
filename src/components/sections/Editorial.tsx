import { Reveal } from "@/components/Reveal";
import { image } from "@/lib/images";
export function Editorial() {
  return (
    <section className="border-b-2 border-cacau bg-acai">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-12">
        <Reveal className="flex justify-center bg-[#e5dceb] p-8 lg:col-span-6">
          <img
            src={image("acai-waffle")}
            alt="Açaí em casquinha de waffle com morangos e gotas de chocolate sobre fundo roxo"
            width="640"
            height="800"
            loading="lazy"
            className="max-h-[650px] w-full object-contain"
          />
        </Reveal>
        <div className="flex flex-col justify-center px-5 py-16 md:px-10 lg:col-span-6">
          <Reveal>
            <p className="eyebrow text-creme">Entre os mais pedidos</p>
            <h2 className="display-lg mt-7 text-creme">
              Açaí com
              <br />
              Leite
              <br />
              Condensado.
            </h2>
            <p className="font-editorial mt-8 max-w-[28ch] text-2xl text-creme">
              Uma das escolhas favoritas de quem pede na Boutique.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
