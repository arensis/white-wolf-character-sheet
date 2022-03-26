# WhiteWolfCharacterSheet

El proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) versión 13.2.3. 

## Arranque en local

Levanta el servidor en local con la configuración del entorno de desarrollo. Navegar a `http://localhost:4200/`. La aplicación recargará automáticamente si se realiza algún cambio en el código fuente.

  ```bash
  $ npm start
  ```

## Build

Construye el proyecto para el entorno de producción. La construcción de los artefactos será guardada en el directorio `docs/`.

  ```bash
  $ npm run build
  ```

## Desplegar en Github Pages

Para poder efectuar el despliegue en Github Pages se ha configurado una rama que contendrá el fuente `gh-pages`. Para poder publicar en la rama se ha instalado la librería [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) para facilitar la publicación y se ha configurado ciertos parámetros para el entorno de producción en el fichero angular.json. Para poder efectuar un despliegue basta con situarse en la rama main y ejecutar el comando: 

  ```bash
  npm run deploy
  ```

