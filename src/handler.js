// Memuat seluruh fungsi-fungsi handler yang digunakan pada berkas routes.
const { nanoid } = require('nanoid');

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updateAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    };

    notes.push(newNote);
};

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


module.exports = { addNoteHandler };