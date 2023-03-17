<template>
    <h1>Repos</h1>
    {{ getUsers }}
    
</template>

<script>
import { useStore } from "vuex";

export default {
  data() {
    return {
      
    };
  },
  computed: {
    getUsers() {
      const store = useStore();
      return store.getters.getData;
    },
    users() {
      const store = useStore();
      return store.state.data;
    }
  },
  mounted() {
    const store = useStore();
    store.dispatch("fetchData");
  }
};

</script>