const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log(
      "Intentando conectar a MongoDB con URI:",
      process.env.MONGODB_URI
    );
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conexión a MongoDB exitosa");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
