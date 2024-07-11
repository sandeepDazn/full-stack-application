import  express,{Request, Response}  from "express";
import { PORT } from "./config/constant";
import bodyParser from "body-parser";
import { createRouter } from "./routes/create";
import { UpdateRouter } from "./routes/update";
import { deleteRouter } from "./routes/delete";
import { getRouter } from "./routes/read";

const app = express();

app.use(bodyParser.json());

app.use('/create',createRouter);
app.use('/update',UpdateRouter);
app.use('/delete',deleteRouter);
app.use('/get', getRouter);

app.get('/', (_:Request, res:Response) => {
    res.send(`consider code`);
});

app.listen(PORT,()=>console.log(`server is running on http://localhost:${PORT}`));




