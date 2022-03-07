<template>
  <div>
    <div class="search">
      <h2>회원 게시물</h2>
      <el-input
        style="width: 70%"
        size="medium"
        placeholder="게시글을 검색하세요"
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
        :data="community"
        stripe
        @current-change="handleCurrentChange"
        align="center"
      >
        <el-table-column prop="board_num" label="글 번호" width="180">
        </el-table-column>
        <el-table-column prop="title" label="제목" width="400">
        </el-table-column>
        <el-table-column prop="id" label="작성자" width="200">
        </el-table-column>
        <el-table-column prop="view" label="조회수" width="200">
        </el-table-column>
        <el-table-column prop="reply" label="댓글수" width="200">
        </el-table-column>
        <el-table-column prop="created_at" label="작성시간" width="200">
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
  name: 'FrontVueMypost',

  data() {
    return {
      schVal: '',
    };
  },

  computed: {
    ...mapState('auth', ['id']),
    ...mapState('community', ['community', 'total']),
    pages: {
      get() {
        return this.$store.state.community.page;
      },
      set(page) {
        this.$store.dispatch('community/fetchmyhBoard', {
          page: page,
          schVal: this.schVal,
          id: this.$route.params.id,
        });
      },
    },
  },

  methods: {
    handleCurrentChange(val) {
      if (this.id) {
        const data = val.board_num;

        this.$router.push(`/CommunityDetail/${data}`);
        this.$route.params.data;
      } else {
        alert('회원만 이용할 수 있는 서비스 입니다.');
      }
    },
    search() {
      this.$store.dispatch('community/fetchmyhBoard', {
        page: 1,
        schVal: this.schVal,
        id: this.$route.params.id,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
