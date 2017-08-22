"use strict";
exports.__esModule = true;
var express = require("express");
var workbook_1 = require("./workbook");
var app = express();
var router = express.Router();
router.get('/excel', function (req, res) {
    res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    res.setHeader('Content-Disposition', 'attachment; filename=' + encodeURI('workbook.xlsx'));
    workbook_1.workbook.xlsx.write(res).then(function () { return res.end(); });
});
app.use(router).listen(2000);
