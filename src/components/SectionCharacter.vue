<script>
import CardCharatter from "./CardCharatter.vue";
import { store } from "../store";
export default {
  name: "SectionCharacter",
  components: {
    CardCharatter,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <CardCharatter v-for="character in store.characters" :info="character" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: auto;
  background-color: #fff;
  padding: 1.25rem 2.5rem;
}
</style>
