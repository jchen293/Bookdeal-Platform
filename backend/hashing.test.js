const server = require("./server.js");
const sha256 = require("js-sha256").sha256;
const request = require('request');

describe('Hashing Password Test Case', () => {
    it('Sever.js should exist', ()=>{
        expect(server).toBeDefined();
    });

    it('hashing function should exist', ()=>{
        expect(server.passwordHashing).toBeDefined();
    });

    it('Test if password got hash.', () => {
        var pass = server.passwordHashing("test", "123456789");
        expect(pass).toEqual(sha256("test123456789"));
    });

    it('Empty Hashing', () => {
        var pass = server.passwordHashing("", "");
        expect(pass).toEqual(sha256(""));
    });
});