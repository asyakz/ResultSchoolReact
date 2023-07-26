import httpService from "./http.service";

const jewerlyTypesEndpoint = "jewelryType/";

const jewerlyTypeService = {
    get: async () => {
        const req = await httpService.get(jewerlyTypesEndpoint);
        return req.data;
    }
};
export default jewerlyTypeService;
