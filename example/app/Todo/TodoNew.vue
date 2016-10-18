<template>
  <div class="root">
    <input
      type="text"
      placeholder="add a new todo"
      class="input"
      @keyup.enter="addTodo"
      @keyup.esc="clearInput"
    />
  </div>
</template>

<script>
import { v4 } from 'node-uuid';


export default {
  methods: {
    addTodo(e) {
      const name = e.target.value.trim();
      if (name) {
        const todo = { name, completed: false, id: v4() };
        this.$store.todoStore.addTodo(todo);
      }
      event.target.value = '';
    },
    clearInput(e) {
      e.target.value = '';
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