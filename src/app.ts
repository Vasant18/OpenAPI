// // src/app.ts
// import express, { Request as ExRequest, Response as ExResponse, json, urlencoded } from "express";
// import swaggerUi from "swagger-ui-express";
// import { RegisterRoutes } from "../build/routes";
// export const app = express();
// app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
//   return res.send(
//     swaggerUi.generateHTML(await import("../build/swagger.json"))
//   );
// });
// TIP
// // Use body parser to read sent json payloads
// app.use(
//   urlencoded({
//     extended: true,
//   })
// );
// app.use(json());

// RegisterRoutes(app);




// src/app.ts
import express, { Request as ExRequest, Response as ExResponse, json, urlencoded } from "express";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../build/routes";

export const app = express();

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse, next: express.NextFunction) => {
  try {
    const swaggerDocument = await import("../build/swagger.json");
    res.send(swaggerUi.generateHTML(swaggerDocument));
  } catch (err) {
    next(err);
  }
});

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);