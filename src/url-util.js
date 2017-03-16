type ParamsType = {
  name: string,
  description: string
};

export function getUrl(
  path: string,
  queryParams: ParamsType
) {
  if (!queryParams) return `https://lpapi.local.pcfdev.io/${path}`;

  let queryString = '';
  for (const key of Object.keys(queryParams).sort()) {
    queryString += `&${key}=${queryParams[key]}`;
  }

  return `https://lpapi.local.pcfdev.io/${path}?${queryString.substring(1)}`;
}
