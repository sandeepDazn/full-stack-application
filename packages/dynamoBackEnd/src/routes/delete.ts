// src/routes/delete.ts
import express from 'express';
import { DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { dynamoClient,tableName } from '../dynamodb';


const router = express.Router();

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await dynamoClient.send(new DeleteCommand({
      TableName: tableName,
      Key: { id },
    }));
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: `internal server error ${error}` });
  }
});

export { router as deleteRouter };
