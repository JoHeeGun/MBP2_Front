<template>
  <div class="login">
    <div class="inners">
      <label style="color: white">아이디</label><br /><el-input
        placeholder="아이디를 입력하세요"
        class="input"
        v-model="id"
        style="width: 70%"
      ></el-input
      ><br />

      <label style="color: white">비밀번호</label><br /><el-input
        placeholder="비밀번호를 입력하세요"
        @keyup.native.enter="login"
        class="input"
        type="password"
        v-model="password"
        style="width: 70%"
      ></el-input
      ><br />
      <br />
      <el-button type="warning" style="width: 40%" @click="login"
        >로 그 인</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueFrontendLoginform',

  data() {
    return {
      id: '',
      password: '',
    };
  },

  mounted() {},

  methods: {
    login() {
      if (this.id === '' || this.password === '') {
        alert('빈칸없이 기입해 주세요');
        this.$router.push('/login');
      } else {
        this.$store.dispatch('auth/login', {
          id: this.id,
          password: this.password,
        });
        this.$router.push('/');
      }
    },
  },
};
</script>

<style>
.login {
  align-items: center;
  justify-content: center;
  padding: 2% 15% 0.5% 15%;
}
.inners {
  background-color: #545c64;
  padding: 20px 0;
  margin: 1% 20%;
  border-radius: 4;
  text-align: center;
}
.input {
  padding: 20px 20px 20px 20px;
}
</style>
