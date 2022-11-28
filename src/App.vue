<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />
  <div class="container">
    <AppMain />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@import "./style/global.scss";
body {
  background-color: #2e3a46;
  color: #fff;
}
</style>
