import { nanoid } from "nanoid";
import httpService from "./http.service";
const todosEndepoint = "todos/";
const todosService = {
    fetch: async () => {
        const { data } = await httpService.get(todosEndepoint, {
            params: {
                _page: 1,
                _limit: 10,
            },
        });
        return data;
    },
    fetchPost: async () => {
      const { data } = await httpService.post(todosEndepoint, {
        userId: nanoid(),
        title: `New title from asyakz #${nanoid()}`,
        completed: false
      });
      return data;
  }
};
export default todosService;
