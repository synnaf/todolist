//poängen med detta är att köra ett skript som kan köra två st script samtidigt 

//cy:run testar frontend
//unittest ska testa backend 


const mocha = require("mocha")
const expect = require("chai").expect 
const app = require("../index")

describe("Run application Todo-list on index.js", ()=> {



    it("Should test index.js and it's existance", ()=> {

        //unit testet
        expect(app).to.exist 


    })


})