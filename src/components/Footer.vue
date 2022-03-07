<template>
  <footer>
    <a href="https://github.com/JoHeeGun" target="_blank">
      (c) {{ new Date().getFullYear() }} HeeGun's Project
    </a>
  </footer>
</template>

<script>
export default {
  name: 'VueFrontendFooter',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
footer {
  padding: 180px 0;
  text-align: center;
}
</style>
