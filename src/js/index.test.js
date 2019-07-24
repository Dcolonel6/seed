import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe("Test of Test",()=>{
  it("It should be running",()=>{
      expect(true).to.equal(true);
  });
})

describe("Index.html",()=>{
  it("It should have a h1",(done)=>{
      const index = fs.readFile("../../dist/index.html","utf-8",(err,data) =>{
        if(err) throw err;
        jsdom.env(data,(err,window) =>{

         let h1Text =  window.document.querySelector("h1").textContent;
         expect(h1Text).to.equal("hello there Mr live");
         done();
         window.close();
        });

      });
  });
})
