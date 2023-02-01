// import utils
import { getUserFromCSV, createUserToCSV } from "../utils/fileControl.js";

const DEFAULT_PASSWORD = 'zaptic';

export const getUser = (req, res) => {
  const userID = req.params.id;
  const { users } = getUserFromCSV("src/data/users.csv");
  const user = users.find(user => user.id === userID);
  if(user) {
    res.send(user);
  } else {
    res.send("User not exist.");
  }
};

export const createUser = (req, res) => {  
  if (req.body.password === DEFAULT_PASSWORD) {
    delete req.body.password;
    const reqBody = req.body;
    const { users, headers } = getUserFromCSV("src/data/users.csv");
    const maxId = users.reduce(
      (a, b) => Math.max(Number(a), Number(b.id)),
      -Infinity
    );

    let csvData = [];
    
    for (let i in headers) {
      if (i == 0) {
        csvData = [...csvData, "\n" + (maxId + 1)];
      } else {
        csvData = [...csvData, reqBody[headers[i]]];
      }
    }

    const result = createUserToCSV(csvData, "src/data/users.csv");
    if (result) {
      res.status(200).send("Success!");
    } else {
      res.status(500);
    }
  } else {
    res.send("Password in not correct!");
  }
};
