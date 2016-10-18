<template>
  <div class="ProjectTodoList">
    <ProjectTodoItem class="item" v-for="todo of todos" :todo="todo" :onRemove="removeTodo(todo.id)"></ProjectTodoItem>
  </div>
</template>

<script>
import ProjectTodoItem from './ProjectTodoItem';

export default {
  components: {
    ProjectTodoItem
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    todos() {
      return this.project.todoStore.todos;
    }
  },
  methods: {
    removeTodo(id) {
      const _this = this;
      return () => {
        _this.project.todoStore.removeTodo(id);
      };
    }
  }
};
</script>

<style scoped>
.item {
  margin-bottom: 16px;
  box-shadow: none;
  border: none;
  height: 2.5em;

  &:hover {
    border: 1px solid #D3DCE6;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
  }

  &>.el-card__body {
    padding: 10px;
  }  
}
</style>
