import type { MontarPublico } from "@/components/lp-trafego/types";
import { FAQ_QUEM_ESTA_ATRAS, foto } from "./comum";

/**
 * A copy da landing do investidor.
 *
 * É a única das quatro com o bloco `checklist`: a checagem de ativo que um
 * investidor de varejo já faz — localização, escala, vagas, mix, ancoragem,
 * perfil da receita, gestão e histórico —
 * respondida item a item com o dado do Piazza.
 *
 * Não há projeção de rentabilidade, VGV nem ticket de entrada aqui, por decisão
 * do cliente. O argumento é fundamento do ativo; o número fica para a reunião,
 * com as premissas abertas.
 *
 * Revisão de 18/08/2026 (documento de alterações aprovado por Paulo): as três
 * vocações passaram a ser gastronomia, serviços e saúde e bem-estar; o
 * superlativo absoluto sobre o endereço saiu; e a ocupação do Uberlândia
 * Shopping deixou de ser citada, porque o número não procede. Esta página é a
 * que mais depende de dado publicado: nenhum número entra aqui sem fonte
 * confirmada com o comercial.
 *
 * Revisão de 19/08/2026 (documento próprio desta página): o hero deixou de
 * abrir pelo dado de comercialização e passou a abrir pela rentabilidade; o
 * bloco de dor virou bloco de oportunidade, trocando a objeção do risco de
 * vacância pela tese do formato. Atenção ao ler as duas juntas: a headline
 * agora fala em aumentar rentabilidade enquanto as dúvidas, logo abaixo,
 * mantêm que projeção de rentabilidade não vai para página aberta. Foi como
 * veio aprovado.
 */
