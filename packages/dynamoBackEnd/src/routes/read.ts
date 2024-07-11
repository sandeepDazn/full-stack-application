import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { dynamoClient, tableName } from "../dynamodb";
import express, { Request, Response } from "express";

const router = express.Router();

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
console.log('value is' ,id);
  try {

    const result = await dynamoClient.send(
      new GetCommand({ TableName: tableName,
         Key: {id},
        })
    );
    res.status(200).json({message: 'successfully getting itmes',result});
  } catch (error) {
    res.status(500).json({message: `error getting itmes ${error}`});
  }
});

export { router as getRouter };
