import { getNoticeListAPI, getNoticeDetailAPI } from '../api/index';

export default {
  namespaced: true,
  state: {
    notice: [],
    noDetail: '',
    page: 1,
    total: '',
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
    async fetchNotice({ commit }, payload) {
      const { schVal, page } = payload;

      try {
        const res = await getNoticeListAPI({
          params: {
            rows: 10,
            page,
            schVal,
          },
        });
        const notice = res.data.data;
        const total = res.data.total;

        commit('updateState', {
          notice,
          page,
          total,
        });
      } catch (message) {
        alert(message);
      }
    },
    async noticeDetail({ commit }, payload) {
      const { notice_num } = payload;

      try {
        const res = await getNoticeDetailAPI({
          params: {
            notice_num,
          },
        });

        const noDetail = res.data;

        commit('updateState', {
          noDetail,
        });
      } catch (message) {
        alert(message);
      }
    },
  },
};
