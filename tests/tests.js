"use strict";
import Chai from 'chai';
import app from 'src/app.js';

const chai = Chai.expect;
const message = 'Argument should be an Array'


describe("Determine the sequence of an array of numbers: ", () => {
    describe("Test for an arithmetic sequence", function() {

        it("should return `Arithmetic` for [2, 4, 6, 8, 10]", () => {
            const value = app.aritGeo([2, 4, 6, 8, 10]);
            chai(value).equal('Arithmetic');
        });

        it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", ()=> {
            const value = app.aritGeo([5, 11, 17, 23, 29, 35, 41]);
            chai(value).equal('Arithmetic');
        });

        it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", () => {
            const value = app.aritGeo([15, 10, 5, 0, -5, -10]);
            chai(value).equal('Arithmetic');
        });
    });

    describe("Test for a geometric sequence", () => {

        it("should return `Geometric` for [2, 6, 18, 54, 162]", () => {
            const value = app.aritGeo([2, 6, 18, 54, 162]);
            chai(value).equal('Geometric')
        });

        it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", ()=> {
            const value = app.aritGeo([0.5, 3.5, 24.5, 171.5]);
            chai(value).equal('Geometric');
        });

        it("should return `Geometric` for [−128, 64, −32, 16, −8]", () => {
            const value = app.aritGeo([-128, 64, -32, 16, -8]);
            chai(value).equal('Geometric');
        });

    });

    describe("Test for neither arithmetic nor geometric sequence", ()=> {

        it("should return -1 for [1, 2, 3, 5, 8]", () => {
            const value = app.aritGeo([1, 2, 3, 5, 8]);
            chai(value).equal(-1);
        });

        it("should return -1 for [1, 3, 6, 10, 15]", () => {
            const value = app.aritGeo([1, 3, 6, 10, 15]);
            chai(value).equal(-1);
        });

        it("should return -1 for [1, 8, 27, 64, 125]", () => {
            const value = app.aritGeo([1, 8, 27, 64, 125]);
            chai(value).equal(-1);
        });

        it("should return -1 for string and numbers in array", () => {
            const value = app.aritGeo(['apple','Goat',2,4,6]);
            chai(value).equal(-1);
        });
    });

    describe("Test for an empty array",() => {
        it("should return 0 for []", () => {
            const value = app.aritGeo([]);
            chai(value).equal(0);
        });
    });

    describe("Test for input other than array",() => {
        it("should return a string message for int argument", () => {
            const value = app.aritGeo(5);
            chai(value).equal(message);
        });
        it("should return a string message for string argument", () => {
            const value = app.aritGeo('Goat');
            chai(value).equal(message);
        });
    });

    describe("Tests for output ",()=>{
        it("should return  string as output for arithmetic",()=>{
            var value = app.aritGeo([2, 4, 6, 8, 10]);
            chai(value).to.be.a("string");
        });
        it("should return string as output for geometric", ()=>{
            var value = app.aritGeo([2, 6, 18, 54, 162]);
            chai(value).to.be.a("string");
        });

        it("should return string for input other than array ", ()=>{
            var value = app.aritGeo(90);
            chai(value).to.be.a("string");
        });

        it("should return number as output for neither geometric nor arithmetic", ()=>{
            var value = app.aritGeo([1, 3, 6, 10, 15]);
            chai(value).to.be.a("number");
        });
        it("should return  number as output for empty array", ()=>{
            var value = app.aritGeo([]);
            chai(value).to.be.a("number");
        });
    });
});