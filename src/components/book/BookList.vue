<template>
  <div class="container">
    <div class="inner">
      <div v-if="message" class="message">{{ message }} <br /></div>
      <div v-else>
        <div v-if="this.searchs.total_count">
          <div class="books">
            <book-item v-for="book in books" :key="book.isbn" :book="book" />
          </div>
          <div>
            <el-pagination
              layout="prev, pager, next"
              :total="searchs.total_count"
              :current-page.sync="pages"
            >
            </el-pagination>
          </div>
        </div>
        <div v-else>
          <h2>검색결과가 없습니다</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BookItem from './BookItem.vue';

export default {
  components: {
    BookItem,
  },
  name: 'VueFrontendList',
  computed: {
    ...mapState('book', ['books', 'searchs', 'message']),
    pages: {
      get() {
        return this.$store.state.book.page;
      },
      set(page) {
        this.$store.dispatch('book/searchBooks', {
          page: page,
          sort: this.searchs.sort,
          target: this.searchs.target,
          title: this.searchs.title,
        });
      },
    },
    // books() {
    //   return this.$store.state.book.books;
    // },
    // searchs() {
    //   return this.$store.state.book.searchs;
    // },
    // message() {
    //   return this.$store.state.book.message;
    // },
  },
  methods: {},
};
</script>

<style>
.container {
  margin-top: 30px;
  padding: 2% 15% 2% 15%;
}
.inner {
  background-color: #c8c8c8;
  padding: 20px 0;
  border-radius: 4;
  text-align: center;
}
.books {
  display: flex;
  padding-left: 50px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
