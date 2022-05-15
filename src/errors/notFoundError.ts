import CustomizedError from "./errorModel.js";

export default function notFoundError(message: string): CustomizedError {
  return { type: "not_found", message };
}