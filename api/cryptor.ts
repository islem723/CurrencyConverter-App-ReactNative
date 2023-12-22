import { API_BASE_URL, API_KEY } from '../utils/consts';
import { ConvertResponse } from './types';

export async function getExchangeRate(
	amount: number,
	src: string,
	target: string
): Promise<ConvertResponse> {
	const url = `${API_BASE_URL}/convert?&from=${src}&to=${target}&amount=${amount}`;

	const req = await fetch(url, {
		headers: {
			apiKey: API_KEY,
		},
	});

	return await req.json();
}
