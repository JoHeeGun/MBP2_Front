<template>
  <div class="login">
    <div class="inners">
      <label style="color: white">아이디</label><br /><el-input
        placeholder="아이디를 입력하세요"
        class="input"
        v-model="id"
        style="width: 60%"
      ></el-input
      ><el-button type="warning" style="width: 15%" @click="check"
        >중복확인</el-button
      ><br />

      <label style="color: white">비밀번호</label><br /><el-input
        placeholder="비밀번호를 입력하세요"
        class="input"
        type="password"
        v-model="password"
        style="width: 70%"
      ></el-input
      ><br />

      <label style="color: white">비밀번호확인</label><br /><el-input
        placeholder="비밀번호를 입력하세요"
        class="input"
        type="password"
        v-model="passwordCheck"
        style="width: 70%"
      ></el-input
      ><br />

      <label style="color: white">이메일</label><br /><el-input
        placeholder="이메일을 입력하세요"
        class="input"
        v-model="email"
        style="width: 70%"
      ></el-input
      ><br />
      <br />
      <el-button type="warning" style="width: 40%" @click="join"
        >가 입 하 기</el-button
      >
    </div>
  </div>
</template>

<script>
import { validateEmail } from '../../utils/validation';
import { checkUserAPI, signupUserAPI } from '../../api/index';

export default {
  name: 'VueFrontendJoinform',

  data() {
    return {
      id: '',
      password: '',
      passwordCheck: '',
      email: '',
      idcheck: false,
    };
  },

  computed: {
    isUsernameValid() {
      return validateEmail(this.email);
    },
  },

  methods: {
    async check() {
      const api = await checkUserAPI({
        params: {
          id: this.id,
        },
      });
      if (api.data == 200) {
        alert('사용 가능한 아이디 입니다.');
        this.idcheck = true;
      } else {
        alert('이미 사용중인 아이디 입니다.');
        this.idcheck = false;
      }
    },
    async join() {
      if (!this.isUsernameValid) {
        alert('이메일 형식을 맞춰주세요');
      } else {
        if (
          this.password !== '' &&
          this.password === this.passwordCheck &&
          this.idcheck
        ) {
          await signupUserAPI({
            params: {
              id: this.id,
              password: this.password,
              email: this.email,
            },
          });
          alert('회원가입에 성공하였습니다.');
          this.$router.push('/Login');
        } else {
          alert('아이디 또는 비밀번호를 확인해주세요');
        }
      }
    },
  },
};
</script>

<style>
.innerss {
  background-color: #545c64;
  padding: 20px 20px;
  margin: 1% 20%;
  border-radius: 4;
  text-align: center;
}
</style>
