/* Memuat kode untuk membuat, mengonfigurasi, dan menjalankan server HTTP menggunakan Hapi. */
const Hapi = require('@hapi/hapi');
const routes = require('./src/routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};


init();