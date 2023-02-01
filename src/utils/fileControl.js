import fs from "fs";

export function getUserFromCSV(filename) {
  
  let csv = fs.readFileSync(filename);
  let array = csv.toString().split("\r");
  let users = [];
  let headers = array[0].split(",");

  for (let i = 1; i < array.length; i++) {
    let obj = {};
    let strArray = array[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      if (j === 0) {
        obj = {
          ...obj,
          id: strArray[0].replace(/(\r\n|\n|\r)/gm, ""),
        };
        continue;
      }
      obj[headers[j]] = strArray[j];
    }

    users.push(obj);
  }
  
  return { users, headers };
}

export function createUserToCSV(data, filename) {

  try {
    fs.appendFileSync(filename, "\r" + data.toString());
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }

}
