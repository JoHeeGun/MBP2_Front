<template>
  <div>
    <MyPageForm />
  </div>
</template>

<script>
import MyPageForm from '../../components/auth/MyPageForm.vue';

import { mapState } from 'vuex';
export default {
  components: {
    MyPageForm,
  },
  name: 'FrontVueMypage',

  data() {
    return {};
  },

  computed: {
    ...mapState('auth', ['user']),
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
