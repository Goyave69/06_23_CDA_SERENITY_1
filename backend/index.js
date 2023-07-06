require("dotenv").config();

import { listen } from "./src/app";

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
