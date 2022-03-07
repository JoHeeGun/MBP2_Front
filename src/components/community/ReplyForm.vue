<template>
  <div>
    <!-- 수정모드 -->
    <div v-if="editMode">
      <el-card>
        <div slot="header" class="clearfix">
          <span style="float: left">{{ reply.id }}</span
          ><br />
        </div>

        <el-input
          type="textarea"
          placeholder="댓글을 수정하세요"
          class="input"
          style="width: 95%"
          v-model="editContent"
        >
        </el-input>

        <br />
        <el-button
          style="float: right; padding: 1%"
          type="text"
          @click="replyEdit"
          >댓글 수정</el-button
        >
      </el-card>
    </div>

    <!-- 수정모드아닐때 -->
    <div v-else>
      <el-card>
        <div slot="header" class="clearfix">
          <span style="float: left">{{ reply.id }}</span
          ><br />
          <div v-if="id === reply.id">
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
              @click="onEditMode"
              >수정하기</el-button
            >
            <el-button
              style="float: right; padding: 3px 0; margin-right: 30px"
              type="text"
              @click="deletedReply"
              >삭제하기</el-button
            >
          </div>
          <br />
        </div>
        <div style="float: left; white-space: pre-line; text-align: left">
          {{ reply.content }}
        </div>
        <div style="text-align: right">{{ reply.created_at }}</div>
        <br />
      </el-card>
    </div>
  </div>
</template>

<script>
import { deleteReplyAPI, updateReplyAPI } from '../../api/index';
import { mapState } from 'vuex';

export default {
  props: {
    reply: Object,
  },
  data() {
    return {
      editMode: false,
      editContent: '',
    };
  },
  computed: {
    ...mapState('auth', ['id']),
  },

  created() {
    console.log('zzzzz', this.reply);
  },

  methods: {
    async deletedReply() {
      if (confirm('댓글을 삭제하시겠습니까?')) {
        try {
          await deleteReplyAPI({
            params: {
              board_num: this.$route.params.id,
              reply_num: this.reply.reply_num,
            },
          });
          this.$store.dispatch('community/communityDetail', {
            board_num: this.$route.params.id,
          });
        } catch (message) {
          alert(message);
        }
      }
    },
    onEditMode() {
      this.editContent = this.reply.content;
      this.editMode = true;
    },
    offEditMode() {
      this.editMode = false;
    },
    async replyEdit() {
      if (this.reply.content != this.editContent) {
        try {
          await updateReplyAPI({
            params: {
              board_num: this.$route.params.id,
              reply_num: this.reply.reply_num,
              content: this.editContent,
            },
          });
          this.$store.dispatch('community/communityDetail', {
            board_num: this.$route.params.id,
          });
        } catch (message) {
          alert(message);
        }
      }
      this.offEditMode();
    },
  },
};
</script>

<style lang="scss" scoped></style>
