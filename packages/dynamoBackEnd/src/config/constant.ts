import dotenv from "dotenv";
dotenv.config();

export const {
  PORT = "5000",
  AWS_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  TABLE_NAME = "testing",
}: any = process.env;
