import httpService from './http.service';
const jewelryEndpoint = '/jewelry/';

const jewelryService = {
  get: async () => {
    const { data } = await httpService.get(jewelryEndpoint);
    console.log('jewelryService', data);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.post(jewelryEndpoint, payload);
    return data;
  },
  getById: async (jewelryId) => {
    const { data } = await httpService.get(jewelryEndpoint + jewelryId);
    return data;
  },
  update: async (payload, jewelryId) => {
    const { data } = await httpService.patch(
      jewelryEndpoint + jewelryId,
      payload
    );
    return data;
  }
};
export default jewelryService;
