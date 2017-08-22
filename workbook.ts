import * as Excel from 'exceljs';

let workbook:any = new Excel.Workbook();
let worksheet = workbook.addWorksheet('sheet');

worksheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 30 },
    { header: 'Age', key: 'age', width: 10 }
];

worksheet.addRow({ id: 1, name: 'aa', age: 17 });

export { workbook };
//workbook.xlsx.writeFile('excel.xlsx');