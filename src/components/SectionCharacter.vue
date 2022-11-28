<script>
import axios from "axios";
import CardCharatter from "./CardCharatter.vue";
export default {
  name: "SectionCharacter",
  components: {
    CardCharatter,
  },
  data() {
    return {
      characters: [],
    };
  },
  created() {
    axios.get("https://www.breakingbadapi.com/api/characters").then((resp) => {
      console.log(resp.data.results);
      this.characters = resp.data.results;
    });
  },
};
</script>
<template>
  <CardCharatter class="col-sm-6 col-lg-3" />
</template>
<style></style>
