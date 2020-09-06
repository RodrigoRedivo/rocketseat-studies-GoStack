import express from 'express';
import { goTypescript } from './routes';

const app = express();

app.get('/', goTypescript);

app.listen(3333);