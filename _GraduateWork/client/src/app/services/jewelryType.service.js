import httpService from './http.service';

const jewerlyTypesEndpoint = 'jewelryType/';

const jewelryTypeService = {
  get: async () => {
    const req = await httpService.get(jewerlyTypesEndpoint);
    return req.data;
  }
};
export default jewelryTypeService;
