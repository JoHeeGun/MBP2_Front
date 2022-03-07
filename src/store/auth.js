import {
  // getAuthFromCookie,
  getUserFromCookie,
  // saveAuthToCookie,
  saveUserToCookie,
} from '../utils/cookies';
import { loginAPI, myDetailAPI, getUserListAPI } from '../api/index';
import router from '../router';

export default {
  namespaced: true,
  state: {
    id: getUserFromCookie() || '',
    user: '',
    userList: [],
    total: '',
    page: 1,
    // token: getAuthFromCookie() || '',
  },
  getters: '',
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { id, password } = payload;

      try {
        const res = await loginAPI({
          params: {
            id,
            password,
          },
        });
        const status = res.data.status;
        const user = res.data.data;

        if (status == 200) {
          // saveAuthToCookie(password);
          saveUserToCookie(user.id);

          commit('updateState', {
            id: user.id,
            // token: password,
          });
        } else {
          router.push('/Login');
          alert('로그인에 실패하였습니다.');
        }
      } catch (message) {
        alert(message);
      }
    },
    async getUser({ commit }, payload) {
      const { id } = payload;

      console.log(id);

      const res = await myDetailAPI({
        params: {
          id,
        },
      });
      const user = res.data;

      commit('updateState', {
        user,
      });
    },
    async fetchUserList({ commit }, payload) {
      const { page, schVal } = payload;

      const res = await getUserListAPI({
        params: {
          schVal,
          page,
          rows: 10,
        },
      });

      console.log(res.data);

      const userList = res.data.data;
      const total = res.data.total;

      commit('updateState', {
        userList,
        total,
      });
    },
  },
};
