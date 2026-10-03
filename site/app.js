// Demo de portada · Midsummer Colombia (NEP IA)
// Todo es de ejemplo: no hay datos reales ni envíos.
(function () {
  'use strict';

  // ---------- Menú móvil ----------
  var boton = document.querySelector('.menu-boton');
  var menu = document.getElementById('menu');
  boton.addEventListener('click', function () {
    var abierto = menu.classList.toggle('abierto');
    boton.setAttribute('aria-expanded', String(abierto));
    boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('abierto');
      boton.setAttribute('aria-expanded', 'false');
    }
  });

  // ---------- Red de instaladores (ejemplo) ----------
  var ciudades = {
    'Barranquilla': { x: 142, y: 34 },
    'Medellín':     { x: 112, y: 128 },
    'Bucaramanga':  { x: 172, y: 108 },
    'Bogotá':       { x: 156, y: 168 },
    'Cali':         { x: 96,  y: 202 }
  };
  var instaladores = [
    { nombre: 'Instalador Ejemplo A', ciudad: 'Bogotá',       tipos: ['residencial', 'comercial'] },
    { nombre: 'Instalador Ejemplo B', ciudad: 'Bogotá',       tipos: ['industrial'] },
    { nombre: 'Instalador Ejemplo C', ciudad: 'Medellín',     tipos: ['residencial', 'comercial', 'industrial'] },
    { nombre: 'Instalador Ejemplo D', ciudad: 'Cali',         tipos: ['comercial', 'industrial'] },
    { nombre: 'Instalador Ejemplo E', ciudad: 'Barranquilla', tipos: ['industrial', 'comercial'] },
    { nombre: 'Instalador Ejemplo F', ciudad: 'Bucaramanga',  tipos: ['residencial'] }
  ];
  var nombresTipo = { residencial: 'Residencial', comercial: 'Comercial', industrial: 'Industrial' };

  var filtroCiudad = document.getElementById('filtro-ciudad');
  var filtroTipo = document.getElementById('filtro-tipo');
  var lista = document.getElementById('red-lista');
  var capaPuntos = document.getElementById('mapa-puntos');
  var svgNS = 'http://www.w3.org/2000/svg';
  var puntos = {};

  Object.keys(ciudades).forEach(function (nombre) {
    var c = ciudades[nombre];
    var g = document.createElementNS(svgNS, 'g');
    g.setAttribute('class', 'punto');
    var circulo = document.createElementNS(svgNS, 'circle');
    circulo.setAttribute('cx', c.x);
    circulo.setAttribute('cy', c.y);
    circulo.setAttribute('r', 6);
    var texto = document.createElementNS(svgNS, 'text');
    texto.setAttribute('x', c.x + 10);
    texto.setAttribute('y', c.y + 4);
    texto.textContent = nombre;
    g.appendChild(circulo);
    g.appendChild(texto);
    capaPuntos.appendChild(g);
    puntos[nombre] = { g: g, circulo: circulo };
  });

  function filtrar() {
    var ciudad = filtroCiudad.value;
    var tipo = filtroTipo.value;
    var visibles = instaladores.filter(function (i) {
      return (!ciudad || i.ciudad === ciudad) && (!tipo || i.tipos.indexOf(tipo) !== -1);
    });

    lista.innerHTML = '';
    if (!visibles.length) {
      var vacio = document.createElement('li');
      vacio.className = 'vacio';
      vacio.textContent = 'No hay instaladores de ejemplo con esos filtros.';
      lista.appendChild(vacio);
    }
    visibles.forEach(function (i) {
      var li = document.createElement('li');
      var nombre = document.createElement('strong');
      nombre.textContent = i.nombre;
      var detalle = document.createElement('span');
      detalle.textContent = i.ciudad + ' · ' + i.tipos.map(function (t) { return nombresTipo[t]; }).join(', ');
      li.appendChild(nombre);
      li.appendChild(detalle);
      lista.appendChild(li);
    });

    Object.keys(puntos).forEach(function (nombre) {
      var cuantos = visibles.filter(function (i) { return i.ciudad === nombre; }).length;
      puntos[nombre].g.classList.toggle('apagado', cuantos === 0);
      puntos[nombre].circulo.setAttribute('r', cuantos ? 5 + cuantos * 2 : 4);
    });
  }
  filtroCiudad.addEventListener('change', filtrar);
  filtroTipo.addEventListener('change', filtrar);
  filtrar();

  // ---------- Formulario con enrutamiento (demo) ----------
  var regiones = {
    'Bogotá': 'Centro-Oriente',
    'Bucaramanga': 'Centro-Oriente',
    'Medellín': 'Antioquia y Eje Cafetero',
    'Cali': 'Pacífico',
    'Barranquilla': 'Caribe',
    'Otra ciudad': 'Nacional'
  };
  var equipos = {
    residencial: { cargo: 'Asesor residencial', regional: true },
    empresa:     { cargo: 'Asesor de proyectos comerciales e industriales', regional: true },
    instalador:  { cargo: 'Coordinación de la Red de Instaladores', regional: false },
    soporte:     { cargo: 'Soporte técnico y garantías', regional: true },
    prensa:      { cargo: 'Comunicaciones y alianzas', regional: false }
  };

  var form = document.getElementById('formulario');
  var fTipo = document.getElementById('f-tipo');
  var fCiudad = document.getElementById('f-ciudad');
  var campoTecho = document.getElementById('campo-techo');
  var rutaAsesor = document.getElementById('ruta-asesor');
  var rutaDetalle = document.getElementById('ruta-detalle');
  var aviso = document.getElementById('form-aviso');

  function enrutar() {
    var tipo = fTipo.value;
    var ciudad = fCiudad.value;
    campoTecho.classList.toggle('campo-oculto', tipo !== '' && tipo !== 'residencial' && tipo !== 'empresa');

    if (!tipo || !ciudad) {
      rutaAsesor.textContent = !tipo && !ciudad
        ? 'Elige tipo de consulta y ciudad'
        : (!tipo ? 'Falta el tipo de consulta' : 'Falta la ciudad');
      rutaDetalle.textContent = 'El sitio enruta cada formulario automáticamente.';
      return null;
    }
    var equipo = equipos[tipo];
    var region = equipo.regional ? regiones[ciudad] : 'Nacional';
    rutaAsesor.textContent = equipo.cargo + ' · ' + (region === 'Nacional' ? 'equipo nacional' : 'región ' + region);
    rutaDetalle.textContent = 'Asesor de ejemplo. Recibe el mensaje con copia al CRM y responde en horario hábil.';
    return rutaAsesor.textContent;
  }
  fTipo.addEventListener('change', enrutar);
  fCiudad.addEventListener('change', enrutar);

  document.querySelectorAll('[data-tipo]').forEach(function (a) {
    a.addEventListener('click', function () {
      fTipo.value = a.getAttribute('data-tipo');
      enrutar();
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var destino = enrutar();
    if (!destino) {
      aviso.classList.remove('ok');
      aviso.textContent = 'Elige tipo de consulta y ciudad para ver a quién llegaría.';
      return;
    }
    aviso.classList.add('ok');
    aviso.textContent = 'Demo: en el sitio real este mensaje llegaría a ' + destino + '. No se envió ni guardó nada.';
  });
})();
