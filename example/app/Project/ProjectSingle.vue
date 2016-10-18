<template>
  <div class="root">
    <span v-if="activeCount > 0" class="count">{{activeCount}}</span>
    <div class="header">
      <Editable :editable="true" :value="project.name" :onConfirm="rename" displayTag="span" sharedClass="ProjectSingle-title" inputClass="ProjectSingle-input"></Editable>
      <div class="menu">
        <span @click="removeProject"><i class="fa fa-trash-o" aria-hidden="true"></i></span>          
      </div>
    </div>
    <div class="content">
      <input @keyup.enter="newTodo" placeholder="What to do next?" class="add-input"></input>
      <ProjectTodoList :project="this.project"></ProjectTodoList>
    </div>    
  </div>
</template>

<script>
import { v4 } from 'node-uuid';
import Editable from 'widgets/Editable';
import ProjectTodoList from './ProjectTodoList';

export default {
  components: {
    Editable,
    ProjectTodoList
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    activeCount() {
      return this.project.activeCount;
    }
  },
  methods: {
    rename(name) {
      this.project.rename(name, this.project.id);
    },
    removeProject() {
      this.$store.projectStore.removeProject(this.project.id);
    },
    newTodo(e) {
      this.project.todoStore.addTodo({
        name: e.target.value,
        id: v4()
      });
      e.target.value = '';
    }
  }
};
</script>

<style scoped>
.root {
  border: 1px solid #ddd;
  position: relative;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 1em;

}
.count {
  display: inline-block;
  width: 2em;
  height: 1em;
  background-color: #2196f3; 
  text-align: center;
  border-radius: 12px;
  color: #fff;
  user-select: none;
  position: absolute;
  right: -15px;
  top: -8px;
}

.content {
  padding: 1em;
}

.add-input {
  margin-bottom: 16px;
  border: 0;
  border-bottom: 1px solid #ddd;
  font-size: 24px;
}
</style>

<style>
.ProjectSingle-title {
  word-break: break-all;
  flex: 1;
  margin-right: 20px;
  padding: 0;
  border: 0;
  font-size: 24px;
}
.ProjectSingle-input {
  font-style: italic;
  border-bottom: 1px solid #ddd;
}
</style>