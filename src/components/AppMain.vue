<script>
import axios from "axios";
import { store } from "../store";
import SectionCharacter from "./SectionCharacter.vue";
import SelectSection from "./SelectSection.vue";
export default {
  name: "AppMain",
  components: {
    SectionCharacter,
    SelectSection,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    searching() {
      axios
        .get("https://www.breakingbadapi.com/api/characters", {
          params: {
            category: this.store.searchValue,
          },
        })
        .then((resp) => {
          this.store.characters = resp.data;
        });
    },
  },
  created() {
    axios.get("https://www.breakingbadapi.com/api/characters").then((resp) => {
      this.store.characters = resp.data;
    });
  },
};
</script>

<template>
  <div class="ms-container">
    <SelectSection @search="searching" />
    <SectionCharacter />
  </div>
</template>

<style lang="scss" scoped>
.ms-container {
  width: var(--ms-container);
}
</style>
