<template>
  <div class="myPage">
    <h2>내 정보</h2>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div>
          <span>환영합니다 {{ user.id }}님</span>
        </div>

        <br />
      </div>
      <div style="float: left; padding: 30px 30px 30px 30px">
        아이디 : {{ user.id }} <br />
        이메일: {{ user.email }}<br />
        가입일자: {{ user.join_at }}
      </div>
      <br />
    </el-card>
    <br />
    <el-button type="warning" @click="mypost">내 글 보기</el-button>
    <el-button type="warning" @click="$router.push('/EditUser')"
      >회원 수정</el-button
    >
    <el-button type="warning" @click="deleted">회원 탈퇴</el-button>
  </div>
</template>

<script>
import { deleteCookie } from '../../utils/cookies';
import { deleteUser } from '../../api/index';

import { mapState } from 'vuex';

export default {
  name: 'FrontVueMypageform',

  data() {
    return {};
  },

  computed: {
    ...mapState('auth', ['id', 'user']),
  },
  created() {
    this.$store.dispatch('auth/getUser', {
      id: this.id,
    });
  },

  methods: {
    mypost() {
      console.log('내 글 보기');
      this.$router.push(`/MyPost/${this.id}`);

      this.$store.dispatch('community/fetchmyhBoard', {
        page: 1,
        schVal: '',
        id: this.id,
      });
    },
    async deleted() {
      if (confirm('회원을 탈퇴 하시겠습니까??')) {
        await deleteUser({
          params: {
            id: this.id,
          },
        });
        this.$store.commit('auth/updateState', {
          id: '',
        });

        deleteCookie('jhg_user');
        this.$router.push('/');
      }
    },
  },
};
</script>

<style>
.myPage {
  align-items: center;
  justify-content: center;
  padding: 2% 20% 0.5% 20%;
}
</style>
