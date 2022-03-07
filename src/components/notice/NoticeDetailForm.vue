<template>
  <div class="login">
    <el-page-header @back="goBack" title="뒤로가기" style="margin-bottom: 1%">
    </el-page-header>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div>
          <span>{{ noDetail.title }}</span>
        </div>
        <el-button
          v-if="id === noDetail.id"
          style="float: right; padding: 3px 0"
          type="text"
          @click="edit"
          >수정하기</el-button
        >
        <el-button
          v-if="id === noDetail.id"
          style="float: right; padding: 3px 0; margin-right: 30px"
          type="text"
          @click="deleted"
          >삭제하기</el-button
        >
      </div>
      <div
        style="
          padding: 30px 30px 30px 30px;
          white-space: pre-line;
          text-align: left;
        "
      >
        {{ noDetail.content }}
      </div>
      <br />
      <div style="float: right; padding: 30px 30px 30px 30px">
        {{ noDetail.created_at }} / 조회수 : {{ noDetail.view }} / 작성자 :
        {{ noDetail.id }}
      </div>
      <br />
    </el-card>
  </div>
</template>

<script>
import { deleteNoticeAPI } from '../../api/index';
import { mapState } from 'vuex';

export default {
  name: 'FrontVueNoticedetailform',

  data() {
    return {};
  },
  computed: {
    ...mapState('auth', ['id']),
    ...mapState('notice', ['noDetail']),
  },

  created() {
    this.$store.dispatch('notice/noticeDetail', {
      notice_num: this.$route.params.id,
    });
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    edit() {
      this.$router.push(`/EditNotice/${this.$route.params.id}`);
    },
    async deleted() {
      if (confirm('삭제하시겠습니까?')) {
        try {
          await deleteNoticeAPI({
            params: {
              notice_num: this.$route.params.id,
            },
          });
          this.$router.go(-1);
        } catch (message) {
          alert(message);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
