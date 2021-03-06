import instance from "../ClientRequest";
import Url from "../Url";

const UserApi = {
  login: async (data: any) => {
    const res = await instance.get(Url.getData , {...data});
    return res?.data;
  },
  posts: async (data: any) => {
    const res = await instance.get(Url.posts , {...data});
    return res?.data;
  },
};
export default UserApi;
