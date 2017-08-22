import * as express from 'express';
import { Application, Router } from 'express';
import { workbook } from './workbook';

const app: Application = express();
const router: Router = express.Router();

router.get('/excel', (req, res) => {
    res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    res.setHeader('Content-Disposition', 'attachment; filename=' + encodeURI('workbook.xlsx'));
    workbook.xlsx.write(res).then(() => res.end());
});

app.use(router).listen(2000);