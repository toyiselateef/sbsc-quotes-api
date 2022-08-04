import express from "express";
import morgan from "morgan";
import "dotenv/config";
import quoteModule from "./src/routes/quotes.route.js";
import userModule from "./src/routes/user.route.js";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

const app = express();

const port = process.env.PORT || 3002;
app.use(
  morgan(
    ":method :url statusCode ===  :status :res[content-length] - :response-time ms"
  )
);

//passportConfig();
//databaseConnection();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.static("public"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      basePath: "/api",
      url: "../swagger.json",
      host: `http://localhost:${port}`,
    },
  })
);

app.use(
  "/api",
  // passport.authenticate("local", {
  //   session: false /*,failureRedirect:"/accessdenied"*/,
  // }),
  userModule
);
app.use(
  "/api",
  // passport.authenticate("local", {
  //   session: false /*,failureRedirect:"/accessdenied"*/,
  // }),
  quoteModule
);

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
