<template>
  <div class="hello">
    <h2>통신확인</h2>
    <div v-for="res in data" :key="res.index">{{ res }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  created() {
    this.$store.dispatch('auth/apply');
  },
  computed: {
    ...mapState('auth', ['data']),
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
