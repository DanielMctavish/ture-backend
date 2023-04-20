import 'dotenv/config';
import express from 'express';
import cors from 'cors';
//import any_routes from './routes/reports_routes'
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//app.use('/', any_routes)
app.listen(process.env.PORT || 3008, () => {
    console.log('[ture] Server running');
});
export default app;
