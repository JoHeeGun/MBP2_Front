<template>
  <a
    :href="book.url"
    target="_blank"
    class="book"
    :style="{ backgroundImage: `url(${book.thumbnail})` }"
  >
    <div class="info">
      <div class="title">
        {{ book.title }}
      </div>
      <div class="authors">
        {{ book.authors }}
      </div>
      <div class="authors">{{ book.price }}원</div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'VueFrontendBookitem',
  props: {
    book: {
      type: Object,
    },
  },
};
</script>

<style>
.book {
  width: 17%;
  height: 300px;
  margin: 10px;
  border-radius: 4px;
  background-color: #000000;
  background-size: cover;
  position: relative;
}
.info {
  background-color: #2e2e2e;
  backdrop-filter: blur(10px);
  width: 100%;
  padding: 14px;
  font-size: 14px;
  text-align: center;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
}
.title {
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.authors {
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
