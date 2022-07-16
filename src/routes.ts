import { Router } from "express";

const routes = Router();

routes.get("/:date?", (req, res) => {
  const parse = {
    undefined: (v) => new Date(),
    string: (v) => (isNaN(v) ? new Date(v) : new Date(+v))
  };
  const date = req.params.date as any;
  let parsedDate = parse[typeof date](date);

  if (parsedDate.toString() === "Invalid Date")
    return res.json({ error: "Invalid Date" });

  const unix = parsedDate.getTime();
  const utc = parsedDate.toUTCString();

  return res.json({ unix, utc });
});

export { routes };
