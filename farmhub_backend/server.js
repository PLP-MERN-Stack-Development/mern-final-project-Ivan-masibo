const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/farms", require("./routes/farmsRoutes"));

app.use("/api/crops", require("./routes/cropRoutes"));
app.use("/api/expenses", require("./routes/expenseRoutes"));
app.use("/api/yields", require("./routes/yieldRoutes"));
app.use("/api/notes", require("./routes/noteRoutes"));
app.use("/api/images", require("./routes/imageRoutes"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// backend/server.js
import compression from "compression";
app.use(compression());

