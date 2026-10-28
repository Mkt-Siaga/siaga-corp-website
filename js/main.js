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
  $('telefone').textContent = C.telefone; $('telefone').href = C.telefoneLink;
  $('email').textContent = C.email; $('email').href = 'mailto:' + C.email;

  // Formulário de contato: os botões do hero já escolhem o assunto; depois do reCAPTCHA o FormSubmit volta com ?enviado=1
  var form = $('formContato');
  document.querySelectorAll('.hero [data-assunto]').forEach(function (a) {
    a.addEventListener('click', function () { $('fInteresse').value = a.dataset.assunto; });
  });
  $('formNext').value = location.href.split(/[?#]/)[0] + '?enviado=1#contato';
  // O FormSubmit demora alguns segundos para abrir o reCAPTCHA: sem esse aviso parece que o botão não fez nada
  form.addEventListener('submit', function () {
    var enviar = form.querySelector('button[type=submit]');
    enviar.disabled = true;
    enviar.innerHTML = 'Enviando…';
    form.classList.add('enviando');
  });
  window.addEventListener('pageshow', function (e) {
    // Ao voltar do FormSubmit pelo botão "voltar", o navegador restaura a página com o botão ainda travado
    if (!e.persisted) return;
    var enviar = form.querySelector('button[type=submit]');
    enviar.disabled = false;
    enviar.innerHTML = 'Enviar mensagem <span aria-hidden="true">→</span>';
    form.classList.remove('enviando');
  });
  if (/[?&]enviado=1/.test(location.search)) {
    form.hidden = true; $('formOk').hidden = false;
    history.replaceState(null, '', location.pathname + '#contato');
  }
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

  // Barra de progresso da rolagem e parallax leve do hero
  var raiz = document.documentElement;
  var anima = raiz.classList.contains('anima'); // definida no <head>, só quando o usuário não pede movimento reduzido
  var barra = document.createElement('div');
  barra.className = 'progresso'; barra.setAttribute('aria-hidden', 'true');
  document.body.appendChild(barra);
  var heroIn = document.querySelector('.hero__in'), agendado = false;
  function aoRolar() {
    agendado = false;
    var y = window.scrollY, total = raiz.scrollHeight - window.innerHeight;
    barra.style.transform = 'scaleX(' + (total > 0 ? y / total : 0) + ')';
    if (anima && y < window.innerHeight) {
      heroIn.style.transform = 'translateY(' + y * 0.3 + 'px)';
      heroIn.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 0.85));
    }
  }
  window.addEventListener('scroll', function () { if (!agendado) { agendado = true; requestAnimationFrame(aoRolar); } }, { passive: true });
  aoRolar();

  // Contadores e composição das seções conforme a rolagem
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
  if (anima && 'IntersectionObserver' in window) {
    // Título do hero sobe palavra por palavra
    var h1 = document.querySelector('.hero h1');
    h1.innerHTML = h1.innerHTML.trim().split(/\s+/).map(function (p, i) {
      return '<span class="palavra"><span style="--i:' + i + '">' + p + '</span></span>';
    }).join(' ');

    var alvos = [];
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        obs.unobserve(el);
        if (el.classList.contains('contador')) { contar(el); return; }
        el.classList.add('visivel');
        // Terminada a entrada, devolve o elemento ao estilo normal (hover sem atraso)
        var espera = (+el.style.getPropertyValue('--i') || 0) * (parseFloat(el.style.getPropertyValue('--passo')) || 90) + 1700;
        setTimeout(function () {
          el.className = el.className.replace(/\s*\br(--\S+)?\b|\s*\bvisivel\b/g, '').trim();
          el.style.removeProperty('--i'); el.style.removeProperty('--passo');
        }, espera);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });

    // tipo: sobe | titulo | esq | dir | escala | cortina; o atraso escalonado usa a posição do elemento entre os irmãos
    function marcar(seletor, tipo, passo) {
      document.querySelectorAll(seletor).forEach(function (el) {
        if (el.classList.contains('r')) return;
        el.classList.add('r', 'r--' + tipo);
        el.style.setProperty('--i', Array.prototype.indexOf.call(el.parentNode.children, el));
        if (passo) el.style.setProperty('--passo', passo + 'ms');
        alvos.push(el);
      });
    }
    document.querySelectorAll('.secao h2, .cta h2').forEach(function (h) { h.innerHTML = '<span class="mascara">' + h.innerHTML + '</span>'; });
    marcar('.secao h2, .cta h2', 'titulo');
    marcar('.checks li', 'esq', 70);
    marcar('.cabeca > *, .duas > div:first-child > :not(.checks), .cta__in > div:first-child > *, .modos__extra h3, .abas', 'sobe');
    marcar('.numero', 'sobe', 120);
    marcar('.jornada li', 'sobe', 120);
    marcar('.pilar, .dif, .modo', 'sobe', 110);
    marcar('.marca', 'sobe', 100);
    marcar('.lider', 'sobe', 140);
    marcar('.cats li', 'escala', 45);
    marcar('.tags li', 'escala', 80);
    marcar('.escritorio', 'escala', 110);
    marcar('.vantagens li', 'esq', 60);
    marcar('.contatos li', 'sobe', 110);
    marcar('.form-contato', 'dir');
    marcar('.grupo-foto', 'cortina');
    marcar('.grupo-foto__card', 'dir', 450);
    document.querySelectorAll('.contador').forEach(function (el) { el.textContent = '0'; alvos.push(el); });

    // Tela de carregamento: sai quando a página carrega (mínimo 1,3 s, máximo 2,8 s), abre o hero e só então começa a observar a rolagem
    var entrou = false;
    function entrar() {
      if (entrou) return;
      entrou = true;
      raiz.classList.add('entrou');
      var tela = document.querySelector('.carregando');
      if (tela) setTimeout(function () { tela.remove(); }, 1200);
      setTimeout(function () { alvos.forEach(function (el) { obs.observe(el); }); }, 700);
    }
    var pronto = function () { setTimeout(entrar, Math.max(0, 1300 - performance.now())); };
    if (document.readyState === 'complete') pronto(); else window.addEventListener('load', pronto);
    setTimeout(entrar, 2800);
  } else {
    var tela = document.querySelector('.carregando');
    if (tela) tela.remove();
  }
})();
