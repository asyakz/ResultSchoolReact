import httpService from './http.service';
const materialsEndpoint = 'materials/';

const materialsService = {
  get: async () => {
    const { data } = await httpService.get(materialsEndpoint);
    return data;
  }
};
export default materialsService;
