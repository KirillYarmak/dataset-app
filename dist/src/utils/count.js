"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unique_1 = require("./unique");
const count = function (dataset, columnId) {
    const keys = (0, unique_1.uniqueFromColumn)(dataset, columnId);
    const mapped = keys.map(item => {
        item.push(0);
        return item;
    });
    return [];
};
