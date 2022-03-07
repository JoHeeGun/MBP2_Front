<template>
  <div class="login">
    <el-page-header
      @back="goBack"
      title="뒤로가기"
      style="margin-bottom: 1%; padding-left: 20%"
    >
    </el-page-header>
    <h2>공지사항 수정</h2>
    <div class="inners">
      <label style="color: white">제목</label><br /><el-input
        class="input"
        v-model="title"
        style="width: 70%"
      ></el-input>

      <br />

      <label style="color: white">내용</label><br /><el-input
        type="textarea"
        :autosize="{ minRows: 16, maxRows: 24 }"
        class="input"
        v-model="content"
        style="width: 90%"
      ></el-input>

      <br />
      <el-button type="warning" style="width: 40%" @click="edit"
        >수정하기</el-button
      >
    </div>
  </div>
</template>

<script>
import { getNoticeDetailAPI, updateNoticeAPI } from '../../api/index';

export default {
  name: 'FrontVueEditnoticeform',

  data() {
    return {
      title: '',
      content: '',
    };
  },
  async created() {
    try {
      const { data } = await getNoticeDetailAPI({
        params: {
          notice_num: this.$route.params.id,
        },
      });
      this.title = data.title;
      this.content = data.content;
    } catch (message) {
      alert(message);
    }
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async edit() {
      try {
        await updateNoticeAPI({
          params: {
            notice_num: this.$route.params.id,
            title: this.title,
            content: this.content,
          },
        });
      } catch (message) {
        alert(message);
      }

      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
