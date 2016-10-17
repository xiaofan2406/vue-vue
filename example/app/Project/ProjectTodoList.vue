<template>
  <div class="ProjectTodoList">
    <ProjectTodoItem v-for="todo of project.todoStore.todos" :todo="todo"></ProjectTodoItem>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
// import { projectGetters } from 'store/getters';
//
//
// const { ALL_PROJECTS } = projectGetters;
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
  }
};
</script>

<style>
.ProjectTodoList {
}

.ProjectTodoList-item {
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
