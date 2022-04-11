import instance from '../ClientRequest';
import Url from '../Url';

const UserApi = {
  login: async (data: any) => {
    const res = await instance.get(Url.getData + 'aaaa', {...data});
    return res?.data;
  },
  posts: async (data: any) => {
    const res = await instance.get(Url.posts + 'aaaa', {...data});
    return res?.data;
  },
};
export default UserApi;
