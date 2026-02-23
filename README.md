# UD3. JavaScript

Repositorio con las prácticas de la UD3 de JavaScript.

## Contenido

- `UD3. Practica 4`: calculadora con dos modos (decimal y binario) usando manipulación del DOM y eventos.
- `UD3. Practica 5`: generador de códigos QR a partir de texto o URL consumiendo una API externa.
- `UD3. Practica 6`: aplicación del tiempo con búsqueda por ciudad y consulta a OpenWeather.

## Descripción de las prácticas

### UD3. Practica 4 — Calculadora con modos
- Cambia entre **modo decimal** y **modo binario**.
- En modo decimal permite operar: sumar, restar, multiplicar y dividir.
- En modo binario solo permite convertir binario a decimal o decimal a binario.
- Incluye validación de entradas y control de errores (datos no válidos o división por cero).

Archivos principales:
- `UD3. Practica 4/index.html`
- `UD3. Practica 4/styles.css`
- `UD3. Practica 4/script.js`

### UD3. Practica 5 — Generador QR
- Permite introducir un texto o una URL y generar su código QR.
- Utiliza la API pública de `api.qrserver.com` para crear la imagen.
- Muestra validación visual cuando el campo está vacío.

Archivos principales:
- `UD3. Practica 5/index.html`
- `UD3. Practica 5/style.css`
- `UD3. Practica 5/script.js`

### UD3. Practica 6 — App del clima
- Busca una ciudad y muestra información meteorológica actual.
- Consulta la API de OpenWeather con `fetch`.
- Presenta ciudad/país, descripción del clima, temperatura, humedad y viento.
- Cambia la imagen del estado del tiempo según el tipo de clima.

Archivos principales:
- `UD3. Practica 6/index.html`
- `UD3. Practica 6/styles.css`
- `UD3. Practica 6/script.js`
- `UD3. Practica 6/img/`

## Cómo ejecutar

1. Entra en la carpeta de la práctica que quieras abrir.
2. Abre su archivo `index.html` en un navegador.
3. Interactúa con la interfaz para probar la funcionalidad.

## Tecnologías usadas

- HTML5
- CSS3
- JavaScript (ES6)
- APIs HTTP con `fetch`