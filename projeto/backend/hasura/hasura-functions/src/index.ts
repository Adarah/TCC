import express from "express";
import admin from "firebase-admin";
import errorHandler from "./error-handler";
import addOrRemoveOperatorToLab from "./triggers/add-or-remove-operator-to-lab";
import changeUserRole from "./triggers/change-user-role";
import deleteUser from "./triggers/delete-user";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://poli-lab0-default-rtdb.firebaseio.com",
});

const app = express();
app.use(express.json());

app.post("/AddOrRemoveOperatorToLab", addOrRemoveOperatorToLab);
app.post('/ChangeUserRole', changeUserRole);
app.post('/DeleteUser', deleteUser);


app.use(errorHandler);
app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log("Listening on http://localhost:3001");
});
