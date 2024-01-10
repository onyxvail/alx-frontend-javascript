

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from 'crud.js';

// Create an object called row
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// Create a const variable named newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Create a const variable named updatedRow
const updatedRow: RowElement = {
    ...row,
    age: 23,
};

// Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
