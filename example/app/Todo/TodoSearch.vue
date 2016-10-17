<template>
  <div class="TodoSearch-root">
    <input 
      ref="input" 
      class="TodoSearch-input" 
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
.TodoSearch-root {
  margin-bottom: 1em;
}
.TodoSearch-input {
  width: 100%;
  font-size: 24px;
  padding: 6px;
}
</style>