(function () {
  var D = window.SIAGA;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var lis = function (itens) { return itens.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join(''); };

  // Números (contam ao aparecer na tela)
  $('numeros').innerHTML = D.numeros.map(function (n) {
    return '<div class="numero"><strong><span class="contador" data-alvo="' + n.valor + '">' + n.valor + '</span>' +
      (n.prefixo ? '<sup>' + esc(n.prefixo) + '</sup>' : '') + '</strong><span>' + esc(n.rotulo) + '</span></div>';
  }).join('');

  $('listaJornada').innerHTML = D.jornada.map(function (j, i) {
    return '<li><span class="jornada__n">' + String(i + 1).padStart(2, '0') + '</span><h3>' + esc(j.titulo) + '</h3><p>' + esc(j.texto) + '</p></li>';
  }).join('');

  $('listaPilares').innerHTML = D.pilares.map(function (p, i) {
    return '<article class="pilar"><span class="pilar__n">' + (i + 1) + '</span><h3>' + esc(p.titulo) + '</h3><ul>' + lis(p.itens) + '</ul></article>';
  }).join('');

  $('listaDiferenciais').innerHTML = D.diferenciais.map(function (d) {
    return '<article class="dif"><img src="' + d.img + '" alt="" loading="lazy"><div><h3>' + esc(d.titulo) + '</h3><p>' + esc(d.texto) + '</p></div></article>';
  }).join('');

  $('listaCategorias').innerHTML = D.categorias.map(function (c) {
    return '<li><img src="assets/icones/icn-' + c.icone + '.svg" alt="" width="28" height="28">' + esc(c.nome) + '</li>';
  }).join('');
  $('listaPerfis').innerHTML = lis(D.perfis);

  $('listaMarcas').innerHTML = D.marcas.filter(function (m) { return !m.oculta; }).map(function (m) {
    var tag = m.url ? 'a' : 'div';
    var attrs = m.url ? ' href="' + m.url + '" target="_blank" rel="noopener"' : '';
    var logo = m.logo ? '<img src="' + m.logo + '" alt="' + esc(m.nome) + '" loading="lazy">' : '<span class="marca__nome">' + esc(m.nome) + '</span>';
    return '<' + tag + ' class="marca' + (m.url ? '' : ' marca--sem-link') + '"' + attrs + '>' +
      '<div class="marca__logo">' + logo + '</div>' +
      '<small>' + esc(m.linha) + '</small>' +
      (m.texto ? '<p>' + esc(m.texto) + '</p>' : '') +
      (m.url ? '<span class="marca__ir">Visitar site <span aria-hidden="true">↗</span></span>' : '') +
      '</' + tag + '>';
  }).join('');

  // Modalidades: abas Importação / Exportação
  function mostrarModo(qual) {
    $('painelImp').innerHTML = D.modalidades[qual].map(function (m) {
      return '<article class="modo"><h3>' + esc(m.nome) + '</h3><ul>' + lis(m.itens) + '</ul></article>';
    }).join('');
    document.querySelectorAll('.abas button').forEach(function (b) {
      var ativa = b.dataset.aba === qual;
      b.setAttribute('aria-selected', ativa);
      if (ativa) $('painelImp').setAttribute('aria-labelledby', b.id);
    });
  }
  document.querySelectorAll('.abas button').forEach(function (b) {
    b.addEventListener('click', function () { mostrarModo(b.dataset.aba); });
  });
  mostrarModo('importacao');
  $('listaIcms').innerHTML = lis(D.modalidades.icms);
  $('listaVantagens').innerHTML = lis(D.vantagens);

  $('listaEscritorios').innerHTML = D.escritorios.map(function (e) {
    return '<article class="escritorio"><span class="escritorio__sigla">' + e.sigla + '</span><div><h3>' + esc(e.pais) + '</h3><strong>' + esc(e.cidade) + '</strong>' +
      (e.endereco ? '<p>' + esc(e.endereco) + '</p>' : '') + '</div></article>';
  }).join('');

  $('listaLideranca').innerHTML = D.lideranca.map(function (l) {
    var iniciais = l.nome.split(' ').map(function (p) { return p[0]; }).slice(0, 2).join('');
    return '<article class="lider"><span class="lider__ini" aria-hidden="true">' + iniciais + '</span><div><h3>' + esc(l.nome) + '</h3><small>' + esc(l.cargo) + '</small><p>' + esc(l.bio) + '</p></div></article>';
  }).join('');

  // Contato
  var C = D.contato;
  var mailto = function (assunto) { return 'mailto:' + C.email + '?subject=' + encodeURIComponent(assunto); };
  $('telefone').textContent = C.telefone; $('telefone').href = C.telefoneLink;
  $('email').textContent = C.email; $('email').href = 'mailto:' + C.email;
  $('ctaMarca').href = mailto('Quero desenvolver marca própria');
  $('ctaImportar').href = mailto('Quero importar com minha marca');
  document.querySelectorAll('.hero [data-assunto]').forEach(function (a) { a.href = mailto(a.dataset.assunto); });
  $('redes').innerHTML = C.redes.map(function (r) { return '<a href="' + r.url + '" target="_blank" rel="noopener">' + esc(r.nome) + '</a>'; }).join('');
  $('ano').textContent = new Date().getFullYear();

  // Menu no celular
  var btn = $('menuBtn'), menu = $('menu');
  btn.addEventListener('click', function () {
    var aberto = menu.classList.toggle('aberto');
    btn.setAttribute('aria-expanded', aberto);
  });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') { menu.classList.remove('aberto'); btn.setAttribute('aria-expanded', false); } });

  // Cabeçalho sólido ao rolar
  var topo = $('topo');
  var marcarTopo = function () { topo.classList.toggle('topo--solido', window.scrollY > 40); };
  window.addEventListener('scroll', marcarTopo, { passive: true }); marcarTopo();

  // Contadores e entrada suave das seções
  var reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function contar(el) {
    var alvo = +el.dataset.alvo, t0 = null;
    function passo(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / 1600, 1);
      el.textContent = Math.round(alvo * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }
  if ('IntersectionObserver' in window && !reduzir) {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        if (en.target.classList.contains('contador')) contar(en.target);
        else en.target.classList.add('visivel');
        obs.unobserve(en.target);
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.contador').forEach(function (el) { el.textContent = '0'; obs.observe(el); });
    document.querySelectorAll('.cabeca, .jornada li, .pilar, .dif, .marca, .escritorio, .lider').forEach(function (el) { el.classList.add('surge'); obs.observe(el); });
  }
})();
