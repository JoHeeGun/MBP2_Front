<template>
  <div class="login">
    <el-page-header @back="goBack" title="뒤로가기" style="margin-bottom: 1%">
    </el-page-header>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div>
          <span>아이디 : {{ user.id }}</span>
        </div>
      </div>
      <div style="float: left; padding: 30px 30px 30px 30px">
        이메일 : {{ user.email }} <br />가입일자 : {{ user.join_at }}
        <div>
          <br />
        </div>
      </div>
      <br /> </el-card
    ><br />
    <el-button type="warning" @click="userPost">작성한 글 보기</el-button>
    <!-- <el-button type="warning" @click="$router.push('/EditUser')"
      >회원 수정</el-button
    > -->
    <el-button type="warning" @click="userDeleted">회원 삭제</el-button>
  </div>
</template>

<script>
import { deleteUser } from '../../api/index';

import { mapState } from 'vuex';
export default {
  name: 'FrontVueUserinfoform',

  data() {
    return {
      schVal: '',
    };
  },

  computed: {
    ...mapState('auth', ['id', 'user']),
  },

  created() {
    this.$store.dispatch('auth/getUser', {
      id: this.$route.params.id,
    });
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    userPost() {
      this.$router.push(`/MyPost/${this.$route.params.id}`);

      this.$store.dispatch('community/fetchmyhBoard', {
        page: 1,
        schVal: this.$route.params.id,
        id: this.$route.params.id,
      });
    },
    async userDeleted() {
      if (confirm('회원을 삭제 하시겠습니까??')) {
        await deleteUser({
          params: {
            id: this.$route.params.id,
          },
        });
        this.$router.go(-1);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
