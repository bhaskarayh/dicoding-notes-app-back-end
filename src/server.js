/* Memuat kode untuk membuat, mengonfigurasi, dan menjalankan server HTTP menggunakan Hapi. */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                // origin: ['*'],
                origin: ['http://notesapp-v1.dicodingacademy.com'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};


init();