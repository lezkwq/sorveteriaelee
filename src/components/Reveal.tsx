import type { ComponentProps, ElementType } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export interface RevealProps extends ComponentProps<"div"> {
  /** Elemento HTML renderizado. Permite manter semantica correta na secao. */
  as?: ElementType;
  /** Atraso em milissegundos para escalonar entradas vizinhas. */
  delay?: number;
}

export function Reveal({ as, delay = 0, className, style, children, ...props }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
