# Sistema Académico ESAM - Menú Principal

Este proyecto es una implementación de un sistema de menú simple para el sistema académico de ESAM. Utiliza **React** para crear componentes reutilizables y dinámicos que representan los diferentes botones del menú, cada uno con su propia imagen y título. Los estilos y la estructura se basan en el diseño proporcionado en el archivo estático original (`index.html` y CSS) los cuales fueron integrados en este nuevo proyecto de React.

## Estructura del Proyecto
La aplicación consta de los siguientes componentes y carpetas principales:

- `src/components/menu-button.component.jsx`: Componente reutilizable para crear botones del menú con imágenes y títulos dinámicos.
- `src/styles/`: Carpeta que contiene los estilos originales (`app.1af6b734.css` y `chunk-vendors.2e51402a.css`).
- `src/images/`: Carpeta con las imágenes utilizadas en los botones del menú.
- `src/App.js`: Archivo principal que organiza los componentes y renderiza la interfaz del sistema de menú.
- `src/images.js`: Archivo que centraliza las importaciones de todas las imágenes, facilitando su uso y gestión.

## Instrucciones de Instalación
Para ejecutar este proyecto localmente, sigue los siguientes pasos:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/belenfrancoc/coding-challenge-esam.git

2. **Navega al directorio del proyecto**
   cd prueba-tecnica-esam
   
4. **Instalar las dependencias necesarias**:
   se debe tener instalado npm en caso de que no corre el siguiente comando en la terminal
   npm install

   
6. **Ejecutar la aplicacion**:
   Para ejecutar la aplicación localmente, usa el siguiente comando:
   npm start

   la aplicacion deberia ejecuarse en **localhost:3000**

## Descripcion del componente menu-button.component.jsx

El componente MenuButton es un componente reutilizable que representa un botón con una imagen y un título dinámico. Este componente acepta las siguientes props:
titulo: El texto que se mostrará en el botón.
imagen: La ruta de la imagen que se mostrará dentro del botón.

## Implementacion del componente
El componente MenuButton se usa dentro de App.js y es renderizado en grupos dentro de un contenedor v-row para organizar los botones en filas. Cada botón se pasa con un título e imagen específicos.
