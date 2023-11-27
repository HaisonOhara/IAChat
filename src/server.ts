import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json)
app.use(routes)

//ISSO É SERVER
const port = 8000;
app.listen(port, () => {  console.log('We are live on server ' + port);});