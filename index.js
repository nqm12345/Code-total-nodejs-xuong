import express from "express";
import router from "./routers/index.js";
import { errorHandlerNotFound, errorHandler } from "./utils/errorHandler.js";
import { PORT } from "./utils/env.js";
import  connect  from "./utils/connect.js";
const app = express();

app.use(express.json());
app.use("/api", router);

connect();

// Error hanldling

app.use(errorHandlerNotFound, errorHandler);

app.listen(PORT || 8000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
