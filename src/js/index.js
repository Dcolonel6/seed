"use strict";
import numeral from "numeral";
import path from "path";
/*eslint-disable no-console*/

console.log(`we are serving from ${path.resolve()}`);

const courseValue = numeral(1000).format("ksh0,0.00");
console.log(`I would pay ${courseValue} for this awessome course`);
