import express from "express"
import userRoutes from './routes/users.js'
import cors from 'cors';


const app = express();

//MODO JSON PARA POSTS
app.use(express.json());
//PARA EVITAR CONFLITOS RODANDO LOCAL
app.use(cors());

app.use('/', userRoutes);
app.listen(8800);