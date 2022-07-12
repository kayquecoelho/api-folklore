import CustomizedError from './errorModel.js';

export default function conflictError(message: string): CustomizedError {
  return { type: 'conflict', message };
}
