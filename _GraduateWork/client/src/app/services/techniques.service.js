import httpService from './http.service';
const techniquesEndpoint = 'techniques/';

const techniquesService = {
  get: async () => {
    const { data } = await httpService.get(techniquesEndpoint);
    return data;
  }
};
export default techniquesService;
