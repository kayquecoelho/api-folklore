import CustomizedError from './errorModel.js';

export default function badRequest(message: string): CustomizedError {
  return { type: 'bad_request', message };
}
