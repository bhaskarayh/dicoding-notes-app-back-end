/* Memuat kode konfigurasi routing server seperti
 menentukan path, method, dan handler yang digunakan. */

const { addNoteHandler,
    getAllNoteHandler,
    getDetailNoteHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler
} = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        // options: {
        //     cors: {
        //         origin: ['*'],
        //     }
        // }
        // handler: () => { },
    },
    // Get all notes
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNoteHandler,
    },
    // Get detail note
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getDetailNoteHandler
    },
    // Change Notes
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler
    }
];


module.exports = routes;