import { InstagramIcon, WhatsappIcon } from "@/components/icons";
import { ADDRESS, INSTAGRAM_URL, NAV_ITEMS, WHATSAPP_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-cacau">
      <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-10 md:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div>
            <p className="display-md text-creme">Sorveteria Elee</p>
            <address className="mt-5 not-italic text-creme/65">
              <p>{ADDRESS.street}</p>
              <p>{ADDRESS.district}</p>
            </address>

            <div className="mt-7 flex items-center gap-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Sorveteria Elee"
                className="flex size-12 items-center justify-center border-2 border-creme/25 text-creme transition-colors hover:border-rosa hover:text-rosa"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a Sorveteria Elee no WhatsApp"
                className="flex size-12 items-center justify-center border-2 border-creme/25 text-creme transition-colors hover:border-amarelo hover:text-amarelo"
              >
                <WhatsappIcon className="size-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="eyebrow rule-link inline-block text-creme/70 transition-colors hover:text-creme"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="eyebrow mt-14 border-t border-creme/15 pt-6 text-creme/40">
          Sorveteria Elee · Brusque, SC
        </p>
      </div>
    </footer>
  );
}
