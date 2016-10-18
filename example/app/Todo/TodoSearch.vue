<template>
  <div class="root">
    <input 
      ref="input" 
      class="input" 
      placeholder="search..." 
      type="text" 
      @input="searchTodo" 
      @keyup.esc="clearSearch" />
  </div>
</template>

<script>
export default {
  methods: {
    clearSearch() {
      this.$refs.input.value = '';
      this.$store.todoStore.setSearch('');
    },
    searchTodo(e) {
      this.$store.todoStore.setSearch(e.target.value);
    }
  }
};
</script>

<style scoped>
.root {
  margin-bottom: 1em;
}
.input {
  width: 100%;
  font-size: 24px;
  padding: 6px;
}
</style>