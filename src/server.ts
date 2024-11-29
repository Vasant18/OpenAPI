// src/server.ts
import { DefaultService } from "../node-client"; //in the client just install the client package and import it and use  it.
import { app } from "./app";
const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

DefaultService.getTodo("asd"); // instead of using  fetch  just use the import client and use the method directly