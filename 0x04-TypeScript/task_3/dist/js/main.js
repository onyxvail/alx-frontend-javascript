/// <reference path="./crud.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as CRUD from 'crud.js';
// Create an object called row
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};
// Create a const variable named newRowID
var newRowID = CRUD.insertRow(row);
// Create a const variable named updatedRow
var updatedRow = __assign(__assign({}, row), { age: 23 });
// Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
//# sourceMappingURL=main.js.map