import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import book from './book';
import notice from './notice';
import community from './community';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    book,
    notice,
    community,
  },
});
