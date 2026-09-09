import { Reveal } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { SectionShell } from "@/components/ui/SectionShell";
import type { AtivoLp, PublicoLp } from "./types";

/**
 * Os três pavimentos do empreendimento, lidos pelo interesse do público.
 *
 * A ordem vem da copy, em `publico.pavimentos`, e não é a mesma nas quatro
 * páginas: em gastronomia e saúde o andar do público abre a lista, e em
 * serviços e investidor a lista segue a numeração do prédio. O destaque é
 * independente da ordem: na página do investidor nenhum pavimento é destacado,
 * porque ali os três valem igual.
 *
 * A seção é de duas colunas: título e texto à esquerda, os três cards à
 * direita, centrados na altura do texto. Antes os cards vinham empilhados sob o
 * texto e a direita era ocupada por uma peça de imagem — o vídeo do projeto,
 * que agora abre a página no hero. Sem ele a coluna ficaria vazia, e a lista
 * cabe ali melhor do que uma foto: os três pavimentos são o conteúdo desta
 * seção, e lado a lado com a explicação eles se leem de uma vez só.
 */
export function Pavimentos({
  publico,
  ativo,
  tone = "tint",
}: {
  publico: PublicoLp;
  ativo: AtivoLp;
  tone?: "tint" | "none";
}) {
  const escuro = tone === "none";
  return (
    <SectionShell tone={tone} compacto>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
        <Reveal>
          <p className="label-editorial text-lp-accent">O empreendimento</p>
          <h2
            className={`display-editorial mt-4 ${escuro ? "text-white" : "text-nexa-ink"}`}
          >
            {publico.tituloPavimentos ?? "Três pavimentos, três vocações"}
          </h2>
          <p
            className={`mt-6 max-w-xl text-[17px] leading-relaxed ${escuro ? "text-white/80" : "text-nexa-soft"}`}
          >
            {publico.textoPavimentos ??
              `Cada pavimento do ${ativo.nome} tem uma vocação definida no masterplan, e é a soma delas que faz o mesmo cliente vir mais de uma vez por semana.`}
          </p>
        </Reveal>

        <ul className="space-y-3">
          {publico.pavimentos.map((p, i) => (
            <li key={p.pavimento}>
              <Reveal delay={0.08 + i * 0.06}>
                <Tilt grau={10} escala={1.02}>
                  <div
                    className={`flex flex-wrap items-baseline gap-x-4 gap-y-2 rounded-[var(--radius-brand)] border p-5 shadow-[0_14px_36px_-26px_rgba(14,20,48,0.8)] transition-colors duration-300 motion-reduce:transition-none md:p-6 ${
                      p.destaque
                        ? "border-lp-accent bg-lp-accent-soft"
                        : escuro
                          ? "border-white/12 bg-white/[0.06]"
                          : "border-nexa-ink/10 bg-white"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-bold uppercase tracking-[0.18em] ${escuro ? "text-white/50" : "text-nexa-mist"}`}
                    >
                      {p.pavimento}
                    </span>
                    <h3
                      className={`heading-nexa text-[1.4rem] md:text-[1.6rem] ${escuro ? "text-white" : "text-nexa-ink"}`}
                    >
                      {p.categoria}
                    </h3>
                    {p.destaque && (
                      <span className="rounded-full bg-lp-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-lp-accent-contrast">
                        Seu andar
                      </span>
                    )}
                    <p
                      className={`w-full text-[15px] leading-relaxed ${escuro ? "text-white/75" : "text-nexa-soft"}`}
                    >
                      {p.detalhe}
                    </p>
                  </div>
                </Tilt>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
