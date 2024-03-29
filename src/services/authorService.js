import { handleError, handleResponse } from './utils';
const baseUrl = process.env.API_URL + '/authors/';

export function getAuthors() {
	return fetch(baseUrl).then(handleResponse).catch(handleError);
}
