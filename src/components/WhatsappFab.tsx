import { WhatsappIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/site";

/** Atalho fixo apenas no celular, discreto e alinhado a paleta da marca. */
export function WhatsappFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Sorveteria Elee no WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-13 items-center justify-center border-2 border-cacau bg-amarelo text-cacau transition-colors hover:bg-creme lg:hidden"
    >
      <WhatsappIcon className="size-6" />
    </a>
  );
}
