"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dataset = void 0;
class Dataset {
    constructor(dataRange) {
        this._data = dataRange;
        this._headers = dataRange[0].map(item => item.toString());
        this._columnIds = dataRange[0].map((_item, index) => index);
        this._values = dataRange.filter((_item, index) => index !== 0);
    }
    get data() {
        return this._data;
    }
    get headers() {
        return this._headers;
    }
    get columnIds() {
        return this._columnIds;
    }
    get values() {
        return this._values;
    }
    removeMissing() {
        this._values = this._values.filter(item => !item.includes(''));
        return this;
    }
    count(columnId) {
        const initialMap = {};
        if (!this.columnIds.includes(columnId)) {
            throw new Error('There is no column with provided index.. Please provide the index of an existing column ');
        }
        const res = this.values.reduce((map, item) => {
            let curItem = item[columnId];
            if (curItem instanceof Date) {
                curItem = curItem.toLocaleDateString();
            }
            else if (typeof curItem === 'number') {
                curItem = curItem.toString();
            }
            if (map[curItem]) {
                map[curItem] += 1;
            }
            else {
                map[curItem] = 1;
            }
            return map;
        }, initialMap);
        return res;
    }
    sort() {
        return this;
    }
}
exports.Dataset = Dataset;
const dataset = new Dataset([
    ['h1', 'h2'],
    ['content6', 'content6'],
    ['content1', ''],
    ['content2', 'content2'],
    ['content1', 'content5'],
    ['content3', 'content3'],
    ['content3', 'content4'],
]);
const res = dataset.removeMissing().count(0);
console.log(res);
