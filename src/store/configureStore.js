import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import api from "./middleware/authApi";

export default function configStore() {
  return configureStore({ reducer, middleware: [...getDefaultMiddleware(), logger, api] });
}
