# Manifest 

## Dependencias necesarias:

Angular 17.2.1.
Node 20.11.1

## Estructura del Proyecto

/manifest
│
├── /src                    # Contiene los archivos fuente de la aplicación
│   ├── /app                # Componentes y servicios de la aplicación
│   │   ├── /services 	     # Servicio para hacer funcionar el menú móvil
│   │   ├── /shared 
│ 	    	  ├── /buttons                # Componentes button
│ 	    	  ├── /card                   # Componente card
│ 	    	  ├── /chips                  # Componentes chips
│ 	    	  ├── /footer                 # Componente footer
│ 	    	  ├── /form                   # Componente formulario
│ 	    	       ├── /input             # Componente input
│ 	    	       ├── /textarea          # Componente textarea
│ 	    	  ├── /header                 # Componente logo y navegación desktop
│ 	    	       ├── /nav               # Componente navegación desktop
│ 	    	  ├── /headerMobile           # Componente logo y navegación desktop
│ 	    	       ├── /navMobile         # Componente navegación móvil
│ 	    	  ├── /hero                   # Componente de la cabecera de inicio
│ 	    	  ├── /layout                 # Componentes layout para imágenes y textos
│ 	    	       ├── /layoutImgLeft     # Componente layout de texto derecha e imagen izquierda
│ 	    	       ├── /layoutImg Right   # Componente layout de texto izquierda e imagen derecha
│ 	    	       ├── /mosaic            # Componente mosaico de imágenes
│ 	    	  ├── /link                   # Componente link
│ 	    	  ├── /separator              # Componente separador
│ 	    	  ├── /table                  # Componente table
│   ├── /assets                           # Archivos estáticos (imágenes, iconos, etc.)
│   ├── /styles     		               # Archivos globales de estilos SCSS
│ 	    	  ├── /_colors.scss           # Estilos scss de colores
│ 	    	  ├── /_typograpfy.scss       # Estilos scss relacionados con la tipografía
│ 	    	  ├── /_variables.scss        # Estilos scss para otras variables
│   └── index.html          # HTML principal de la aplicación
│
├── /node_modules           # Dependencias del proyecto (generadas por npm)
├── angular.json            # Configuración principal de Angular
├── package.json            # Gestión de dependencias y scripts del proyecto
├── README.md               # Este archivo de documentación
└── tsconfig.json  

1. Página de inicio: Toda la pagina de inicio está en el componente "app"

2. Buttons: Dos componentes diferentes dependiendo del tamaño y los iconos. Para estilarlos se les pasa unas variables.

3. Cards: Tiene en su interior otros componentes de (chips) y (buttons).

4. Chips: Dos componentes diferentes según el tamaño e icono para mostrar información diferente.

5. Footer: Muestra la información de contacto, enlaces rápidos y redes sociales.

6. Form: Es el formulario de contacto. En este componente hay varios componentes adicionales como inputs, textarea y botones.

7. Header: Contiene el logotipo, menú de navegación (componente nav). Hay dos componentes diferentes para diferente tamaño de dispositivo.

8. Hero: Se trata de la cabecera general de la página. Dentro de este componente hay otros componentes: header, nav, separator y button.

9. Layout: Son tres coomponentes, dos de ellos tienen width:100% de ancho de pägina (layourImgLeft y layourImgRight). El componente mosaico para mostrar imagenes en diferentes tamaños.

10. Link: Es un componente creado independientemente y está metido dentro del (footer). 

11. Separador: Es un componente creado independientemente y está metido dentro del (footer y hero). 

12. Table: Componente para estilar la tabla de precios
_________________________________________________________________________________

## Instrucciones para Levantar y Ejecutar el Proyecto

### 1. Clonar el repositorio en tu máquina local:

git clone https://github.com/tu-usuario/manifest.git

### 2. Instalar las dependencias:

cd manifest
npm install

### 3. Levantar el Servidor de Desarrollo:

ng serve
