import { SITE } from "@/lib/site";
import { image } from "@/lib/images";
export function Pudim() {
  if (!SITE.mostrarPudim) return null;
  const photos = [
    ["pudim-tradicional", "Copo de pudim com calda e rótulo Fábrica do Pudim"],
    ["pudim-doce-leite", "Copo de Doce de Leite com tampa dourada da Fábrica do Pudim"],
    ["pudim-leite-po", "Copo de pudim Leite em Pó da Fábrica do Pudim"],
    ["pudim-colher", "Colher com pudim e calda"],
    ["pudim-calda", "Calda sendo despejada sobre copos de pudim"],
    ["pudim-empilhado", "Três copos de Doce de Leite da Fábrica do Pudim"],
  ] as const;
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10">
      <h2 className="display-lg">Pudim e doce de leite</h2>
      <p className="mt-5">Fábrica do Pudim</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map(([name, alt]) => (
          <img
            key={name}
            src={image(name)}
            alt={alt}
            width="400"
            height="500"
            loading="lazy"
            className="aspect-[4/5] w-full object-contain"
          />
        ))}
      </div>
    </section>
  );
}
