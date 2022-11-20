<template>
  <the-navbar></the-navbar>
  <router-view></router-view>
</template>

<script>
import TheNavbar from "./components/layout/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
