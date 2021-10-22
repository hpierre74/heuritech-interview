import axios from 'axios';
import {
  TrendQuery,
  TrendsPayload,
  ResponseMessage,
  MoodboardPayload
} from './types';
import { TRENDS_PATH, FAVORITES_PATH, MOODBOARDS_PATH } from './url';

let headers = { headers: {} };

// TODO: Find a better way to prevent code execution client side
if (process.env.NX_API_AUTH_HEADERS) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { getAuthHeaders } = require('./auth');
  headers = getAuthHeaders();
}

export const requestInstance = axios.create({
  baseURL: process.env.NX_API_BASE_URL,
  ...headers
});

export async function getTrends(query?: Partial<TrendQuery>) {
  return requestInstance
    .get<TrendsPayload>(TRENDS_PATH, { params: query })
    .then((response) => {
      return response.data;
    });
}

export async function getFavorites(query?: Partial<TrendQuery>) {
  return requestInstance
    .get<TrendsPayload>(FAVORITES_PATH, { params: query })
    .then((response) => {
      return response.data;
    });
}

export async function putFavorite(id: string) {
  return requestInstance.put<ResponseMessage>(`${FAVORITES_PATH}/${id}`);
}

export async function deleteFavorite(id: string) {
  return requestInstance.delete<ResponseMessage>(`${FAVORITES_PATH}/${id}`);
}

export async function getMoodboard(id: string) {
  return requestInstance
    .get<MoodboardPayload>(`${MOODBOARDS_PATH}/${id}`)
    .then((response) => {
      return response.data;
    });
}
