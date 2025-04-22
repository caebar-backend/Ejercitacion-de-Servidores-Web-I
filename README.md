# Ejercicio: Servidor HTTP con Node.js

Este ejercicio está diseñado para practicar y evaluar tus conocimientos sobre la creación de servidores HTTP utilizando el módulo `http` de Node.js.

## Descripción del Ejercicio

Debés crear un servidor HTTP en Node.js que escuche en el puerto 3000 y maneje las siguientes rutas:

| Ruta | Respuesta |
|------|-----------|
| `/` | "Bienvenid@s! Gracias por tu visita." |
| `/nosotros` | "Bienvenid@s a saber + de nosotros :)" |
| `/cursos` | "Te interesan nuestros cursos. Vení a conocer la oferta!" |
| `/contacto` | "Si querés contactarnos, hacelo a este Email: :)" |
| Cualquier otra ruta | Código 404 y mensaje: "No se ha encontrado la ruta ingresada." |

Para todas las rutas, debes establecer el encabezado `Content-Type` como `text/plain` y el conjunto de caracteres a `utf-8`.

## Requisitos Técnicos

1. Utilizar el módulo `http` de Node.js para crear el servidor.
2. Manejar correctamente las rutas especificadas.
3. Configurar correctamente los encabezados de respuesta.
4. Devolver los códigos de estado HTTP apropiados.

## Estructura del Proyecto

```
proyecto/
│
├── src/
│   └── server.js     # Lógica para crear el servidor
│
├── tests/
│   └── server.test.js # Pruebas automatizadas
│
├── index.js          # Punto de entrada que inicia el servidor
├── package.json      # Configuración y dependencias del proyecto
└── README.md         # Este archivo
```

## Instrucciones para Estudiantes

### Prerrequisitos

- Node.js instalado (versión 14 o superior recomendada)
- npm (generalmente viene con Node.js)

### Pasos para Completar el Ejercicio

1. Cloná o descargá este repositorio.
2. Instalá las dependencias:
   ```
   npm install
   ```
3. Implementá la lógica del servidor según los requisitos en los archivos correspondientes:
   - `src/server.js`
   - `index.js`
4. Iniciá el servidor para probarlo manualmente:
   ```
   npm start
   ```
5. Para desarrollo con recarga automática:
   ```
   npm run dev
   ```
6. Verificá que tu implementación pasa todas las pruebas:
   ```
   npm test
   ```

### Cómo Probar Manualmente

1. Inicia el servidor: `npm start`
2. Abre un navegador y visita:
   - `http://localhost:3000/`
   - `http://localhost:3000/nosotros`
   - `http://localhost:3000/cursos`
   - `http://localhost:3000/contacto`
   - Cualquier otra ruta para verificar el manejo de errores 404

## Evaluación Automática

Este ejercicio incluye pruebas automatizadas que verificarán si tu implementación cumple con todos los requisitos. Para ejecutar estas pruebas, utiliza el comando:

```
npm test
```

Las pruebas verificarán:
- Que cada ruta devuelva el mensaje correcto
- Que se utilice el código de estado HTTP apropiado
- Que se configuren correctamente los encabezados de respuesta
- Que se maneje correctamente la situación de ruta no encontrada

## Consejos

- Asegurate de entender cómo funciona el módulo `http` de Node.js.
- Familiarizate con los conceptos de solicitud (request) y respuesta (response) en HTTP.
- Prestá atención a los encabezados y códigos de estado HTTP.
- Estructura tu código de manera limpia y modular.

## Recursos Útiles

- [Documentación oficial de Node.js sobre el módulo HTTP](https://nodejs.org/api/http.html)
- [MDN Web Docs: HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [MDN Web Docs: HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

¡Buena suerte con el ejercicio!
