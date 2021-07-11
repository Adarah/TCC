import express from "express";
import admin from "firebase-admin";
import addOperatorToLab from "./add-operator-to-lab";
import errorHandler from "./error-handler";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://poli-lab0-default-rtdb.firebaseio.com",
});

const app = express();
app.use(express.json());

app.post("/AddOperatorToLab", addOperatorToLab);


app.use(errorHandler);
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("Listening on http://localhost:3000");
});
