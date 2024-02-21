
import { GEMINI_API_KEY } from "./constants";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// const model = genAI.getGenerativeModel({ model: "gemini-pro" });
export default genAI
