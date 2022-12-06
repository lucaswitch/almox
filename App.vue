<template>
  <v-app>
    <side-bar></side-bar>
    <v-main class="mx-5 my-5">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  components: {
    SideBar,
  },
};
</script>
