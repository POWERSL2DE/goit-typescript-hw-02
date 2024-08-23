import axios from 'axios';

export async function fetchData<T>(searchQuery: string, page: number): Promise<T> {
  axios.defaults.baseURL = 'https://api.unsplash.com';

  const response = await axios.get<T>('/search/photos', {
    params: {
      client_id: 'WQte5tUczRGJeybmP_5ZIUTrHW_TWHIy2fxah8dxyTE',
      query: searchQuery,
      page,
      per_page: 10,
      orientation: 'landscape',
    },
  });
  return response.data;
}