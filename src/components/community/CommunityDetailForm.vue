<template>
  <div class="login">
    <el-page-header @back="goBack" title="뒤로가기" style="margin-bottom: 1%">
    </el-page-header>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div>
          <span>{{ coDetail.title }}</span>
        </div>

        <el-button
          v-if="id === coDetail.id"
          style="float: right; padding: 3px 0"
          type="text"
          @click="edit"
          >수정하기</el-button
        >
        <el-button
          v-if="id === coDetail.id"
          style="float: right; padding: 3px 0; margin-right: 30px"
          type="text"
          @click="deleted"
          >삭제하기</el-button
        ><br />
      </div>
      <div
        style="
          padding: 30px 30px 30px 30px;
          white-space: pre-line;
          text-align: left;
        "
      >
        {{ coDetail.content }}
        <div>
          <br />
        </div>
      </div>

      <br />
      <div style="float: right; padding: 30px 30px 30px 30px">
        {{ coDetail.created_at }} / 조회수 : {{ coDetail.view }} / 작성자 :
        {{ coDetail.id }}
      </div>
      <br /> </el-card
    ><br />
    <el-card style="margin-bottom: 1%">
      <div style="float: left; margin-left: 3%">{{ id }}님</div>
      <el-input
        type="textarea"
        placeholder="댓글을 입력하세요"
        class="input"
        style="width: 95%"
        v-model="content"
      >
      </el-input>
      <el-button
        style="float: right; padding: 1%"
        type="text"
        @click="createReply"
        >댓글 작성</el-button
      >
    </el-card>
    <reply-form v-for="reply in reply" :key="reply.reply_num" :reply="reply" />
  </div>
</template>

<script>
import { deleteBoardAPI, insertReplyAPI } from '../../api/index';
import ReplyForm from './ReplyForm.vue';
import { mapState } from 'vuex';

export default {
  components: {
    ReplyForm,
  },
  name: 'FrontVueCommunitydetail',

  data() {
    return {
      content: '',
    };
  },
  computed: {
    ...mapState('auth', ['id']),
    ...mapState('community', ['coDetail', 'reply']),
  },
  created() {
    this.$store.dispatch('community/communityDetail', {
      board_num: this.$route.params.id,
    });
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    edit() {
      console.log('글수정');
      this.$router.push(`/EditCommunity/${this.$route.params.id}`);
    },
    async deleted() {
      if (confirm('삭제하시겠습니까?')) {
        try {
          await deleteBoardAPI({
            params: {
              board_num: this.$route.params.id,
            },
          });
          this.$router.go(-1);
        } catch (message) {
          alert(message);
        }
      }
    },
    async createReply() {
      try {
        await insertReplyAPI({
          params: {
            id: this.id,
            content: this.content,
            board_num: this.$route.params.id,
          },
        });
        this.$store.dispatch('community/communityDetail', {
          board_num: this.$route.params.id,
        });
        this.content = '';
      } catch (message) {
        alert(message);
      }
    },
  },
};
</script>

<style></style>
