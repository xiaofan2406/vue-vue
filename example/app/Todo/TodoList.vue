<template>
  <div v-if="visibleTodos.length > 0" class="TodoList-root">
    <div v-for="todo of visibleTodos" :key="todo.id" :class="['TodoList-item', {completed: todo.completed}]">
      <Editable 
        :editable="!todo.completed"
        sharedClass="TodoList-item-name" 
        inputClass="TodoList-item-input"
        :value="todo.name" 
        displayTag="span" 
        :onConfirm="rename(todo.id)"        
      ></Editable>
      <div class="TodoList-item-controls">
        <span @click="toggleTodo(todo.id)" :title="todo.completed ? 'Mark Active' : 'Mark Completed'">
          <i v-if="todo.completed" class="fa fa-history" aria-hidden="true"></i>
          <i v-else="todo.completed" class="fa fa-check" aria-hidden="true"></i>
        </span>      
        <span title="Delete" @click="removeTodo(todo.id)"><i class="fa fa-trash-o" aria-hidden="true"></i></span>
      </div>
    </div>
  </div>
  <div v-else class="TodoList-empty"><p>Nothing to see here</p></div>
</template>

<script>
import Editable from '../../widgets/Editable';


export default {
  components: {
    Editable
  },
  computed: {
    visibleTodos() {
      return this.$store.todoStore.visibleTodos;
    }
  },
  methods: {
    toggleTodo(id) {
      this.$store.todoStore.toggleTodo(id);
    },
    removeTodo(id) {
      this.$store.todoStore.removeTodo(id);
    },
    rename(id) {
      return (name) => {
        this.$store.todoStore.renameTodo(id, name);
      };
    }
  },
  watch: {
    $route() {
      const { filter } = this.$route.params;
      this.$store.todoStore.setFilter(filter === '' ? 'all' : filter);
    }
  }
};
</script>

<style scoped>
.TodoList-root {
  margin-bottom: 2em;
  min-height: 356px;
}
.TodoList-empty {
  min-height: 356px;
  margin-bottom: 2em;
  display: flex;
  justify-content: center;
  align-items:  center;
}
.TodoList-item {
  color: #585858;
  box-shadow: 0 0 2px rgba(0,0,0,.12),0 2px 2px rgba(0,0,0,.2);
  margin-bottom: 0.5em;
  padding: 1em;
  display: flex;
  height: 3em;
  align-items: center;
  justify-content: space-between;
  &.completed {
    background-color: rgba(76,175,80,.12);
  }
}
.TodoList-item-controls {
  &>span {
    cursor: pointer;
  }
}
</style>
<style>
.TodoList-item-name {
  font-size: 24px;
  padding: 0;
  border: 0;
  flex: 1;
  word-break: break-all;
}
.TodoList-item-input {
  border-bottom: 1px solid;
}
</style>