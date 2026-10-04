# Demo web · Midsummer Colombia (propuesta de NEP IA)

Demo de **solo la portada (Inicio)** del sitio que NEP IA cotizó a Midsummer Colombia ($11.000.000 + $1.500.000/mes). Su único fin: que Compras (Cristian Ochoa Morales) vea cómo quedaría y diga que sí al contrato. No es el sitio final: el final se construye en WordPress.

## Qué construir (carpeta `site/`, HTML + CSS + JS estático, sin dependencias de build)
- Una sola página, en español, para celular y computador.
- Lee primero `REFERENCIA-MARCA.md` (colores, tipografía y estructura medidos en la web real de la casa matriz, con capturas `ref-*.jpg`) y `REQUISITOS-CLIENTE.md` (lo que pidió el cliente). La web de referencia es https://midsummer.se/en/, pero este entorno no la abre: usa esos archivos, no la memoria. La demo debe verse clara y menta, no oscura. No copies fotos ni textos completos de esa web. Excepción decidida por el dueño del proyecto (4-oct-2026): el logo original va en la demo (`site/img/logo-midsummer*.png`, recortado de `ref-2-productos.jpg`) hasta que el cliente entregue el manual de marca. Fotos: solo con licencia libre (Unsplash, Pexels, Wikimedia CC0/CC-BY), en baja resolución.
- Menú, con estos nombres exactos: Inicio, Tecnología, Proyectos en Colombia, Instaladores y Aliados, Red de Instaladores Autorizados, Contacto.
- La portada muestra un adelanto de cada sección: héroe con propuesta de valor, Tecnología (3 bloques), Proyectos en Colombia (3 tarjetas), Instaladores y Aliados (llamado a unirse), Red de Instaladores Autorizados (mapa simple y filtros de mentira), formulario de contacto avanzado (no envía nada; muestra que cada mensaje llegaría al asesor según tipo de consulta y ciudad).
- Un enlace visible a Midsummer Suecia (midsummer.se). El cliente aprobó los enlaces cruzados entre ambos sitios, pero el sitio de Colombia es independiente: nada incrustado ni sincronizado con Suecia.
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
