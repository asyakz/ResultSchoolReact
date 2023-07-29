import httpService from './http.service';
const colorsEndpoint = 'colors/';

const colorsService = {
  get: async () => {
    const { data } = await httpService.get(colorsEndpoint);
    return data;
  }
};
export default colorsService;
