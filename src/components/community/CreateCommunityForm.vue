<template>
  <div class="login">
    <el-page-header
      @back="goBack"
      title="뒤로가기"
      style="margin-bottom: 1%; padding-left: 20%"
    >
    </el-page-header>
    <div class="inners">
      <label style="color: white">제목</label><br /><el-input
        placeholder="글 제목을 입력하세요"
        class="input"
        v-model="title"
        style="width: 70%"
      ></el-input>

      <el-select
        v-model="category"
        @change="change"
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
        placeholder="글 내용을 입력하세요"
        class="input"
        v-model="content"
        style="width: 92%"
      ></el-input>

      <br />
      <el-button type="warning" style="width: 40%" @click="write"
        >작성하기</el-button
      >
    </div>
  </div>
</template>

<script>
import { insertBoardAPI } from '../../api/index';
import { mapState } from 'vuex';

export default {
  name: 'FrontVueCreatecommunityform',

  data() {
    return {
      title: '',
      content: '',
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
      category: '',
    };
  },

  computed: {
    ...mapState('auth', ['id']),
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    change(val) {
      console.log(val);
    },
    async write() {
      try {
        await insertBoardAPI({
          params: {
            id: this.id,
            title: this.title,
            content: this.content,
          },
        });
        this.$router.push('/community');
      } catch (message) {
        alert(message);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
