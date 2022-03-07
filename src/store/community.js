import {
  getBoardListAPI,
  getBoardDetailAPI,
  getReplyListAPI,
  getmyBoardListAPI,
} from '../api/index';

export default {
  namespaced: true,
  state: {
    community: [],
    coDetail: '',
    reply: '',
    total: '',
    page: 1,
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
    async fetchBoard({ commit }, payload) {
      const { page, schVal, schType } = payload;

      console.log(page, schType, schVal);

      try {
        const res = await getBoardListAPI({
          params: {
            rows: 10,
            page,
            schVal,
            schType,
          },
        });

        const community = res.data.data;
        const total = res.data.total;

        commit('updateState', {
          community,
          total,
          page,
        });
      } catch (message) {
        alert(message);
      }
    },
    async communityDetail({ commit }, payload) {
      const { board_num } = payload;

      try {
        const res = await getBoardDetailAPI({
          params: {
            board_num,
          },
        });

        const res2 = await getReplyListAPI({
          params: {
            board_num,
          },
        });
        const coDetail = res.data;
        const reply = res2.data.data;

        commit('updateState', {
          coDetail,
          reply,
        });
      } catch (message) {
        alert(message);
      }
    },
    // async fetchmyhBoard({ commit }, payload) {
    //   const { page, schVal } = payload;

    //   console.log(page, schVal);

    //   try {
    //     const res = await getmyBoardListAPI({
    //       params: {
    //         rows: 10,
    //         page,
    //         schVal,
    //       },
    //     });

    //     const community = res.data.data;
    //     const total = res.data.total;

    //     commit('updateState', {
    //       community,
    //       total,
    //       page,
    //     });
    //   } catch (message) {
    //     alert(message);
    //   }
    // },
    async fetchmyhBoard({ commit }, payload) {
      const { page, schVal, id } = payload;

      console.log(page, schVal, id);

      try {
        const res = await getmyBoardListAPI({
          params: {
            rows: 10,
            page,
            schVal,
            id,
          },
        });
        console.log(res);

        const community = res.data.data;
        const total = res.data.total;

        commit('updateState', {
          community,
          total,
          page,
        });
      } catch (message) {
        alert(message);
      }
    },
  },
};
