/**
 * Fontes responsivas em WebP para as fotos da casa.
 *
 * Cada entrada expoe `src` (maior variante, fallback) e `srcSet` com as larguras
 * disponiveis, para que o navegador nunca baixe um arquivo maior que o necessario.
 * Os enquadramentos e proporcoes sao identicos aos originais em JPEG.
 */
import acaiCopos480 from "@/assets/acai-copos-480.webp.asset.json";
import acaiCopos768 from "@/assets/acai-copos-768.webp.asset.json";
import acaiCopos960 from "@/assets/acai-copos-960.webp.asset.json";
import acaiDuplo480 from "@/assets/acai-duplo-480.webp.asset.json";
import acaiDuplo768 from "@/assets/acai-duplo-768.webp.asset.json";
import acaiDuplo1110 from "@/assets/acai-duplo-1110.webp.asset.json";
import bandeja480 from "@/assets/bandeja-acai-480.webp.asset.json";
import bandeja768 from "@/assets/bandeja-acai-768.webp.asset.json";
import bandeja1200 from "@/assets/bandeja-acai-1200.webp.asset.json";
import fachada480 from "@/assets/fachada-480.webp.asset.json";
import fachada768 from "@/assets/fachada-768.webp.asset.json";
import fachada1200 from "@/assets/fachada-1200.webp.asset.json";
import picoles480 from "@/assets/picoles-fachada-480.webp.asset.json";
import picoles768 from "@/assets/picoles-fachada-768.webp.asset.json";
import picoles1122 from "@/assets/picoles-fachada-1122.webp.asset.json";
import taca480 from "@/assets/taca-sorvete-480.webp.asset.json";
import taca768 from "@/assets/taca-sorvete-768.webp.asset.json";
import taca1122 from "@/assets/taca-sorvete-1122.webp.asset.json";

export interface ResponsiveImage {
  /** Maior variante disponivel, usada como fallback do srcSet. */
  src: string;
  /** Lista de candidatos com descritor de largura. */
  srcSet: string;
}

/** Monta o srcSet a partir de pares [ponteiro do asset, largura em px]. */
function build(entries: ReadonlyArray<readonly [{ url: string }, number]>): ResponsiveImage {
  const last = entries[entries.length - 1];
  if (!last) throw new Error("ResponsiveImage precisa de ao menos uma variante");
  return {
    src: last[0].url,
    srcSet: entries.map(([asset, width]) => `${asset.url} ${width}w`).join(", "),
  };
}

export const IMG_ACAI_COPOS = build([
  [acaiCopos480, 480],
  [acaiCopos768, 768],
  [acaiCopos960, 960],
]);

export const IMG_ACAI_DUPLO = build([
  [acaiDuplo480, 480],
  [acaiDuplo768, 768],
  [acaiDuplo1110, 1110],
]);

export const IMG_BANDEJA_ACAI = build([
  [bandeja480, 480],
  [bandeja768, 768],
  [bandeja1200, 1200],
]);

export const IMG_FACHADA = build([
  [fachada480, 480],
  [fachada768, 768],
  [fachada1200, 1200],
]);

export const IMG_PICOLES_FACHADA = build([
  [picoles480, 480],
  [picoles768, 768],
  [picoles1122, 1122],
]);

export const IMG_TACA_SORVETE = build([
  [taca480, 480],
  [taca768, 768],
  [taca1122, 1122],
]);
