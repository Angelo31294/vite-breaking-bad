<script>
export default {
  name: "CardCharatter",
  props: {
    info: Object,
  },
};
</script>

<template>
  <div class="ms-card">
    <img class="img-fluid" :src="info.img" :alt="info.name" />
    <h4>
      <small>{{ info.name }}</small>
    </h4>
    <h5>
      <small>{{ info.category }}</small>
    </h5>
    <h6>
      <small>{{ info.status }}</small>
    </h6>
  </div>
</template>

<style lang="scss" scoped>
.ms-card {
  background-color: #2e3a46;
  width: 9.375rem;
  height: 21.875rem;
  padding: 0.625rem;
  margin: 0.9375rem 2.5rem;
  text-align: center;
}

h5,
h6 {
  color: lightgrey;
}
</style>
