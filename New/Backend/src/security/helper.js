import fs from "fs";
import path from "path";

const createUploadsFolder = () => {
  // Create uploads folder in the Backend directory
  const dir = path.join(process.cwd(), "uploads");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log("Uploads folder created at:", dir);
  } else {
    console.log("Uploads folder already exists at:", dir);
  }
};

export { createUploadsFolder };
