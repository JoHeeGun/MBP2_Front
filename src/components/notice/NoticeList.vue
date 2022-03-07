<template>
  <div class="boards">
    <h2>공지사항</h2>
    <br />
    <div style="margin-bottom: 3%">
      <el-input
        style="width: 60%"
        size="medium"
        placeholder="검색어를 입력하세요"
        @keyup.native.enter="apply"
        v-model="schVal"
      >
      </el-input>

      <el-button
        type="warning"
        style="margin-left: 3%; width: 13%"
        @click="apply"
        >검 색</el-button
      >
    </div>
    <br />
    <el-table
      :data="notice"
      stripe
      @current-change="handleCurrentChange"
      align="center"
    >
      <el-table-column prop="notice_num" label="글 번호" width="180">
      </el-table-column>
      <el-table-column prop="title" label="제목" width="400"> </el-table-column>
      <el-table-column prop="id" label="작성자" width="200"> </el-table-column>
      <el-table-column prop="view" label="조회수" width="200">
      </el-table-column>
      <el-table-column prop="created_at" label="작성시간" width="300">
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
    <div v-if="id === 'admin'">
      <el-button
        type="warning"
        icon="el-icon-edit"
        circle
        style="float: left; margin: 30px"
        @click="create"
      ></el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'VueFrontendNotice',

  data() {
    return {
      schVal: '',
    };
  },

  computed: {
    ...mapState('notice', ['notice', 'total']),
    ...mapState('auth', ['id']),
    pages: {
      get() {
        return this.$store.state.notice.page;
      },
      set(page) {
        this.$store.dispatch('notice/fetchNotice', {
          page: page,
          schVal: this.schVal,
        });
      },
    },
  },

  methods: {
    handleCurrentChange(val) {
      const data = val.notice_num;
      this.$router.push(`/NoticeDetail/${data}`);
    },
    create() {
      this.$router.push('/CreateNotice');
    },
    apply() {
      this.$store.dispatch('notice/fetchNotice', {
        page: 1,
        schVal: this.schVal,
      });
    },
  },
};
</script>

<style>
.table {
  align-items: center;
  justify-content: center;
  padding: 2% 10% 10% 10%;
}
.boards {
  padding: 2% 10% 10% 10%;
  float: center;
}
.notice {
  float: center;
}
</style>
