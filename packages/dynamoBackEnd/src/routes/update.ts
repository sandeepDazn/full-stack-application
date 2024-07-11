import { UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { dynamoClient, tableName } from "../dynamodb";
import express, { Request, Response } from "express";

const router = express.Router();

router.put("/update:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatData = req.body;

  try {
    await dynamoClient.send(
      new UpdateCommand({
        TableName: tableName,
        Key: { id },
        UpdateExpression: "set info =: info",
        ExpressionAttributeValues: {
          ":info": updatData,
        },
      })
    );
    res.status(200).json({ message: "item updated successfully" });
  } catch (error) {
    res.status(500).json({ message: `internal server error: ${error}` });
  }
});

export { router as UpdateRouter };
