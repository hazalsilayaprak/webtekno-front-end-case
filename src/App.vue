<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div> 
</template>

<script>
import navbar from "./components/layouts/Navbar";

export default {
  components: {
    navbar
  }
}
</script>

<style lang="scss">
</style>
