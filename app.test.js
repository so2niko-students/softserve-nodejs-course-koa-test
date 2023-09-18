const request = require('supertest');
const app = require('../app.js');
const data = require('../data.js');
const {authors, genres, filterBooks} = require('./data/data_t.js')

console.log('Tests are started.');

describe('Books list', () => {
    test('GET /book', async () => {
        const resp = await request(app.callback())
            .get('/book');

            expect(resp.text).toEqual(JSON.stringify(data));
    });
});

describe('Authors list', () => {
    test('GET /author', async () => {
        const resp = await request(app.callback())
            .get('/author');
            const respAuthors = JSON.parse(resp.text).sort();
            expect(respAuthors).toEqual(authors);
    });
});

describe('Genres list', () => {
    test('GET /genre', async () => {
        const resp = await request(app.callback())
            .get('/genre');
            const respGenres = JSON.parse(resp.text).sort();
            expect(respGenres).toEqual(genres);
    });
});

describe('Book filter list', () => {
    const urlTest1 = '/book?filter=price&type=lte&value=7';
    test(`GET ${urlTest1}`, async () => {
        const resp = await request(app.callback())
            .get('/book')
            .query({
                filter: 'price',
                type: 'lte',
                value: 7
            });

            const respBooks = JSON.parse(resp.text).sort();
            expect(respBooks).toEqual(filterBooks[urlTest1]);
    });

    const urlTest2 = 'book?filter=price&type=lte&value=3';
    test(`GET ${urlTest2}`, async () => {
        const resp = await request(app.callback())
            .get('/book')
            .query({
                filter: 'price',
                type: 'lte',
                value: 3
            });

            const respBooks = JSON.parse(resp.text).sort();
            expect(respBooks).toEqual(filterBooks[urlTest2]);
    });

    const urlTest3 = '/book?filter=price&type=gte&value=10';
    test(`GET ${urlTest3}`, async () => {
        const resp = await request(app.callback())
            .get('/book')
            .query({
                filter: 'price',
                type: 'gte',
                value: 10
            });

            const respBooks = JSON.parse(resp.text).sort();
            expect(respBooks).toEqual(filterBooks[urlTest3]);
    });

    const urlTest4 = '/book?filter=year&type=gte&value=2005';
    test(`GET ${urlTest4}`, async () => {
        const resp = await request(app.callback())
            .get('/book')
            .query({
                filter: 'year',
                type: 'gte',
                value: 2005
            });

            const respBooks = JSON.parse(resp.text).sort();
            expect(respBooks).toEqual(filterBooks[urlTest4]);
    });

    const urlTest5 = '/book?filter=year&type=lte&value=1900';
    test(`GET ${urlTest5}`, async () => {
        const resp = await request(app.callback())
            .get('/book')
            .query({
                filter: 'year',
                type: 'lte',
                value: 1900
            });

            const respBooks = JSON.parse(resp.text).sort();
            expect(respBooks).toEqual(filterBooks[urlTest5]);
    });
});
