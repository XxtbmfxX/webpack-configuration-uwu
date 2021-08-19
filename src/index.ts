import * as express from 'express';
import { Request, Response } from 'express';

const initialState = require("../utils/mocks.js");

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Typescript')
});
app.get('/api/v1', (req: Request, res: Response) => {
    res.json(initialState)
});

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
})