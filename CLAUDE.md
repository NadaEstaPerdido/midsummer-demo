# Demo web · Midsummer Colombia (propuesta de NEP IA)

Demo de **solo la portada (Inicio)** del sitio que NEP IA cotizó a Midsummer Colombia ($11.000.000 + $1.500.000/mes). Su único fin: que Compras (Cristian Ochoa Morales) vea cómo quedaría y diga que sí al contrato. No es el sitio final: el final se construye en WordPress.

## Qué construir (carpeta `site/`, HTML + CSS + JS estático, sin dependencias de build)
- Una sola página, en español, para celular y computador.
- Estilo: el de la casa matriz Midsummer (Suecia). Mira su web pública (midsummer.se) para colores, tipografía y tono; no copies textos ni imágenes con derechos: usa imágenes de relleno libres o bloques de color.
- Secciones: encabezado con menú (Inicio, Tecnología, Proyectos, Instaladores y Aliados, Red de Instaladores, Contacto), héroe, Tecnología (3 bloques), Proyectos (3 tarjetas), Red de Instaladores (mapa simple + filtros de mentira), formulario de contacto (no envía nada).
- **Nada inventado como si fuera real**: los proyectos, cifras (kWp, ciudades) y nombres son de ejemplo y deben decir «Ejemplo» en la tarjeta.

## Protección (obligatoria)
- `<meta name="robots" content="noindex,nofollow">` y un `robots.txt` que bloquee todo.
- Marca de agua diagonal fija sobre toda la página: «Propuesta de NEP IA para Midsummer Colombia · Demo, no apta para uso».
- Vencimiento: pasada la fecha 2026-11-01, la página solo muestra «Esta propuesta venció. Escríbenos: nepiapro3000@gmail.com».
- Imágenes de baja resolución; sin archivos descargables ni fuentes originales en el repo.
- La contraseña NO va en el código (un candado en JavaScript no protege nada). Se pone en el hosting (Vercel).

## Reglas
- Nada de llaves, tokens ni datos de clientes en el repo.
- Al terminar: `README.md` corto con cómo verla en local y cómo desplegarla, y una captura de la portada en `capturas/`.
