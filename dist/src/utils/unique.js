"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueFromColumn = void 0;
const uniqueFromColumn = (dataset, columnId) => {
    if (!dataset.columnIds.includes(columnId)) {
        throw new Error('There is no column with provided index.. Please provide the index of an existing column ');
    }
    const lookup = new Set();
    const column = dataset.values.map(arr => {
        return arr[columnId];
    });
    return column
        .filter(item => {
        if (lookup.has(item)) {
            return false;
        }
        else {
            lookup.add(item);
            return true;
        }
    })
        .map(item => [item]);
};
exports.uniqueFromColumn = uniqueFromColumn;
