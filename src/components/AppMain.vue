<script>
export default {
  name: "AppMain",
};
</script>

<template>
  <form class="mb-3">
    <select class="form-select">
      <option selected>Select category</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </form>
  <main class="p-3">
    <div class="container">
      <div class="found py-1 px-3">
        <span>Found 62 character</span>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  max-width: 80rem;
  height: 100px;
  margin: auto;

  .found {
    background-color: #212529;
    color: #fff;
  }
}

form {
  width: 15%;
}

main {
  background-color: #fff;
}
</style>
