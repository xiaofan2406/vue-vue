<template>
  <div class="root">
    <TodoSearch></TodoSearch>
    <TodoNew></TodoNew>
    <TodoList></TodoList>
    <TodoFilter></TodoFilter>
  </div>
</template>

<script>
import TodoSearch from './TodoSearch';
import TodoNew from './TodoNew';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';


export default {
  components: {
    TodoSearch,
    TodoNew,
    TodoList,
    TodoFilter
  }
};
</script>

<style scoped>
.root {
  width: 480px;
}
</style>