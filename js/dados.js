// Conteúdo do site do Grupo Siaga. Para mudar textos, números, marcas ou endereços, edite só este arquivo.
// Fontes: gruposiaga.com / siagatrading.com (dez/2025) e deck "CORP SIAGA - APRESENTAÇÃO" (Canva).
window.SIAGA = {
  contato: {
    telefone: '+55 11 99408-4004',
    telefoneLink: 'tel:+5511994084004',
    email: 'operacoes@gruposiaga.com',
    // Chave pública do Web3Forms (web3forms.com, gerada para operacoes@). Vazia = o formulário usa o FormSubmit.
    formChave: '',
    redes: [
      { nome: 'LinkedIn', url: 'https://www.linkedin.com/company/gruposiaga' },
      { nome: 'Instagram', url: 'https://www.instagram.com/gruposiaga/' },
      { nome: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61564653733029' }
    ]
  },

  numeros: [
    { valor: 300, prefixo: '+', rotulo: 'fornecedores internacionais avaliados e homologados' },
    { valor: 104, prefixo: '+', rotulo: 'empresas atendidas no varejo e no atacarejo' },
    { valor: 730, prefixo: '+', rotulo: 'lotes inspecionados com controle total de qualidade' },
    { valor: 37, prefixo: '', rotulo: 'países com operações de importação e exportação, através de parceiros' }
  ],

  // Jornada ponta a ponta: da fábrica ao CD do cliente
  jornada: [
    { titulo: 'Sourcing internacional', texto: 'Identificamos, auditamos e negociamos com fabricantes globais confiáveis, com alta capacidade produtiva e total conformidade.' },
    { titulo: 'Desenvolvimento & private label', texto: 'Criamos linhas exclusivas, ajustamos especificações e desenvolvemos marcas próprias com diferenciais competitivos.' },
    { titulo: 'Auditoria & homologação', texto: 'Avaliação técnica de fábricas, processos, certificações e padrões de qualidade antes da produção.' },
    { titulo: 'Follow-up de produção', texto: 'Acompanhamento contínuo do cronograma e da execução para garantir prazos e consistência no resultado final.' },
    { titulo: 'Controle de qualidade', texto: 'Inspeções pré-embarque, testes em laboratório, relatórios detalhados e validação do lote antes do envio.' },
    { titulo: 'Logística & nacionalização', texto: 'Operação porta a porta com previsibilidade, redução de riscos e total conformidade documental e aduaneira.' },
    { titulo: 'Distribuição no Brasil', texto: 'Entrega no CD ou na loja, com rastreabilidade e eficiência, integrando toda a cadeia.' }
  ],

  pilares: [
    { titulo: 'Consultoria e planejamento estratégico', itens: ['Consultoria em supply chain', 'Planos de negócios internacionais', 'Gerenciamento de riscos', 'Consultoria em sustentabilidade'] },
    { titulo: 'Desenvolvimento de produtos e sourcing', itens: ['Desenvolvimento de produtos', 'Procurement: busca de fornecedores', 'Portfólio de produtos validados', 'Desenvolvimento de embalagens'] },
    { titulo: 'Qualidade e conformidade', itens: ['Laboratório de testes', 'Certificação de produtos', 'Gestão da qualidade', 'Auditoria de fornecedores'] },
    { titulo: 'Tecnologia', itens: ['Plataforma de gestão de projetos', 'Análise de dados e sugestão de produto', 'Automação de processos'] },
    { titulo: 'Serviços financeiros', itens: ['Incentivos fiscais', 'Financiamento das operações', 'Consultoria tributária', 'Gerenciamento de câmbio', 'Seguro de crédito'] },
    { titulo: 'Logística e operações', itens: ['Logística internacional e despacho aduaneiro', 'Seguros internacionais', 'Armazenagem e distribuição', 'Monitoramento de fábricas e inspeção de embarque', 'Gestão de projetos especiais'] }
  ],

  diferenciais: [
    { titulo: 'Competitividade real', texto: 'Otimizamos custos internacionais e entregamos produtos com excelente custo-benefício para aumentar sua margem.', img: 'assets/img/competitividade-global-1.webp' },
    { titulo: 'Portfólio que vende mais', texto: 'Itens exclusivos, sólidos e adequados às expectativas do consumidor brasileiro.', img: 'assets/img/portfolio.webp' },
    { titulo: 'Segurança em toda a jornada', texto: 'Auditoria, homologação e controle rígido garantem previsibilidade e redução de riscos.', img: 'assets/img/seguranca.webp' },
    { titulo: 'Gestão ponta a ponta', texto: 'Você acompanha tudo. Nós cuidamos de tudo, da fábrica ao seu CD.', img: 'assets/img/gestao-ponta.webp' },
    { titulo: 'Escala e velocidade', texto: 'Rede global de fornecedores e fluxo operacional eficiente para atender demandas contínuas.', img: 'assets/img/escalavelocidade2.webp' },
    { titulo: 'Transparência total', texto: 'Informações precisas, rastreabilidade e governança fazem parte do nosso modelo.', img: 'assets/img/transparencia.webp' }
  ],

  categorias: [
    { nome: 'Iluminação', icone: 'iluminacao' },
    { nome: 'Materiais elétricos', icone: 'materiais-eletricos' },
    { nome: 'Pisos & revestimentos', icone: 'pisos-revestimentos' },
    { nome: 'Metais sanitários', icone: 'metais-sanitarios' },
    { nome: 'Acessórios para banheiro', icone: 'acessorios-banheiro' },
    { nome: 'Ferragens e parafusos', icone: 'ferragens' },
    { nome: 'Ferramentas', icone: 'ferramentas' },
    { nome: 'Artigos de obra', icone: 'artigos-obra' },
    { nome: 'Acabamentos', icone: 'acabamentos' },
    { nome: 'Casa & jardim', icone: 'casa-jardim' }
  ],

  perfis: [
    'Home centers e redes de varejo',
    'Atacadistas e distribuidores regionais',
    'Lojas independentes e redes locais',
    'Empresas que querem desenvolver marca própria',
    'Indústrias nacionais que querem terceirizar a produção internacional'
  ],

  // logo: arquivo em assets/marcas (sem logo, o card mostra o nome em texto). url vazia = card sem link. oculta: true tira do site.
  marcas: [
    { nome: 'Siaga Trading', logo: 'assets/marcas/siaga-trading.webp', linha: 'Importação e supply chain', texto: 'Importação door to door para indústrias, atacados e varejo: do sourcing ao desembarque, com inteligência de mercado e visão de sell out.', url: 'https://siagatrading.com/' },
    { nome: 'Durax', logo: 'assets/marcas/durax.png', linha: 'A nova força no MatCon', texto: 'Fixadores, ferramentas, material elétrico e hidráulico com inspeção na fábrica e estoque no Brasil para abastecer a loja e a obra.', url: 'https://dev.duraxbr.com/' },
    { nome: 'Durabem', logo: 'assets/marcas/durabem.svg', linha: 'Feito para durar', texto: 'Mais de 3 mil itens para construção: ferragens, elétrica, ferramentas e linha química. Combina performance e rentabilidade no mix da loja.', url: 'https://mkt-siaga.github.io/durabem-website/' },
    { nome: 'Sixx', oculta: true, logo: 'assets/marcas/sixx.png', linha: 'Química para construção', texto: 'Tintas spray, espuma expansiva, silicones, PU40, adesivo instantâneo e corante líquido, com ficha técnica e FDS de cada produto.', url: 'https://mkt-siaga.github.io/sixx-website/' },
    { nome: 'Nexbridge International', oculta: true, logo: 'assets/marcas/nexbridge.png', linha: 'Casa e utilidades', texto: 'Utilidades de cozinha, eletroportáteis, brinquedos e mais, com catálogo para cotação.', url: 'https://mkt-siaga.github.io/nexbridge-website/' },
    { nome: 'WhiteLabel', logo: 'assets/marcas/whitelabel.png', linha: 'Linha para marca própria', texto: 'Catálogo de materiais de construção pronto para private label: ferramentas, discos, brocas, iluminação, hidráulica e ferragens.', url: 'https://mkt-siaga.github.io/whitelabel-website/' },
    { nome: 'G8', oculta: true, logo: '', linha: 'Marca do grupo', texto: '', url: '' }
  ],

  modalidades: {
    importacao: [
      { nome: 'Encomenda', itens: ['O câmbio é fechado através de parceiros e o cliente antecipa os valores', 'O cliente não precisa ter filial no estado', 'Nota fiscal de venda da mercadoria para o cliente'] },
      { nome: 'Conta e ordem', itens: ['O câmbio pode ser fechado através de parceiros ou pelo cliente', 'O cliente precisa ter filial consolidada no estado', 'Nota fiscal de remessa para transferir a mercadoria ao cliente'] },
      { nome: 'Distribuição', itens: ['Compramos no exterior, importamos e nacionalizamos através de parceiros', 'O estoque fica em logísticas parceiras', 'Venda pelo nosso comercial e expedição até o cliente'] }
    ],
    exportacao: [
      { nome: 'Direta', itens: ['Compramos de fabricantes e produtores brasileiros e comercializamos no mundo', 'Linhas de crédito para o exportador nacional e para o importador global'] },
      { nome: 'Indireta', itens: ['Intermediamos a exportação direto do fabricante brasileiro, como prestação de serviço', 'Abrimos mercados para a internacionalização de empresas nacionais'] }
    ],
    icms: ['Rio Grande do Sul', 'Santa Catarina', 'Espírito Santo', 'Alagoas']
  },

  vantagens: [
    'Know-how em comércio internacional',
    'Estudo de viabilidade de produtos, fornecedores e serviços para reduzir custos',
    'Time de importação qualificado em estudos tributários e logísticos',
    'Tarifas especiais com parceiros logísticos estratégicos, pelo alto volume',
    'Integração logística',
    'Extensão do benefício fiscal de ICMS em diferentes estados',
    'Internacionalização de empresas brasileiras para exportação',
    'Redução do desencaixe financeiro na nacionalização',
    'Departamento fiscal, tributário e jurídico especializado em comércio internacional'
  ],

  escritorios: [
    { pais: 'Brasil', sigla: 'BR', cidade: 'São Paulo · Sede', endereco: 'R. Surubim, 577, Conj. 121, Brooklin, CEP 04571-050' },
    { pais: 'China', sigla: 'CN', cidade: 'Hangzhou', endereco: 'Fourth Floor, No. 11-1, Hongtai Si Lu, Xiaoshan Economic Development' },
    { pais: 'Índia', sigla: 'IN', cidade: 'Nova Délhi', endereco: '103, First Floor, F.I.E. Patparganj Industrial Area, 110092' },
    { pais: 'Estados Unidos', sigla: 'US', cidade: 'Miami · Siaga Trading LLC', endereco: '150 SE 2nd Ave, Ste 506, Miami, FL 33131' },
    { pais: 'Hong Kong', sigla: 'HK', cidade: 'Wan Chai', endereco: 'Flat A, 20/F, ZJ 300, 300 Lockhart Road, Wan Chai, Hong Kong' }
  ],

  lideranca: [
    { nome: 'Silvio Pallioto', cargo: 'Presidente', bio: 'Mais de 25 anos de atuação comercial, 20 deles na construção civil na América Latina. Tem vasta experiência no mercado asiático com grandes fornecedores, é diretor da Abilumi e investidor em mais de 10 empresas, sempre em busca de inovação e de crescimento sustentável e rentável.' },
    { nome: 'Hanie Issa Júnior', cargo: 'Vice-presidente', bio: 'Mais de três décadas de liderança empresarial. Fundador e conselheiro da Tekbond, que liderou como CEO por cinco anos após a venda para a Saint-Gobain. Investe em alimentos plant-based, créditos de carbono, imobiliário e entretenimento.' }
  ]
};
