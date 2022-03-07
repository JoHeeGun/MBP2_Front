import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    books: [],
    searchs: [],
    message: '궁금한 책에 대해서 검색해 보세요!',
    page: 1,
  }),
  getters: '',
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async searchBooks({ commit }, payload) {
      const { sort, target, title, page } = payload;

      try {
        const api = await axios.get(
          `https://dapi.kakao.com/v3/search/book?sort=${sort}&target=${target}&page=${page}`,
          {
            headers: {
              Authorization: 'KakaoAK 3b9b7e5018ae18db72532378d670854e',
            },
            params: {
              query: title,
            },
          },
        );

        //검색된 아이템
        const { documents } = api.data;
        //검색된 아이템 전체의 갯수
        const { total_count } = api.data.meta;

        commit('updateState', {
          books: documents,
          page,
          message: '',
          searchs: { sort, target, title, total_count },
        });
      } catch (message) {
        commit('updateState', {
          books: [],
          message,
          searchs: [],
          page: 1,
        });
      }
    },
  },
};
