# Alphabet

Aplicación en vanilla JavaScript moderno usando WebPack con una configuración personalizada al mismo y Babel.
A pesar de usar WebPack, también se usa el Patrón Modulo.
El código es limpio y los comentarios son mínimos, informando de que hay a continuación (events, HTML references...).

## Funcionamiento:

La app genera una letra del alfabeto español aleatoriamente, junto con la posición que ocupa.
Dispone de dos modos que se pueden cambiar con dos botones:
- En el primero (seleccionado por defecto) se generará aleatoriamente y se mostrará una letra 
  del alfabeto español, el usuario debe introducir la posición correcta que ocupa esta letra en
  el alfabeto, si es correcta, se la letra cambiará para seguir practicando.

- En el segundo se muestra la posición y el usuario debe conocer e introducir la letra que
  ocupa dicha posición.

## CSS
la configuración en css le da un diseño de neón en modo oscuro.
Todos los elementos de la app tienen un estilo aplicado,

## WebPack
Siempre me gusta usar Webpack con toda aplicación de vanilla JavaScript pues los frameworks modernos ya lo utilizan por defecto, da más facilidad para escalar la aplicación, es como sería en una producción real y puedo aprender más de esta herramienta de paquete de módulos.

Los modulos de node no irán a producción, si no que son dependencias de desarrollo

npm run build:dev para el build de desarrollo
npm run build para el build de producción

### Módulos instalados

Babel traduce JavaScript moderno al estándard ES5 para los navegadores que no soporten las nuevas características. Babel es usado para el webpack de producción, no en el de desarrollo.

html-loader y html-webpack-plugin para mover el index.html a la carpeta de prducción cuando hacemos el build para producción con npm run build

webpack-dev-server permite lanzar la aplicación en un servidor localhost para desarrollo con el comando npm start.

css-loader y style-loader permiten añadir CSS al DOM de producción.

mini-css-extract-plugin crea un archivo CSS para producción por cada archivo JS que requiera CSS 

file-loader para cargar correctamente las imagenes en el build

copy-webpack-plugin copia archivos y directorios al directorio del build, me sirve para las imagenes en la carpeta img

CssMinimizerWebpackPlugin y TerserWebpackPlugin para  optimizar y minimizar el CSS y JS.