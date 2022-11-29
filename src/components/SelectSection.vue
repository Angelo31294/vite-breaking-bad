<script>
import { store } from "../store";
export default {
  name: "SelectSection",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <form class="container-sm mb-4" @click.prevent="$emit('search')">
    <select class="form" name="category" v-model="store.searchValue">
      <option value="" selected>Select Category</option>
      <option value="Breaking Bad">Breaking Bad</option>
      <option value="Better Call Saul">Better Call Saul</option>
    </select>
  </form>
</template>

<style lang="scss" scoped>
.form {
  padding: 0.3125rem 0.625rem;
  text-align: center;
}
</style>
