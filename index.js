import express from "express";
import todoRouter from "./routes/todo.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { logger } from "./middlewares/logger.middleware.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

app.use("/todos", todoRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
