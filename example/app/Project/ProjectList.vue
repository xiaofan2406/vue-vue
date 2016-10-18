<template>
  <transition-group
    enter-active-class="animated zoomInDown"
    leave-active-class="animated bounceOutRight"
  >
    <ProjectSingle :project="project" v-for="project of projects" :key="project.id" class="item"></ProjectSingle>
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

<style scoped>
.item {
  margin-bottom: 16px;
}
</style>
