import app from "./app";

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    app.listen(PORT);
    console.log("Server on port", PORT);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
