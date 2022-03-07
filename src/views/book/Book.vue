<template>
  <div>
    <BookSearch />
    <BookList />
  </div>
</template>

<script>
import BookSearch from '../../components/book/BookSearch.vue';
import BookList from '../../components/book/BookList.vue';

export default {
  components: {
    BookSearch,
    BookList,
  },
  name: 'VueFrontendBook',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
