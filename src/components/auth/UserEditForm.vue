<template>
  <div class="login">
    <el-page-header
      @back="goBack"
      title="뒤로가기"
      style="margin-bottom: 1%; padding-left: 20%"
    >
    </el-page-header>
    <h2>회원 정보 수정</h2>

    <div class="inners">
      <label style="color: white">아이디</label><br /><el-input
        disabled
        class="input"
        v-model="id"
        style="width: 70%"
      ></el-input
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
        placeholder="비밀번호를 확인하세요"
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
      <el-button type="warning" style="width: 40%" @click="edit"
        >수 정 하 기</el-button
      >
    </div>
  </div>
</template>

<script>
import { updateUser } from '../../api/index';

import { mapState } from 'vuex';

export default {
  name: 'FrontVueUsereditform',

  data() {
    return {
      password: '',
      passwordCheck: '',
      email: '',
    };
  },
  created() {
    this.email = this.user.email;
  },
  computed: {
    ...mapState('auth', ['id', 'user']),
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async edit() {
      if (this.password !== '' && this.password === this.passwordCheck) {
        await updateUser({
          params: {
            id: this.id,
            password: this.password,
            email: this.email,
          },
        });
        alert('회원정보를 수정하였습니다 ');
        this.$router.push('/MyPage');
      } else {
        alert('회원정보 수정에 실패하였습니다!');
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
