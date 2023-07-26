import httpService from "./http.service";
const materialsEndpoint = "materials/";

const materialsService = {
    fetchAll: async () => {
        const { data } = await httpService.get(materialsEndpoint);
        return data;
    }
};
export default materialsService;