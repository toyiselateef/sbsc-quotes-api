import swaggerAutogen from "swagger-autogen";
import "dotenv/config";

const swaggerAuto = swaggerAutogen();
const outputFile = "./public/swagger.json";
const endpointsFiles = [
  "./src/routes/quotes.route.js",
  "./src/routes/user.route.js",
];

const port = process.env.PORT || 3002;
//swaggerAuto(outputFile, endpointsFiles);

const doc = {
  info: {
    version: "1.0.0",
    title: "My API",
    description: "Documentation quotes autogen.",
  },
  host: `localhost:${port}`,
  basePath: "/api",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Quotes",
      description: "SBSC Quotes API",
    },
  ],
};

swaggerAuto(outputFile, endpointsFiles, doc).then(() => {
  ["./index.js"];
});
