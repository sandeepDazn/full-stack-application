import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { sequelize } from "./config/database";
import { Users } from "./modal";

const app = express();

app.use(bodyParser.json());
app.use(cors());

export const UserModal = Users;

app.get("/", (req, res) => {
  res.json({ testing: "testing reponse one two three"});
});

  sequelize
  .sync({ force: true })
  .then(() => console.log("database and tables created successfully"))
  .catch(err => console.log(`getting this error  testing${err}`));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
