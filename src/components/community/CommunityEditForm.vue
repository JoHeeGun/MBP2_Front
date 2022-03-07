<template>
  <div class="login">
    <el-page-header
      @back="goBack"
      title="뒤로가기"
      style="margin-bottom: 1%; padding-left: 20%"
    >
    </el-page-header>
    <h2>글 수정</h2>
    <div class="inners">
      <label style="color: white">제목</label><br /><el-input
        placeholder="글 제목을 수정하세요"
        class="input"
        v-model="title"
        style="width: 70%"
      ></el-input>

      <el-select
        v-model="category"
        placeholder="카테고리선택"
        size="small"
        style="width: 16%"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <br />

      <label style="color: white">내용</label><br /><el-input
        type="textarea"
        :autosize="{ minRows: 16, maxRows: 24 }"
        placeholder="글 내용을 수정하세요"
        class="input"
        v-model="content"
        style="width: 92%"
      ></el-input>

      <br />
      <el-button type="warning" style="width: 40%" @click="edit"
        >수정하기</el-button
      >
    </div>
  </div>
</template>

<script>
import { updateBoardAPI, getBoardDetailAPI } from '../../api/index';

export default {
  name: 'FrontVueCommunityeditform',

  data() {
    return {
      options: [
        {
          value: '자유',
          label: '자유게시판',
        },
        {
          value: '질문',
          label: '질문게시판',
        },
      ],
      title: '',
      content: '',
      category: '',
    };
  },

  async created() {
    try {
      const { data } = await getBoardDetailAPI({
        params: {
          board_num: this.$route.params.id,
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
        await updateBoardAPI({
          params: {
            board_num: this.$route.params.id,
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

<style lang="scss" scoped></style>
