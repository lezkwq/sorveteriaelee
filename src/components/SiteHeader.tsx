import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { InstagramIcon, WhatsappIcon } from "@/components/icons";
import { INSTAGRAM_URL, NAV_ITEMS, WHATSAPP_URL } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  /** Trava o scroll do corpo enquanto o menu de celular estiver aberto. */
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-cacau bg-creme">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-4 px-5 md:h-20 md:px-10">
        <a
          href="#inicio"
          className="font-display flex items-center gap-3 text-base leading-tight tracking-tight text-cacau uppercase md:text-2xl"
        >
          <img
            src="/images/logo.webp"
            alt=""
            width="48"
            height="48"
            className="size-10 shrink-0 rounded-full md:size-12"
          />
          <span className="max-w-[140px] md:max-w-none">Boutique do Açaí</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="eyebrow rule-link inline-block text-cacau transition-colors hover:text-acai"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Boutique do Açaí"
            className="flex size-11 items-center justify-center text-cacau transition-colors hover:text-acai"
          >
            <InstagramIcon className="size-5" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Boutique do Açaí no WhatsApp"
            className="flex size-11 items-center justify-center text-cacau transition-colors hover:text-acai"
          >
            <WhatsappIcon className="size-5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="ml-1 flex size-11 flex-col items-center justify-center gap-[5px] border-2 border-cacau text-cacau lg:hidden"
          >
            <span
              className={cn(
                "block h-[2px] w-5 bg-current transition-transform duration-300",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-5 bg-current transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-5 bg-current transition-transform duration-300",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        style={{ display: open ? "flex" : "none" }}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 md:top-20 z-40 flex-col justify-between bg-acai px-6 pt-10 pb-10 lg:hidden"
      >
        <nav aria-label="Navegação do celular">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.href} className="border-b border-creme/25">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display flex items-baseline gap-4 py-4 text-[2rem] leading-none text-creme uppercase"
                >
                  <span className="font-sans text-[0.65rem] tracking-[0.2em] text-creme/80">
                    0{i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow flex h-14 items-center justify-center bg-amarelo text-cacau"
        >
          Fazer pedido
        </a>
      </div>
    </header>
  );
}
