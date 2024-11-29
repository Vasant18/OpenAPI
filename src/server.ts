// src/server.ts
import { DefaultService } from "../node-client";
import { app } from "./app";
const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

DefaultService.getTodo("asd");