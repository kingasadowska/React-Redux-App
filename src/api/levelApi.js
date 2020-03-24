import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/levels/";

export function getLevels() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
