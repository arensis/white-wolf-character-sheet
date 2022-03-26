# WhiteWolfCharacterSheet

El proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) versión 13.2.3. 

## Arranque en local

Ejecutar el comando `npm start` para levantar el servidor en local con la configuración del entorno de desarrollo. Navegar a `http://localhost:4200/`. La aplicación recargará automáticamente si se realiza algún cambio en el código fuente.

- Actualmente no hay página de inicio y hay que navegar directamente a la ruta para la ficha de vampiro edad oscura, por lo que para poder visualizarlo necesitaríamos navegar a `http://localhost:4200/vampire-dark-ages` (la raíz redirigirá de momento a esta versión de la ficha)

## Build

Ejecutar el comando `npm run build` para construir el proyecto para el entorno de producción. La construcción de los artefactos será guardada en el directorio `docs/`.stored in the `docs/` directory.

## Desplegar en Github Pages

Para poder efectuar el despliegue en Github Pages se ha configurado una rama que contendrá el fuente `gh-pages`. Para poder publicar en la rama se ha instalado la librería [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) para facilitar la publicación y se ha configurado ciertos parámetros para el entorno de producción en el fichero angular.json. Para poder efectuar un despliegue basta con situarse en la rama main y ejecutar el comando `npm run deploy`.
