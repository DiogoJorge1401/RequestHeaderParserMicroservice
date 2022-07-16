import e from "express";
import cors from "cors";
import { routes } from "./routes";

const app = e();

app.use(cors());

app.use(e.json());

app.use("/public", e.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.use("/api", routes);

app.listen(3000, () =>
  console.log("Server is Running on http://localhost:3000")
);
