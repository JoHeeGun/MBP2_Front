<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" style="margin-left: 20px"
        ><div ref="home" @click="$router.push('/')">홈 로고</div></el-menu-item
      >
      <el-menu-item index="2" style="margin-left: 50px"
        ><div @click="$router.push('/Book')">도서 검색</div></el-menu-item
      >
      <el-menu-item index="3"
        ><div @click="$router.push('/Community')">커뮤니티</div></el-menu-item
      >

      <div v-if="id">
        <el-menu-item
          index="4"
          style="float: right; margin-right: 30px"
          @click="logout"
          ><div>로그아웃</div></el-menu-item
        >
        <el-menu-item index="5" style="float: right"
          ><div @click="$router.push('/MyPage')">마이페이지</div></el-menu-item
        >
      </div>

      <div v-else>
        <el-menu-item index="6" style="float: right; margin-right: 30px"
          ><div @click="$router.push('/Join')">회원가입</div></el-menu-item
        >
        <el-menu-item index="7" style="float: right"
          ><div @click="$router.push('/Login')">로그인</div></el-menu-item
        >
      </div>

      <div v-if="id === 'admin'">
        <el-menu-item index="8" style="float: right"
          ><div @click="$router.push('/Admin')">회원관리</div></el-menu-item
        >
      </div>
    </el-menu>
  </div>
</template>

<script>
import { deleteCookie } from '../utils/cookies';
import { mapState } from 'vuex';

export default {
  name: 'VueFrontendHeader',

  data() {
    return {};
  },

  computed: {
    ...mapState('auth', ['id']),
  },

  methods: {
    logout() {
      this.$store.commit('auth/updateState', {
        id: '',
      });
      deleteCookie('jhg_user');
      alert('로그아웃 하였습니다. ');
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped></style>
