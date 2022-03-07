<template>
  <div>
    <h2>로그인</h2>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '../../components/auth/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
  name: 'FrontVueLogin',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
