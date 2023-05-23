// Memuat seluruh fungsi-fungsi handler yang digunakan pada berkas routes.
const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };

    notes.push(newNote);

    // Check Udah ada note yang masuk
    const isSuccess = notes.filter((note) => note.id === id).length > 0;


    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                noteId: id,
            },
        });
        response.code(201);
        // response.header('Access-Control-Allow-Origin', '*');
        // response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');
        // response.header('Access-Control-Allow-Private-Network', true);

        // response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');

        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan'
    });
    response.code(500);
    // response.header('Access-Control-Allow-Origin', '*');
    return response;
};

const getAllNoteHandler = (request, h) => {
    // console.log(notes);

    // const notes = 
    // console.log({ notes: notes });


    const response = h.response({
        status: 'success',
        message: 'Catatan berhasil diambil',
        data: {
            notes,
        }
        // data: notes.map((item) => {

        // })
    });

    response.code(200);

    return response;
}


const getDetailNoteHandler = (request, h) => {
    // console.log(request.params);
    const { id } = request.params;

    console.log({ id: id });
    console.log({ notes: notes });

    const note = notes.filter((item) => item.id === id);

    const isSuccess = note.length > 0;

    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Detail catatan berhasil diambil',
            data: {
                note: note[0]
            }
        });

        response.code(200);
        return response;
    }


    const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan',
    });

    response.code(404);

    return response;
}


const editNoteByIdHandler = (request, h) => {
    const { id } = request.params;

    const { title, tags, body } = request.payload;
    const updatedAt = new Date().toISOString();

    const index = notes.findIndex((note) => note.id === id);
    // console.log({ index: index });

    if (index !== -1) {
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt,
        };

        // console.log({ 'notes[index]': notes[index] });

        /*
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil diperbaharui'
        });

        response.code(200);
        return response;
         */

        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil diperbarui',
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Gatal memperbaharui catatan. Id tidak ditemukan',
    });

    response.code(404);
    return response;
};


const deleteNoteByIdHandler = (request, h) => {
    const { id } = request.params;

    const index = notes.findIndex((note) => note.id == id);

    // console.log({ index: index, notes:notes[index] });

    if (index !== -1) {
        notes.splice(index, 1); // del index 0 dan 1 data

        const response = h.response({
            status: 'success',
            message: 'Berhasil delete note'
        })

        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Gatal menghapus catatan. Id tidak ditemukan',
    });

    response.code(404);
    return response;
}

/* 
Struktur data yang disimpan 
{
 id: string,
 title: string,
 createdAt: string,
 updatedAt: string,
 tags: array of string,
 body: string,
},
*/

module.exports = {
    addNoteHandler,
    getAllNoteHandler,
    getDetailNoteHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler
};