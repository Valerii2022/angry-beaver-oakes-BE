import connectToDatabase from "./dbConnect.js";
import app from "./index.js";

const { PORT = 3000 } = process.env;

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Server is running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

// import mongoose from "mongoose";
// import app from "./index.js";

// const { DB_HOST, PORT = 3000 } = process.env;

// mongoose
//   .connect(DB_HOST)
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is running. Use our API on port: ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });

// app.listen(3000, () => {
//   console.log("Server is running. Use our API on port: 3000");
// });
