"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dataset = void 0;
const unique_1 = require("../utils/unique");
class Dataset {
    constructor(dataRange) {
        this.data = dataRange;
        this.headers = dataRange[0].map(item => item.toString());
        this.columnIds = dataRange[0].map((item, index) => index);
        this.values = dataRange.filter((item, index) => index !== 0);
    }
}
exports.Dataset = Dataset;
const dataset = new Dataset([
    ['h1', 'h2'],
    ['content1', 'content2'],
    ['content2', 'content2'],
    ['content2', 'content1'],
    ['content1', 'content3'],
]);
console.log(dataset.columnIds);
console.log(dataset.values);
console.log(dataset.data);
console.log(dataset.headers);
console.log((0, unique_1.uniqueFromColumn)(dataset, 1));
