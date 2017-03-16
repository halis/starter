
import {BASE_URL} from './url';

type ParamsType = {
  name: string,
  description: string
};

export const getUrl = (path: string, queryParams: ParamsType) => {
  if (!queryParams) return `${BASE_URL}/${path}`;

  let queryString = '';
  for (const key of Object.keys(queryParams).sort()) {
    queryString += `&${key}=${queryParams[key]}`;
  }

  return `${BASE_URL}/${path}?${queryString.substring(1)}`;
};
