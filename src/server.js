/**
 * Módulo que crea y configura el servidor HTTP
 */
const http = require('http');

/**
 * Crea un servidor HTTP que utiliza la función router para manejar las solicitudes
 * @returns {http.Server} Instancia del servidor HTTP
 */

let url = require('node:url')

const chalk = require('chalk')

function createServer() {
  const server = http.createServer((req, res) => {

    let { pathname } = url.parse(req.url, true)
    
    /* Aquí la lógica del enrutador */
    if(pathname === '/'){
            res.writeHead(200, { "content-type": "text/plain; charset=utf-8" })
            res.end('Bienvenid@s! Gracias por tu visita.')
            console.log(chalk.bgGreenBright('Visitante -> en la raíz del sitio: Bienvenid@s! Gracias por tu visita :)'))
            return;
        } else if(pathname === '/nosotros'){
          res.writeHead(200, { "content-type": "text/plain; charset=utf-8"})
          res.end('Bienvenid@s a saber + de nosotros :)')
          console.log(chalk.bgGreen('Visitante -> en la sección /nosotros: Bienvenid@s a saber + de nosotros :)'))
          return;
        } else if(pathname === '/cursos'){
          res.writeHead(200, { "content-type": "text/plain; charset=utf-8"})
          res.end('Te interesan nuestros cursos. Vení a conocer la oferta!')
          console.log(chalk.bgGreenBright('Visitante -> en la sección /cursos: Te interesan nuestros cursos. Ven a conocer la oferta! :)'))
          return;
        } else if(pathname === '/contacto'){
          res.writeHead(200, { "content-type": "text/plain; charset=utf-8"})
          res.end('Si querés contactarnos, hacelo a este Email: :)')
          console.log(chalk.bgGreen('Visitante -> en la sección /contacto: Si gustas contactarnos, hazlo a este Email: :) :)'))
          return;
        } else{
          res.writeHead(404, {"content-type": "text/plain; charset=utf-8"})
          res.end('No se ha encontrado la ruta ingresada.')
          console.log(chalk.bgRed('El visitante se equivocó al invocar la ruta!!'))
          return;
          
      }
        
       
  });
  
  return server;
}

module.exports = createServer;
