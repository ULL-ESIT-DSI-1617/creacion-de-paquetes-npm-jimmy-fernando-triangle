'use strict'
let Shape = require('@ull-team-fernando-jimmy/ull-shape');
let Triangle = require('../triangle');
let exec = require('child_process').exec;

describe("triangle properties",function(){
    it("must have a width and height",function(){
        let a = new Triangle({ width: 100, height: 50 });
        a.should.have.property('width');
        a.should.have.property('height');
    })
});
describe("getArea", function(){
    it("must compute the triangle area correctly. Shape object", function(){
        let a = new Shape({ width: 100, height: 50 }, 'Triangle');
        let s = a.getArea();
        s.should.be.equal(2500);
    });
    it("must compute the triangle area correctly. Triangle object", function() {
        let a = new Triangle({ width: 100, height: 50 });
        let s = a.getArea();
        s.should.be.equal(2500);
    });
    var area;
    before(function(done){
        exec('node_modules/.bin/team-area Triangle "{ width: 100, height:50 }" --test', function(err, stdout, stderr){
            area = stdout;
            done();
        });
    })
    it("get area via command line",function(){

        Number(area).should.be.equal(2500);
    })
});
