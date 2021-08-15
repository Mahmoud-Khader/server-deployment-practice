'use strict';

const supertest =require('supertest');
const server =require('../server.js');
const request = supertest(server.app);


describe('express server',()=>{
    it('should check the Hello Mahmoud works successfully' ,async()=>{
        //arrange
        let param='/';
        let status = 200;
        let test = 'Hello Mahmoud';
        //act
        const response = await request.get(param);
        //assert
        expect(response.status).toBe(status);
        expect(response.text).toBe(text);

    });


    it('should check the data works successfully' ,async()=>{
        //arrange
        let param='/data';
        let status = 200;
        
        //act
        const response = await request.get(param);
        //assert
        expect(response.status).toBe(status);
        expect(typeof response.body).toBe('object');

    });


    it('should check the 500 errors' ,async()=>{
        //arrange
        let param='/bad';
        let status = 500;
        
        //act
        const response = await request.get(param);
        //assert
        expect(response.status).toBe(status);
        expect(response.body.route).toBe(AudioParam);

    });


    it('should check 404 not found errors' ,async()=>{
        //arrange
        let param='/notfound';
        let status = 404;
        
        //act
        const response = await request.get(param);
        //assert
        expect(response.status).toBe(status);
        

    });


});