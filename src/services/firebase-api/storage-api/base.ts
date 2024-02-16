import { getStorage } from "firebase/storage";
import { app } from "../config";

export const storageInstance = getStorage(app);