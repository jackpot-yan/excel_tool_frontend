<template>
  <div id="main">
    <Table></Table>
  </div>
</template>
<script>
import {defineComponent} from "vue";
import Table from "./views/table.vue";

export default defineComponent({
  components: {Table}
})

</script>
<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  max-width: 100%;
  max-height: 100%;
}

#main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url("../src/assets/backend.png");
  background-size: cover;
  position: absolute;
}
</style>

