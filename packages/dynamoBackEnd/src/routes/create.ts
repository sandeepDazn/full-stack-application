import express,{Request,Response} from 'express';
import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { dynamoClient,tableName } from '../dynamodb';

const router = express.Router();

router.post('/create',async (req:Request, res:Response)=>{
const item = req.body;
try {
    await dynamoClient.send(new PutCommand({TableName: tableName, Item: item}));
    res.status(201).json({message: 'Item successfully created'})
} catch (error) {
    res.status(500).json({message: `internal server error ${error}`});
}
});

export { router as createRouter};