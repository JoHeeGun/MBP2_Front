<template>
  <div class="login">
    <el-page-header
      @back="goBack"
      title="뒤로가기"
      style="margin-bottom: 1%; padding-left: 20%"
    >
    </el-page-header>
    <h2>공지사항 작성</h2>
    <div class="inners">
      <label style="color: white">제목</label><br /><el-input
        placeholder="글 제목을 입력하세요"
        class="input"
        v-model="title"
        style="width: 80%"
      ></el-input
      ><br />

      <label style="color: white">내용</label><br /><el-input
        type="textarea"
        :autosize="{ minRows: 16, maxRows: 24 }"
        placeholder="글 내용을 입력하세요"
        class="input"
        v-model="content"
        style="width: 90%"
      ></el-input>

      <br />
      <el-button type="warning" style="width: 40%" @click="write"
        >작성하기</el-button
      >
    </div>
  </div>
</template>

<script>
import { insertNoticeAPI } from '../../api/index';
import { mapState } from 'vuex';

export default {
  name: 'FrontVueCreatenoticeform',

  data() {
    return {
      title: '',
      content: '',
    };
  },

  computed: {
    ...mapState('auth', ['id']),
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async write() {
      try {
        await insertNoticeAPI({
          params: {
            id: this.id,
            title: this.title,
            content: this.content,
          },
        });

        this.$router.go(-1);
      } catch (message) {
        alert(message);
      }
    },
  },
};
</script>

<style></style>
