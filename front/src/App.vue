<template>
  <v-app>
    <div v-if="!loginPage">
      <side-bar></side-bar>
    </div>
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

  data() {
    return {
      loginPage: false
    }
  },
  watch: {
    '$route.name'(newName) {
      // this.loginPage = this.router.name === 'login';
      if (newName === 'login' || newName === 'signin') {
        this.loginPage = true
      }
    }
  },
  computed: {
    notLoged() {
      return this.router.name !== 'login'
    }
  }
};
</script>
