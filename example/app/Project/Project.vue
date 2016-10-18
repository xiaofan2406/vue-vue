<template>
  <div class="root">
    <div class="entry">
      <input type="text" class="input" @keyup.enter="addProject" placeholder="add a new project" /> 
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

<style scoped>
.root {
  display: flex;
  justify-content: center;
}
.entry {
  width: 640px;
}
.input {
  margin-bottom: 32px;
}
</style>