<template>
  <div>
    <div class="search">
      <h2>회원목록</h2>
      <el-input
        style="width: 50%"
        size="medium"
        placeholder="회원을 검색하세요"
        @keyup.native.enter="search"
        v-model="schVal"
      >
      </el-input>

      <el-button
        type="warning"
        style="margin-left: 10px; width: 10%"
        @click="search"
        >검 색</el-button
      >
    </div>

    <div class="boards">
      <el-table
        :data="userList"
        stripe
        @current-change="handleCurrentChange"
        align="center"
      >
        <el-table-column prop="id" label="아이디" width="200%">
        </el-table-column>
        <el-table-column prop="email" label="이메일" width="200">
        </el-table-column>
        <el-table-column prop="join_at" label="가입날짜" width="200">
        </el-table-column>
      </el-table>
      <div>
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          :current-page.sync="pages"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'FrontVueAdminform',

  data() {
    return {
      schVal: '',
    };
  },

  computed: {
    ...mapState('auth', ['id', 'userList', 'total']),
    pages: {
      get() {
        return this.$store.state.auth.page;
      },
      set(page) {
        this.$store.dispatch('auth/fetchUserList', {
          page: page,
          schVal: '',
        });
      },
    },
  },

  methods: {
    handleCurrentChange(val) {
      console.log(val.id);
      const data = val.id;
      this.$router.push(`/UserInfo/${data}`);
    },
    search() {
      this.$store.dispatch('auth/fetchUserList', {
        page: 1,
        schVal: this.schVal,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
