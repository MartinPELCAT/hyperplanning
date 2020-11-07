import { server } from "./server";
import dotenv from "dotenv";

// Import .env
dotenv.config();

// Just start the server
server().catch(console.error);
