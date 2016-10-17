<template>
  <transition-group
    enter-active-class="animated zoomInDown"
    leave-active-class="animated bounceOutRight"
  >
    <ProjectSingle :project="project" v-for="project of projects" :key="project.id" class="ProjectSingle"></ProjectSingle>
  </transition-group>
</template>

<script>
import ProjectSingle from './ProjectSingle';


export default {
  components: {
    ProjectSingle
  },
  computed: {
    projects() {
      return this.$store.projectStore.projects;
    }
  }
};
</script>

<style>
.ProjectSingle {
  margin-bottom: 16px;
}
</style>
