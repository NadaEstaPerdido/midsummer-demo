# Demo de portada · Midsummer Colombia

Propuesta de NEP IA: solo la portada (Inicio), en HTML + CSS + JS estático, sin build. El sitio final se construye en WordPress.

Todo el contenido de proyectos, cifras, ciudades, instaladores y asesores es **de ejemplo**.

## Verla en local

```bash
cd site
python3 -m http.server 8080
# abrir http://localhost:8080
```

(También sirve abrir `site/index.html` directo en el navegador.)

## Desplegar en Vercel

1. Importar este repositorio en Vercel. `vercel.json` ya indica que se publique la carpeta `site/` (sin build) y agrega el encabezado `X-Robots-Tag: noindex, nofollow`.
2. **Contraseña**: en el proyecto de Vercel → *Settings → Deployment Protection* → activar *Password Protection* (o *Vercel Authentication*) para todos los despliegues, incluido producción. La contraseña no va en el código.
3. Compartir la URL y la contraseña con el cliente por un canal privado.

## Protección incluida

- `noindex,nofollow` en la página, `robots.txt` que bloquea todo y encabezado `X-Robots-Tag`.
- Marca de agua diagonal fija: «Propuesta de NEP IA para Midsummer Colombia · Demo, no apta para uso».
- Vence: desde el 2 de noviembre de 2026 (hora Colombia), o sea pasada la fecha 2026-11-01, la página solo muestra «Esta propuesta venció. Escríbenos: nepiapro3000@gmail.com». Sin JavaScript no se muestra nada.
- Sin fotos ni fuentes en el repo: las imágenes son SVG y bloques de color.

## Capturas

- `capturas/portada.png`: primera pantalla en computador.
- `capturas/portada-celular.png`: primera pantalla en celular.
- `capturas/portada-completa-computador.png`: página completa en computador.
