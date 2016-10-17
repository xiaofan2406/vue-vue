<template>
  <div class="Project-root">
    <div class="Project-entry">
      <div theme="dark" mode="horizontal" class="Project-menu">
        <input type="text" @keyup.enter="addProject" placeholder="add a new project" />  
      </div>      
      <ProjectList></ProjectList>
    </div>
  </div>
</template>

<script>
import { v4 } from 'node-uuid';
import ProjectList from './ProjectList';


export default {
  components: {
    ProjectList
  },
  methods: {
    addProject(e) {
      this.$store.projectStore.addProject({
        id: v4(),
        name: e.target.value
      });
      e.target.value = '';
    }
  }

};
</script>

<style>
.Project-root {
  display: flex;
  justify-content: center;
}
.Project-entry {
  width: 640px;
}
.Project-menu {
  margin-bottom: 32px;
}
</style>