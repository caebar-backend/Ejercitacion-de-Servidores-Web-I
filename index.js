/**
 * Punto de entrada principal de la aplicación
 * Inicia el servidor HTTP en el puerto 3000
 */
const createServer = require('./src/server');

// Puerto en el que escuchará el servidor
const PORT = 3000;

const chalk = require('chalk')

// Crear el servidor
const server = createServer();

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(chalk.yellowBright(`Servidor escuchando en http://localhost:${PORT}`));
  console.log(chalk.yellowBright('Presioná Ctrl+C para detener el servidor'));
});

// Exportar el servidor para pruebas
module.exports = server;