// Idiomas do site: PT (original, em index.html e dados.js), EN e ZH.
// Carrega depois de dados.js e antes de main.js: troca os textos marcados com data-t e mescla as traduções em window.SIAGA.
// Listas traduzidas seguem a MESMA ordem das listas de dados.js (inclusive marcas ocultas); campos ausentes ficam como no original.
(function () {
  var IDIOMAS = {
    en: {
      nome: 'English', html: 'en',
      descricao: 'Grupo Siaga connects your company to the world\'s best manufacturers and manages the entire supply chain, from sourcing to delivery at your DC. Owner of the Durax, Durabem and WhiteLabel brands.',
      t: {
        'nav.grupo': 'The group', 'nav.jornada': 'How we work', 'nav.servicos': 'Services', 'nav.marcas': 'Brands', 'nav.presenca': 'Global presence', 'nav.contato': 'Contact us',
        'hero.olho': 'Solutions that transform',
        'hero.h1': 'Smart supply chain for the <em>construction</em> industry',
        'hero.lead': 'Grupo Siaga connects your company to the best international manufacturers and manages the entire supply chain, from development to arrival, with security, predictability and strong competitiveness.',
        'hero.cta1': 'Develop my private brand <span aria-hidden="true">→</span>',
        'hero.cta2': 'Import under my brand <span aria-hidden="true">→</span>',
        'grupo.olho': 'The group',
        'grupo.h2': 'We connect Brazil to the world\'s best manufacturers',
        'grupo.p1': 'Grupo Siaga was created to raise the competitiveness of the construction market with a solid, secure and results-driven global operation.',
        'grupo.p2': 'With a strategic presence in Asia and Brazil, our team combines foreign trade, sourcing, product engineering and supply chain, delivering complete solutions for companies that want to expand, innovate and win market share.',
        'grupo.c1': 'Building materials specialists', 'grupo.c2': 'Global network of approved suppliers', 'grupo.c3': 'Strict audit and inspection processes',
        'grupo.c4': 'Safe, transparent and predictable imports', 'grupo.c5': 'Integrated end-to-end logistics',
        'grupo.cardT': 'Global operation',
        'grupo.cardP': 'Imports and exports in 37 countries, through partners, covering the entire international trade chain end to end.',
        'jor.olho': 'How we work', 'jor.h2': 'Complete supply chain management, from the factory to your DC',
        'jor.p': 'We take on every step so you get competitive costs, guaranteed quality and a portfolio that sells more.',
        'serv.olho': 'Services', 'serv.h2': 'A hub of solutions across six fronts', 'serv.p': 'From strategy to delivery: everything your import needs, in a single partner.',
        'dif.olho': 'Why Grupo Siaga', 'dif.h2': 'Your products with more margin, quality and predictability',
        'cat.olho': 'Categories', 'cat.h2': 'Specialists in the key building materials categories',
        'cat.p': 'We work only with approved suppliers and product lines that meet the requirements of the Brazilian market.', 'cat.mini': 'Who we serve',
        'mar.olho': 'Our brands', 'mar.h2': 'An ecosystem of brands for stores and job sites',
        'mar.p': 'Private brands developed with the same sourcing, quality and logistics chain we offer our clients.',
        'mod.olho': 'Operating models', 'mod.h2': 'The right operating model for your business', 'mod.imp': 'Import', 'mod.exp': 'Export',
        'mod.icmsT': 'ICMS tax benefit', 'mod.icmsP': 'We operate with tax incentives in four Brazilian states:', 'mod.vantT': 'Advantages of working with us',
        'pres.olho': 'Global presence', 'pres.h2': 'Active operations in Brazil, Asia and the US',
        'pres.p': 'Local sourcing and supply chain teams follow factories, production and shipments up close.',
        'lid.olho': 'Leadership', 'lid.h2': 'Experience from people who know construction and Asia',
        'cont.olho': 'Contact', 'cont.h2': 'Ready to take your portfolio to the next level?',
        'cont.p': 'Talk to our specialists and find out how to import safely, reduce costs and develop highly competitive products.',
        'cont.tel': 'Phone', 'cont.email': 'E-mail', 'cont.sede': 'Headquarters', 'cont.sedeTxt': 'R. Surubim, 577, Conj. 121, Brooklin, São Paulo/SP, Brazil',
        'f.h3': 'Send us a message', 'f.assunto': 'Subject',
        'f.op1': 'Develop my private brand', 'f.op2': 'Import under my brand', 'f.op3': 'Learn about the group\'s brands', 'f.op4': 'Other subject',
        'f.nome': 'Name', 'f.empresa': 'Company', 'f.email': 'E-mail', 'f.fone': 'Phone / WhatsApp', 'f.msg': 'Message',
        'f.verifica': 'Verification: what is <b id="contaTxt">2 + 3</b>?',
        'f.aceite': 'I authorize Grupo Siaga to contact me about this request.',
        'f.enviar': 'Send message <span aria-hidden="true">→</span>',
        'f.okT': 'Message sent', 'f.okP': 'Thank you for reaching out. Our team will reply soon by e-mail or phone.', 'f.voltar': 'Back to top',
        'rod.copy': '© <span id="ano"></span> Grupo Siaga · Siaga Trading.'
      },
      js: {
        visitar: 'Visit website', enviando: 'Sending…', contaErrada: 'Incorrect answer. Please check the sum.',
        erroEnvio: 'We couldn\'t send your message right now. Please try again shortly or contact us:', voltando: 'Back to top in {s} s'
      },
      dados: {
        numeros: [
          { rotulo: 'international suppliers assessed and approved' },
          { rotulo: 'companies served in retail and cash & carry' },
          { rotulo: 'lots inspected with full quality control' },
          { rotulo: 'countries with import and export operations, through partners' }
        ],
        jornada: [
          { titulo: 'International sourcing', texto: 'We identify, audit and negotiate with reliable global manufacturers with high production capacity and full compliance.' },
          { titulo: 'Development & private label', texto: 'We create exclusive lines, fine-tune specifications and develop private brands with competitive edges.' },
          { titulo: 'Audit & approval', texto: 'Technical assessment of factories, processes, certifications and quality standards before production.' },
          { titulo: 'Production follow-up', texto: 'Continuous monitoring of schedule and execution to ensure deadlines and consistent final results.' },
          { titulo: 'Quality control', texto: 'Pre-shipment inspections, lab tests, detailed reports and lot validation before shipping.' },
          { titulo: 'Logistics & customs clearance', texto: 'Door-to-door operation with predictability, lower risk and full documentary and customs compliance.' },
          { titulo: 'Distribution in Brazil', texto: 'Delivery to the DC or store, with traceability and efficiency across the whole chain.' }
        ],
        pilares: [
          { titulo: 'Strategic consulting and planning', itens: ['Supply chain consulting', 'International business plans', 'Risk management', 'Sustainability consulting'] },
          { titulo: 'Product development and sourcing', itens: ['Product development', 'Procurement: supplier search', 'Portfolio of validated products', 'Packaging development'] },
          { titulo: 'Quality and compliance', itens: ['Testing laboratory', 'Product certification', 'Quality management', 'Supplier audits'] },
          { titulo: 'Technology', itens: ['Project management platform', 'Data analysis and product suggestions', 'Process automation'] },
          { titulo: 'Financial services', itens: ['Tax incentives', 'Operations financing', 'Tax consulting', 'Foreign exchange management', 'Credit insurance'] },
          { titulo: 'Logistics and operations', itens: ['International logistics and customs brokerage', 'International insurance', 'Warehousing and distribution', 'Factory monitoring and shipment inspection', 'Special project management'] }
        ],
        diferenciais: [
          { titulo: 'Real competitiveness', texto: 'We optimize international costs and deliver products with excellent value for money to increase your margin.' },
          { titulo: 'A portfolio that sells more', texto: 'Exclusive, solid items tailored to Brazilian consumer expectations.' },
          { titulo: 'Security across the journey', texto: 'Audits, approval and strict control ensure predictability and lower risk.' },
          { titulo: 'End-to-end management', texto: 'You follow everything. We take care of everything, from the factory to your DC.' },
          { titulo: 'Scale and speed', texto: 'A global supplier network and efficient operational flow to meet ongoing demand.' },
          { titulo: 'Full transparency', texto: 'Accurate information, traceability and governance are part of our model.' }
        ],
        categorias: [
          { nome: 'Lighting' }, { nome: 'Electrical materials' }, { nome: 'Flooring & tiles' }, { nome: 'Faucets & bathroom fixtures' }, { nome: 'Bathroom accessories' },
          { nome: 'Hardware and fasteners' }, { nome: 'Tools' }, { nome: 'Construction supplies' }, { nome: 'Finishes' }, { nome: 'Home & garden' }
        ],
        perfis: [
          'Home centers and retail chains', 'Wholesalers and regional distributors', 'Independent stores and local chains',
          'Companies looking to develop a private brand', 'Brazilian manufacturers looking to outsource production abroad'
        ],
        marcas: [
          { linha: 'Import and supply chain', texto: 'Door-to-door imports for manufacturers, wholesalers and retailers: from sourcing to arrival, with market intelligence and a sell-out view.' },
          { linha: 'The new force in building materials', texto: 'Fasteners, tools, electrical and plumbing materials, with factory inspection and stock in Brazil to supply stores and job sites.' },
          { linha: 'Made to last', texto: 'More than 3,000 construction items: hardware, electrical, tools and chemicals. Combines performance and profitability in the store mix.' },
          { linha: 'Construction chemicals', texto: 'Spray paints, expanding foam, silicones, PU40, instant adhesive and liquid colorant, with technical and safety data sheets for each product.' },
          { linha: 'Home and housewares', texto: 'Kitchenware, small appliances, toys and more, with a catalog for quotes.' },
          { linha: 'Private label line', texto: 'A construction materials catalog ready for private label: tools, discs, drill bits, lighting, plumbing and hardware.' },
          { linha: 'Group brand' }
        ],
        modalidades: {
          importacao: [
            { nome: 'On order (Encomenda)', itens: ['FX is closed through partners and the client pays in advance', 'The client does not need a branch in the state', 'Sales invoice for the goods issued to the client'] },
            { nome: 'On account and order (Conta e ordem)', itens: ['FX can be closed through partners or by the client', 'The client needs an established branch in the state', 'Shipment invoice to transfer the goods to the client'] },
            { nome: 'Distribution', itens: ['We buy abroad, import and clear customs through partners', 'Stock is held at partner logistics operators', 'Sales by our commercial team and shipping to the client'] }
          ],
          exportacao: [
            { nome: 'Direct', itens: ['We buy from Brazilian manufacturers and producers and sell worldwide', 'Credit lines for the Brazilian exporter and the global importer'] },
            { nome: 'Indirect', itens: ['We broker exports directly from the Brazilian manufacturer, as a service', 'We open markets for the internationalization of Brazilian companies'] }
          ]
        },
        vantagens: [
          'Know-how in international trade', 'Feasibility studies of products, suppliers and services to reduce costs',
          'Import team qualified in tax and logistics studies', 'Special rates with strategic logistics partners, thanks to high volume',
          'Logistics integration', 'ICMS tax benefit extended across different states', 'Internationalization of Brazilian companies for export',
          'Lower cash outlay during customs clearance', 'Tax and legal department specialized in international trade'
        ],
        escritorios: [
          { pais: 'Brazil', cidade: 'São Paulo · Headquarters' }, { pais: 'China' }, { pais: 'India', cidade: 'New Delhi' },
          { pais: 'United States' }, { pais: 'Hong Kong' }
        ],
        lideranca: [
          { cargo: 'President', bio: 'More than 25 years in sales, 20 of them in construction across Latin America. Extensive experience in the Asian market with major suppliers, director at Abilumi and investor in more than 10 companies, always seeking innovation and sustainable, profitable growth.' },
          { cargo: 'Vice President', bio: 'More than three decades of business leadership. Founder and board member of Tekbond, serving as its CEO for five years after the sale to Saint-Gobain. Invests in plant-based food, carbon credits, real estate and entertainment.' }
        ]
      }
    },

    zh: {
      nome: '中文', html: 'zh-CN',
      descricao: 'Siaga 集团将您的企业与全球优秀制造商相连，管理从采购到交付至您配送中心的整条供应链。旗下拥有 Durax、Durabem 和 WhiteLabel 品牌。',
      t: {
        'nav.grupo': '集团简介', 'nav.jornada': '业务流程', 'nav.servicos': '服务', 'nav.marcas': '品牌', 'nav.presenca': '全球布局', 'nav.contato': '联系我们',
        'hero.olho': '变革性解决方案',
        'hero.h1': '面向<em>建筑</em>行业的智能供应链',
        'hero.lead': 'Siaga 集团将您的企业与全球优秀制造商相连，并管理整条供应链，从产品开发到货物抵港，安全、可预期、极具竞争力。',
        'hero.cta1': '开发我的自有品牌 <span aria-hidden="true">→</span>',
        'hero.cta2': '以我的品牌进口 <span aria-hidden="true">→</span>',
        'grupo.olho': '集团简介',
        'grupo.h2': '连接巴西与全球优秀制造商',
        'grupo.p1': 'Siaga 集团致力于以稳健、安全、以结果为导向的全球运营，提升建筑市场的竞争力。',
        'grupo.p2': '我们在亚洲和巴西进行战略布局，团队融合外贸、采购、产品工程与供应链能力，为希望拓展、创新和赢得市场的企业提供完整解决方案。',
        'grupo.c1': '建材领域专家', 'grupo.c2': '经认证的全球供应商网络', 'grupo.c3': '严格的审核与检验流程',
        'grupo.c4': '安全、透明、可预期的进口', 'grupo.c5': '一体化端到端物流运营',
        'grupo.cardT': '全球运营',
        'grupo.cardP': '通过合作伙伴在 37 个国家开展进出口业务，端到端覆盖整条国际贸易链。',
        'jor.olho': '业务流程', 'jor.h2': '全面的供应链管理，从工厂到您的配送中心',
        'jor.p': '我们承担每一个环节，让您获得有竞争力的成本、有保障的质量和更好卖的产品组合。',
        'serv.olho': '服务', 'serv.h2': '六大领域的一站式解决方案', 'serv.p': '从战略到交付：您的进口所需，一个合作伙伴全部搞定。',
        'dif.olho': '为什么选择 Siaga 集团', 'dif.h2': '让您的产品利润更高、品质更好、更可预期',
        'cat.olho': '产品品类', 'cat.h2': '专注建材核心品类',
        'cat.p': '我们只与经认证的供应商合作，产品线符合巴西市场的要求。', 'cat.mini': '服务对象',
        'mar.olho': '旗下品牌', 'mar.h2': '服务门店与工地的品牌生态',
        'mar.p': '我们的自有品牌采用与服务客户相同的采购、质量和物流体系。',
        'mod.olho': '合作模式', 'mod.h2': '适合您业务的运营模式', 'mod.imp': '进口', 'mod.exp': '出口',
        'mod.icmsT': 'ICMS 税收优惠', 'mod.icmsP': '我们在巴西四个州享有税收优惠：', 'mod.vantT': '与我们合作的优势',
        'pres.olho': '全球布局', 'pres.h2': '业务覆盖巴西、亚洲和美国',
        'pres.p': '当地采购与供应链团队近距离跟进工厂、生产和装运。',
        'lid.olho': '管理团队', 'lid.h2': '深谙建筑行业与亚洲市场的丰富经验',
        'cont.olho': '联系我们', 'cont.h2': '准备好提升您的产品组合了吗？',
        'cont.p': '与我们的专家交流，了解如何安全进口、降低成本并开发极具竞争力的产品。',
        'cont.tel': '电话', 'cont.email': '邮箱', 'cont.sede': '总部', 'cont.sedeTxt': 'R. Surubim, 577, Conj. 121, Brooklin, São Paulo/SP, 巴西',
        'f.h3': '给我们留言', 'f.assunto': '主题',
        'f.op1': '开发我的自有品牌', 'f.op2': '以我的品牌进口', 'f.op3': '了解集团旗下品牌', 'f.op4': '其他',
        'f.nome': '姓名', 'f.empresa': '公司', 'f.email': '邮箱', 'f.fone': '电话 / WhatsApp', 'f.msg': '留言',
        'f.verifica': '验证：<b id="contaTxt">2 + 3</b> 等于多少？',
        'f.aceite': '我同意 Siaga 集团就此需求与我联系。',
        'f.enviar': '发送留言 <span aria-hidden="true">→</span>',
        'f.okT': '留言已发送', 'f.okP': '感谢您的联系，我们的团队会尽快通过邮箱或电话回复您。', 'f.voltar': '返回首页',
        'rod.copy': '© <span id="ano"></span> Grupo Siaga · Siaga Trading.'
      },
      js: {
        visitar: '访问网站', enviando: '发送中…', contaErrada: '答案不正确，请重新计算。',
        erroEnvio: '暂时无法发送，请稍后再试或直接联系我们：', voltando: '{s} 秒后返回首页'
      },
      dados: {
        numeros: [
          { rotulo: '经评估和认证的国际供应商' },
          { rotulo: '服务的零售及批发企业' },
          { rotulo: '经全面质量控制检验的批次' },
          { rotulo: '通过合作伙伴开展进出口业务的国家' }
        ],
        jornada: [
          { titulo: '国际采购', texto: '识别、审核并洽谈可靠的全球制造商，确保其具备高产能并完全合规。' },
          { titulo: '产品开发与自有品牌', texto: '打造独家产品线，调整产品规格，开发具有竞争优势的自有品牌。' },
          { titulo: '审核与认证', texto: '投产前对工厂、流程、认证及质量标准进行技术评估。' },
          { titulo: '生产跟进', texto: '持续跟踪生产进度与执行情况，确保交期和最终结果的一致性。' },
          { titulo: '质量控制', texto: '装运前检验、实验室测试、详细报告，发货前完成批次验收。' },
          { titulo: '物流与清关', texto: '门到门运营，可预期、低风险，单证与海关手续完全合规。' },
          { titulo: '巴西境内配送', texto: '送达配送中心或门店，全程可追溯、高效率，打通整条供应链。' }
        ],
        pilares: [
          { titulo: '咨询与战略规划', itens: ['供应链咨询', '国际商业计划', '风险管理', '可持续发展咨询'] },
          { titulo: '产品开发与采购', itens: ['产品开发', '采购：寻找供应商', '经验证的产品组合', '包装开发'] },
          { titulo: '质量与合规', itens: ['测试实验室', '产品认证', '质量管理', '供应商审核'] },
          { titulo: '技术', itens: ['项目管理平台', '数据分析与选品建议', '流程自动化'] },
          { titulo: '金融服务', itens: ['税收优惠', '业务融资', '税务咨询', '外汇管理', '信用保险'] },
          { titulo: '物流与运营', itens: ['国际物流与报关', '国际保险', '仓储与配送', '工厂监控与装运检验', '特殊项目管理'] }
        ],
        diferenciais: [
          { titulo: '真正的竞争力', texto: '我们优化国际成本，提供高性价比的产品，提升您的利润率。' },
          { titulo: '更好卖的产品组合', texto: '独家、可靠、符合巴西消费者期望的产品。' },
          { titulo: '全程安全保障', texto: '审核、认证与严格管控，确保可预期并降低风险。' },
          { titulo: '端到端管理', texto: '一切进展尽在掌握。从工厂到您的配送中心，全部由我们负责。' },
          { titulo: '规模与速度', texto: '全球供应商网络与高效运营流程，满足持续的需求。' },
          { titulo: '完全透明', texto: '准确的信息、可追溯性和良好治理是我们模式的一部分。' }
        ],
        categorias: [
          { nome: '照明' }, { nome: '电气材料' }, { nome: '地板与墙面砖' }, { nome: '卫浴五金' }, { nome: '浴室配件' },
          { nome: '五金与紧固件' }, { nome: '工具' }, { nome: '施工用品' }, { nome: '装饰材料' }, { nome: '家居与园艺' }
        ],
        perfis: ['建材超市与零售连锁', '批发商与区域经销商', '独立门店与本地连锁', '希望开发自有品牌的企业', '希望将生产外包至海外的巴西制造企业'],
        marcas: [
          { linha: '进口与供应链', texto: '为制造商、批发商和零售商提供门到门进口服务：从采购到到港，结合市场洞察与终端销售视角。' },
          { linha: '建材新力量', texto: '紧固件、工具、电气及水暖材料，工厂验货，巴西本地库存，为门店和工地供货。' },
          { linha: '经久耐用', texto: '3000 多种建材产品：五金、电气、工具和化工产品，兼顾门店的性能与利润。' },
          { linha: '建筑化工', texto: '喷漆、发泡胶、硅酮胶、PU40、瞬干胶和液体色浆，每款产品均附技术数据表和安全数据表。' },
          { linha: '家居用品', texto: '厨房用品、小家电、玩具等，提供询价目录。' },
          { linha: '自有品牌产品线', texto: '可直接贴牌的建材目录：工具、切割片、钻头、照明、水暖和五金。' },
          { linha: '集团品牌' }
        ],
        modalidades: {
          importacao: [
            { nome: '委托进口（Encomenda）', itens: ['通过合作伙伴结汇，客户预付货款', '客户无需在该州设立分公司', '向客户开具货物销售发票'] },
            { nome: '代理进口（Conta e ordem）', itens: ['可通过合作伙伴或由客户自行结汇', '客户须在该州设有正式分公司', '开具调拨发票，将货物转交客户'] },
            { nome: '分销', itens: ['我们通过合作伙伴在海外采购、进口并清关', '库存存放于合作物流仓库', '由我们的销售团队销售并发货给客户'] }
          ],
          exportacao: [
            { nome: '直接出口', itens: ['我们向巴西制造商和生产商采购，并销往全球', '为巴西出口商和全球进口商提供信贷额度'] },
            { nome: '间接出口', itens: ['以服务形式，直接从巴西制造商处代理出口', '为巴西企业开拓国际市场'] }
          ],
          icms: ['南里奥格兰德州', '圣卡塔琳娜州', '圣埃斯皮里图州', '阿拉戈斯州']
        },
        vantagens: [
          '国际贸易专业经验', '对产品、供应商和服务进行可行性研究，降低成本', '精通税务与物流研究的进口团队',
          '凭借大批量，与战略物流伙伴享有特殊费率', '物流一体化', '在多个州享有 ICMS 税收优惠', '助力巴西企业国际化出口',
          '减少清关环节的资金占用', '专注国际贸易的财税及法务部门'
        ],
        escritorios: [
          { pais: '巴西', cidade: '圣保罗 · 总部' }, { pais: '中国', cidade: '杭州' }, { pais: '印度', cidade: '新德里' },
          { pais: '美国', cidade: '迈阿密 · Siaga Trading LLC' }, { pais: '中国香港', cidade: '湾仔' }
        ],
        lideranca: [
          { cargo: '总裁', bio: '拥有超过 25 年的商务经验，其中 20 年深耕拉丁美洲建筑行业。与亚洲大型供应商合作经验丰富，现任 Abilumi 董事，并投资了 10 多家企业，始终致力于创新以及可持续、可盈利的增长。' },
          { cargo: '副总裁', bio: '三十余年企业领导经验。Tekbond 创始人兼董事会成员，在 Tekbond 出售给圣戈班（Saint-Gobain）后担任首席执行官五年。投资领域涵盖植物基食品、碳信用、房地产和娱乐。' }
        ]
      }
    }
  };

  // Idioma escolhido: ?lang=, depois a última escolha salva, senão português
  var lang = (location.search.match(/[?&]lang=(pt|en|zh)\b/) || [])[1];
  try { if (lang) localStorage.setItem('idioma', lang); else lang = localStorage.getItem('idioma'); } catch (e) {}
  if (!IDIOMAS[lang]) lang = 'pt';
  var I = IDIOMAS[lang];

  // Textos de interface usados por main.js (com o português como padrão)
  var PT_JS = { visitar: 'Visitar site', enviando: 'Enviando…', contaErrada: 'Resposta incorreta. Confira a conta.',
    erroEnvio: 'Não foi possível enviar agora. Tente de novo em instantes ou fale com a gente:', voltando: 'Voltando ao início em {s} s' };
  window.IDIOMA = lang;
  window.T = function (chave) { return (I && I.js[chave]) || PT_JS[chave]; };

  // Mescla a tradução nos dados: listas item a item, objetos campo a campo
  function mesclar(alvo, fonte) {
    Object.keys(fonte).forEach(function (k) {
      var v = fonte[k];
      if (v && typeof v === 'object' && alvo[k] && typeof alvo[k] === 'object') {
        if (Array.isArray(v)) v.forEach(function (item, i) {
          if (item && typeof item === 'object' && alvo[k][i] && typeof alvo[k][i] === 'object') mesclar(alvo[k][i], item);
          else alvo[k][i] = item;
        });
        else mesclar(alvo[k], v);
      } else alvo[k] = v;
    });
  }

  if (I) {
    document.documentElement.lang = I.html;
    document.documentElement.classList.add('idioma-' + lang);
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = I.descricao;
    document.querySelectorAll('[data-t]').forEach(function (el) {
      var txt = I.t[el.getAttribute('data-t')];
      if (txt != null) el.innerHTML = txt;
    });
    mesclar(window.SIAGA, I.dados);
    var campo = document.getElementById('fIdioma');
    if (campo) campo.value = I.nome;
  }

  // Botões PT / EN / 中文: recarrega no idioma escolhido, mantendo a seção atual, sem repetir a tela de carregamento
  document.querySelectorAll('.idiomas [data-lang]').forEach(function (b) {
    var ativo = b.getAttribute('data-lang') === lang;
    b.setAttribute('aria-pressed', ativo);
    b.addEventListener('click', function () {
      var novo = b.getAttribute('data-lang');
      if (novo === lang) return;
      try { localStorage.setItem('idioma', novo); sessionStorage.setItem('trocaIdioma', '1'); } catch (e) {}
      var url = location.pathname + (novo === 'pt' ? '' : '?lang=' + novo) + location.hash;
      location.href = url;
    });
  });
})();
