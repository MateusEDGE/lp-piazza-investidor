import { CoverImage } from "@/components/lp/heroes/CoverImage";
import { Reveal } from "@/components/motion/Reveal";
import { PinIcon } from "@/components/ui/PinIcon";
import { SeloIlustrativo } from "@/components/ui/SeloIlustrativo";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { VideoPavimentos } from "./VideoPavimentos";
import type { AtivoLp, PublicoLp } from "./types";

/**
 * Hero da landing de tráfego.
 *
 * A ordem é a de uma página de resposta direta: promessa, endereço, ação,
 * prova. O botão principal rola até o formulário em vez de sair da página; o
 * WhatsApp fica ao lado, como segunda via para quem prefere falar agora.
 *
 * Os dois botões usam a medida `padrao` do BrandButton, a mesma que o WhatsApp
 * já usava: o principal era um pouco mais alto e, lado a lado, a diferença de
 * altura aparecia. No celular eles empilham com a largura da coluna, para o par
 * ficar do mesmo tamanho; no desktop cada um volta à largura do próprio texto.
 *
 * O hero não traz mais o parágrafo de apoio (`hero.subtitulo`, ainda na copy e
 * usado por nada aqui): com o vídeo do projeto ao lado, o texto disputava a
 * primeira tela com ele. Os números que o parágrafo repetia estão na ficha do
 * ativo, e na descrição de SEO da página.
 *
 * Ocupa a tela inteira, como o hero das páginas de empreendimento: era um bloco
 * de altura de conteúdo, e a foto aparecia cortada numa faixa. Quem entra pelo
 * anúncio vê primeiro o projeto, em tela cheia, e o texto por cima.
 *
 * À direita fica o vídeo do projeto, que antes abria a seção de pavimentos. É a
 * prova mais forte que a página tem e agora aparece na primeira tela: em
 * segundos ele entrega o conjunto do ativo, que nenhuma foto parada entrega. Os
 * cards de números saíram daqui por causa dele — o mesmo dado continua na ficha
 * do ativo, seção "O ativo em números", e dois blocos de prova competindo pelo
 * mesmo canto só dividiriam a atenção de quem acabou de chegar.
 *
 * **A montagem é uma grade, e não duas colunas soltas, por causa do celular.**
 * Ali tudo vira uma coluna só, e a ordem pedida é promessa, subtítulo e vídeo —
 * o vídeo entra no meio do texto, antes do endereço e dos botões, e não depois
 * deles. Com duas colunas em `flex` isso não se escreve: o vídeo estaria em
 * outro contêiner e só poderia cair antes ou depois do bloco de texto inteiro.
 * Na grade cada peça é um item próprio: no celular elas empilham na ordem do
 * código, e no desktop as duas de texto voltam para a coluna da esquerda
 * (linhas 1 e 2) enquanto o vídeo ocupa a da direita, atravessando as duas.
 */
export function HeroLpTrafego({
  publico,
  ativo,
}: {
  publico: PublicoLp;
  ativo: AtivoLp;
}) {
  const { hero } = publico;

  return (
    <section className="relative isolate overflow-hidden bg-nexa-ink text-white">
      <CoverImage src={hero.imagem} />
      <SeloIlustrativo />

      <div className="container-wide relative z-[2] grid min-h-svh content-center gap-y-10 pb-20 pt-32 md:pb-24 md:pt-36 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-x-16 lg:gap-y-6">
        <div className="max-w-2xl lg:col-start-1 lg:row-start-1">
          <Reveal delay={0.06}>
            <h1 className="heading-nexa text-[clamp(2.1rem,5.6vw,4rem)]">
              {hero.titulo}{" "}
              <span className="text-lp-accent">{hero.acento}.</span>
            </h1>
          </Reveal>
        </div>

        {/* O vídeo é vertical e tem visor próprio (ver VideoPavimentos).
            19rem é a largura que os cards de números ocupavam, para o
            equilíbrio do hero não mudar — mas ela é um teto, e não uma medida
            fixa: em 9:16 cada rem de largura custa quase dois de altura, e numa
            janela baixa a peça inteira empurrava o hero para fora da primeira
            tela. O `min` desconta do viewport o que o hero já gasta em respiro
            e no título (17rem, folgado) e converte o que sobra em largura pela
            proporção do vídeo. Em tela alta vale o teto; em tela baixa o vídeo
            encolhe e a dobra continua inteira. */}
        {ativo.video && (
          <Reveal
            delay={0.2}
            className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:w-[min(19rem,calc((100svh_-_17rem)_*_0.5625))] lg:shrink-0"
          >
            {hero.tituloVideo && (
              <h2 className="heading-nexa mb-4 text-center text-[1.1rem] tracking-[0.06em] text-white md:text-[1.25rem]">
                {hero.tituloVideo}
              </h2>
            )}
            <VideoPavimentos
              src={ativo.video.src}
              capa={ativo.video.capa}
              nome={ativo.nome}
            />
          </Reveal>
        )}

        <div className="max-w-2xl lg:col-start-1 lg:row-start-2">
          <Reveal delay={0.18}>
            <p className="flex items-start gap-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/70">
              <PinIcon className="mt-0.5 size-4 shrink-0 text-lp-accent" />
              {ativo.endereco}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            {/* No celular os dois botões nascem com larguras diferentes e ficavam
                encostados à esquerda, desalinhados um do outro. Centrados, cada um
                fica do tamanho do seu texto e os dois se lêem como um par. */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#formulario"
                className="btn-shine inline-flex w-full items-center justify-center gap-2.5 rounded-[var(--radius-brand)] bg-lp-accent px-[1.8rem] py-[1.05rem] text-center text-[16.8px] font-semibold uppercase tracking-wider text-lp-accent-contrast transition-colors duration-300 hover:brightness-110 sm:w-auto"
              >
                {hero.cta}
              </a>
              <WhatsAppCTA
                numero={ativo.whatsappNumero}
                mensagem={publico.whatsapp}
                variant="outline"
                className="w-full sm:w-auto"
              >
                WhatsApp
              </WhatsAppCTA>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
