"use strict";
exports.__esModule = true;
var Excel = require("exceljs");
var workbook = new Excel.Workbook();
exports.workbook = workbook;
var worksheet = workbook.addWorksheet('sheet');
worksheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 30 },
    { header: 'Age', key: 'age', width: 10 }
];
worksheet.addRow({ id: 1, name: 'aa', age: 17 });
//workbook.xlsx.writeFile('excel.xlsx'); 
