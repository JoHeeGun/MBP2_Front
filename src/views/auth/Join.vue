<template>
  <div>
    <h2>회원가입</h2>
    <JoinForm />
  </div>
</template>

<script>
import JoinForm from '../../components/auth/JoinForm.vue';

export default {
  components: {
    JoinForm,
  },
  name: 'FrontVueJoin',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
