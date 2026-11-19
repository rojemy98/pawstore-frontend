# PawStore 🐾

Aplicación web desarrollada con React y Vite para una veterinaria y tienda en línea de productos para mascotas.

## Descripción

PawStore permite visualizar un catálogo de productos para mascotas y consultar los detalles de cada producto.

La aplicación cuenta con tres vistas principales:

- **Inicio:** presentación de la tienda.
- **Catálogo:** visualización de los productos disponibles.
- **Detalle de producto:** información individual del producto seleccionado.

Los datos del catálogo provienen exclusivamente del archivo JSON oficial proporcionado para el proyecto.

## Tecnologías utilizadas

- React
- JavaScript
- JSX
- Vite
- HTML5
- CSS3

## Estructura del proyecto

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── ProductList.jsx
│   └── ProductDetail.jsx
│
├── data/
│   └── products.json
│
├── styles/
│
├── App.jsx
├── main.jsx
└── index.css
```

## Requisitos previos

Para ejecutar el proyecto necesitas:

- Node.js
- npm

## Instalación

1. Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

2. Ingresar a la carpeta:

```bash
cd pawstore
```

3. Instalar las dependencias:

```bash
npm install
```

4. Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador la dirección proporcionada por Vite, normalmente:

```text
http://localhost:5173
```

## Compilación para producción

Para generar la versión de producción:

```bash
npm run build
```

Para visualizar localmente la versión compilada:

```bash
npm run preview
```

## Funcionalidades

- Navegación entre las vistas sin recargar la página.
- Componentes funcionales reutilizables.
- Catálogo generado dinámicamente mediante los datos del archivo JSON.
- Visualización del detalle del producto seleccionado.
- Diseño adaptable a diferentes tamaños de pantalla.

## Alcance

Esta versión no incluye autenticación, conexión con backend, administración de productos, carrito de compras ni proceso de checkout.

Rojemy E.
