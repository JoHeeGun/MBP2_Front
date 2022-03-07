<template>
  <div class="search">
    <el-input
      style="width: 40%"
      size="medium"
      placeholder="도서를 검색하세요"
      @keyup.native.enter="apply"
      v-model="title"
    >
    </el-input>

    <el-select
      v-model="sort"
      placeholder="정확도순"
      size="large"
      style="margin-left: 2%"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-select
      v-model="target"
      placeholder="제목"
      size="large"
      style="margin-left: 2%"
    >
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-button type="warning" style="margin-left: 1%; width: 15%" @click="apply"
      >검 색</el-button
    >
  </div>
</template>

<script>
export default {
  name: 'VueFrontendSearch',

  data() {
    return {
      options: [
        {
          value: 'accuracy',
          label: '정확도순',
        },
        {
          value: 'latest',
          label: '발간일순',
        },
      ],
      options2: [
        {
          value: 'title',
          label: '제목',
        },
        {
          value: 'publisher',
          label: '출판사',
        },
        {
          value: 'person',
          label: '저자',
        },
      ],

      sort: '',
      target: '',
      title: '',
    };
  },
  methods: {
    apply() {
      this.$store.dispatch('book/searchBooks', {
        page: 1,
        title: this.title,
        sort: this.sort,
        target: this.target,
      });
    },
  },
};
</script>

<style>
.search {
  align-items: center;
  justify-content: center;
  padding: 2% 15% 0.5% 15%;
  float: center;
}
</style>
