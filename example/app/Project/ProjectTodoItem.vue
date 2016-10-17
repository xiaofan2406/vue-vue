<template>
  <div class="ProjectTodoItem" @mouseover="showControl" @mouseleave="hideControl">
    <Editable :value="todo.name" :onConfirmValue="rename" displayTag="span" sharedClass="ProjectTodoItem-name"></Editable>
    <transition enter-active-class="animated fadeInLeft">
      <span v-if="showControls" class="ProjectTodoItem-controls">
          <i class="el-icon-check"></i>
          <i class="el-icon-delete"></i>
      </span>
    </transition>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
// import { projectGetters } from 'store/getters';
//
//
// const { ALL_PROJECTS } = projectGetters;
import Editable from 'widgets/Editable';

export default {
  components: {
    Editable
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showControls: false
    };
  },
  methods: {
    showControl() {
      this.showControls = true;
    },
    hideControl() {
      this.showControls = false;
    },
    rename(name) {
      this.todo.rename(name);
    }
  }
};
</script>

<style>
.ProjectTodoItem {
  margin-bottom: 16px;
  padding: 10px;
  position: relative;

  &:hover {
    border: 1px solid #D3DCE6;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
  }
}
.ProjectTodoItem-name {
  display: inline-block;
  margin-right: 8px;
  padding: 3px 10px;
  z-index: 2;
}
.ProjectTodoItem-controls {
  display: inline-block;
  animation-duration: 300ms;
  position: absolute;
  right: 10px;
}


</style>
