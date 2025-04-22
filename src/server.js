/**
 * Módulo que crea y configura el servidor HTTP
 */
const http = require('http');
const router = require('./router');

/**
 * Crea un servidor HTTP que utiliza la función router para manejar las solicitudes
 * @returns {http.Server} Instancia del servidor HTTP
 */
function createServer() {
  const server = http.createServer((req, res) => {
    router(req, res);
  });
  
  return server;
}

module.exports = createServer;