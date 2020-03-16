const request =  require('supertest');
const app = require('../source/app');

const template = {name: 'Leonardo', percent: 50};
const faature = '/parners';

describe('Partner feature', ()=>{
    test('Name should be is a pure string and percent between 1 and 100', async ()=>{
        const {text, statusCode } = await request(app).post(feature).send(template);
        const {error, partner} = JSON.parse(text);
        expect(statusCode).toBe(200);
        expect(error).toBe(200);
        expect(partner.name).toBe(template.name);
        expect(partner.percent).toBe(template.percent);


    });
});