export const investidor: MontarPublico = (a) => ({
  slug: "investidor",
  rotulo: "Para investidores",
  hero: {
    titulo: "Aumente a sua rentabilidade",
    acento: "investindo em strip malls",
    subtitulo: `${a.construcao} de área construída, ${a.terreno} de terreno, mais de 30 operações e ${a.vagas} vagas em um dos pontos mais nobres de ${a.cidade}. Um strip mall concebido, ancorado, comercializado e administrado pela mesma Nexa Malls.`,
    cta: "Receber a apresentação do ativo",
    imagem: foto(a, "Fachada e mix de lojas"),
  },
  provas: [
    { valor: a.comercializado, label: "de ancoragem antes da obra" },
    { valor: a.operacoes, label: "operações contratadas no mix" },
    { valor: a.construcao, label: "de área construída" },
    { valor: a.vagas, label: "vagas de estacionamento" },
  ],
  dor: {
    rotulo: "Onde a oportunidade realmente está",
    titulo:
      "Nem toda boa oportunidade imobiliária se apresenta como um investimento tradicional.",
    paragrafos: [
      "Quem investe em imóveis costuma olhar para localização, valorização e renda. Mas, em alguns casos, a oportunidade está justamente em enxergar além dos formatos mais óbvios.",
      "Um strip mall bem estruturado combina endereço estratégico, operação, conveniência e recorrência, fatores que ajudam a sustentar valor ao longo do tempo.",
    ],
    virada:
      "No Piazza, o imóvel não foi pensado apenas para existir. Foi pensado para funcionar.",
  },
  beneficios: {
    rotulo: "A tese do ativo",
    titulo: "Por que este strip mall e não outro",
    itens: [
      {
        dado: `${a.vagas} vagas`,
        titulo: "Estacionamento que o cliente encontra",
        texto: `${a.vagas} vagas de estacionamento no próprio empreendimento. Chegar, estacionar e entrar sem atrito faz parte da experiência do cliente, e é o que sustenta a recorrência que o locatário procura.`,
      },
      {
        dado: `${a.operacoes} contratos`,
        titulo: "Receita pulverizada, não dependente de uma âncora",
        texto:
          "Mais de 30 operações de gastronomia, serviços e saúde e bem-estar. Nenhum locatário isolado carrega o resultado do ativo, e a saída de um não abre buraco na receita.",
      },
      {
        dado: "3 pavimentos",
        titulo: "Mix desenhado no masterplan, não improvisado na locação",
        texto:
          "Cada pavimento tem vocação definida e número limitado de operações por segmento. Mix curado reduz canibalização e é o que sustenta o valor do aluguel na hora da renovação.",
      },
      {
        dado: a.cidade,
        titulo: "A praça onde a Nexa já opera",
        texto:
          "Todo o portfólio da casa está em Uberlândia: Bluemall, Villa Viseu, Uberlândia Shopping, Mall Silvio Rugani e BlueMall Centro. Curva de aprendizado, relação com os varejistas e leitura de vocação já pagas.",
      },
      {
        dado: "Gestão própria",
        titulo: "Quem comercializa também administra",
        texto:
          "Depois da entrega a Nexa segue no ativo: gestão de carteira, fundo de promoção e condomínio. A ocupação não é entregue a uma administradora que herda um mix que não montou.",
      },
      {
        dado: "18 anos",
        titulo: "Histórico verificável, não apresentação",
        texto:
          "Experiência combinada de 18 anos, atuação em 4 estados, 5 strip malls desenvolvidos, mais de 30 operações build to suit entregues e mais de 400 imóveis comerciais locados.",
      },
    ],
  },
  pavimentos: [
    {
      pavimento: "Semi-enterrado",
      categoria: "Gastronomia",
      detalhe: "Praça ativa: fluxo noturno e de fim de semana",
      destaque: false,
    },
    {
      pavimento: "Térreo",
      categoria: "Serviços",
      detalhe: "Recorrência diária, o alicerce da ocupação",
      destaque: false,
    },
    {
      pavimento: "Primeiro Pavimento",
      categoria: "Saúde e bem-estar",
      detalhe: "Contratos longos e alta permanência do locatário",
      destaque: false,
    },
  ],
  imagemPavimentos: a.video?.capa || foto(a, "Praça de alimentação"),
  videoPavimentos: true,
  checklist: {
    rotulo: "A checagem do ativo",
    titulo: "O que se olha em um strip mall, e o que o Piazza responde",
    itens: [
      {
        criterio: "Localização",
        resposta: `${a.enderecoCurto}, em um dos corredores mais nobres e movimentados de ${a.cidade}. Fluxo próprio, sem depender de mídia para gerar visita.`,
      },
      {
        criterio: "Área e escala",
        resposta: `${a.terreno} de terreno e ${a.construcao} de área construída em três pavimentos, com mais de 30 operações. Escala suficiente para diluir o custo de condomínio entre muitos locatários, e enxuta o bastante para não depender de uma única âncora.`,
      },
      {
        criterio: "Vagas",
        resposta: `${a.vagas} vagas de estacionamento no empreendimento. Em varejo de conveniência, a vaga é o gargalo entre o carro que passa e a venda que acontece: quanto mais fácil chegar e estacionar, mais confortável a visita e maior a chance de retorno.`,
      },
      {
        criterio: "Mix e curadoria",
        resposta:
          "Três vocações definidas (gastronomia, serviços e saúde e bem-estar), com número limitado de operações por segmento. Mix desenhado no masterplan reduz canibalização entre locatários e protege o valor do aluguel na renovação.",
      },
      {
        criterio: "Ancoragem",
        resposta:
          "A ancoragem caminha junto com a obra: as unidades são locadas enquanto o empreendimento é construído, e não depois de pronto.",
      },
      {
        criterio: "Perfil da receita",
        resposta:
          "Receita distribuída em mais de 30 contratos, concentrada em segmentos de recorrência (alimentação, serviços e saúde), historicamente menos sensíveis a ciclo do que varejo de desejo.",
      },
      {
        criterio: "Gestão pós-entrega",
        resposta:
          "A própria Nexa assume carteira, fundo de promoção e condomínio. Continuidade entre quem montou o mix e quem responde pela ocupação nos anos seguintes.",
      },
      {
        criterio: "Histórico do desenvolvedor",
        resposta:
          "18 anos de experiência combinada, 4 estados, 5 strip malls, mais de 30 BTS entregues e mais de 400 imóveis comerciais locados. Entre os ativos da casa em Uberlândia, o Villa Viseu está em 95% de ocupação sob nossa gestão e o Bluemall chegou a 98% em quatro meses de inauguração.",
      },
    ],
  },
  ficha: {
    titulo: "O ativo em números",
    itens: [
      { label: "Terreno", valor: a.terreno },
      { label: "Área construída", valor: a.construcao },
      { label: "Operações comerciais", valor: a.operacoes },
      { label: "Vagas", valor: a.vagas },
      { label: "Endereço", valor: a.enderecoCurto },
      { label: "Pavimentos", valor: "3" },
      { label: "Ancoragem antes da obra", valor: a.comercializado },
      { label: "Status", valor: "Em comercialização" },
    ],
  },
  faq: {
    titulo: "Perguntas frequentes",
    itens: [
      {
        pergunta: "Qual o ticket de entrada?",
        resposta:
          "Depende do modelo de participação e da fatia pretendida. Não publicamos valores em página aberta porque a proposta é montada caso a caso, sobre o estudo de viabilidade, e número solto, fora de contexto, não ajuda ninguém a decidir. O time apresenta a estrutura completa em reunião.",
      },
      {
        pergunta: "Qual a rentabilidade projetada?",
        resposta:
          "Projeção de rentabilidade não vai para anúncio. O estudo de viabilidade do Piazza (premissas de aluguel, ocupação, custo de obra e cronograma) é apresentado nominalmente, com as premissas abertas, para você conferir com o seu próprio assessor. Rentabilidade passada ou projetada não é garantia de resultado futuro.",
      },
      {
        pergunta: "Invisto na unidade ou no empreendimento?",
        resposta:
          "O modelo de investimento do Piazza é a participação no pool financeiro: você recebe pela performance do ativo como um todo, sem operar no local e sem ficar exposto a um único locatário. Quem quer operar a própria marca entra pelo outro caminho, como lojista.",
      },
      {
        pergunta: "Por que Uberlândia?",
        resposta:
          "É a praça onde a Nexa concentra o portfólio e onde já opera ativos maduros: o Bluemall chegou a 98% de ocupação em quatro meses de inauguração e o Villa Viseu está em 95% sob a nossa gestão. Comercializar em uma praça conhecida é diferente de estrear em uma cidade nova.",
      },
      {
        pergunta: "Em que fase o empreendimento está?",
        resposta:
          "Em comercialização, com metade das operações já negociadas antes do início da obra. O cronograma físico e financeiro atualizado é apresentado na reunião com o time, junto com o estudo de viabilidade.",
      },
      FAQ_QUEM_ESTA_ATRAS,
    ],
  },
  form: {
    titulo: "Receba a apresentação completa do ativo",
    texto:
      "Masterplan, mix contratado, posição de comercialização e estrutura de participação. O material é enviado pelo time e a conversa segue sem compromisso.",
    campo: {
      label: "Como você investe hoje?",
      rotuloLead: "Perfil",
      // única das quatro páginas que mantém lista fechada: aqui o que qualifica
      // o lead é o perfil de quem investe, não o nome de um negócio
      opcoes: [
        "Pessoa física",
        "Family office ou holding",
        "Fundo ou gestora",
        "Já invisto em imóveis comerciais",
        "Primeiro investimento no setor",
      ],
    },
    botao: "Quero a apresentação do ativo",
  },
  fechamento: {
    titulo: "O ativo já se provou.",
    acento: "Seja um dos investidores!",
    texto: `Metade comercializada antes da obra, mix curado, ${a.vagas} vagas e gestão da mesma casa que mantém o Villa Viseu em 95% de ocupação e levou o Bluemall a 98% em quatro meses. Fale com o time e receba o estudo completo.`,
    cta: "Falar com o time agora",
  },
  whatsapp: `Olá! Vim pela página do ${a.nome} e tenho interesse em investir no empreendimento. Podem me enviar a apresentação do ativo?`,
  seo: {
    title: "Investir em strip mall em Uberlândia | Piazza Nicomedes",
    description:
      "6.300 m² de área construída, mais de 30 operações e 134 vagas em um dos pontos mais nobres de Uberlândia. 50% comercializado antes do início da obra.",
  },
});
