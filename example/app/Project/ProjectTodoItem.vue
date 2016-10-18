<template>
  <div :class="['root', {completed: todo.completed}]" @mouseover="showControl" @mouseleave="hideControl">
    <Editable :editable="!todo.completed" :value="todo.name" :onConfirm="rename" displayTag="span" sharedClass="ProjectTodoItem-name" inputClass="ProjectTodoItem-input"></Editable>
    <transition enter-active-class="animated fadeInLeft">
      <span v-show="showControls" class="controls">
        <span @click="toggleTodo" :title="todo.completed ? 'Mark Active' : 'Mark Completed'">
          <i v-if="todo.completed" class="fa fa-history" aria-hidden="true"></i>
          <i v-else="todo.completed" class="fa fa-check" aria-hidden="true"></i>
        </span>      
        <span title="Delete" @click="removeTodo"><i class="fa fa-trash-o" aria-hidden="true"></i></span>
      </span>
    </transition>
  </div>
</template>

<script>
import Editable from 'widgets/Editable';

export default {
  components: {
    Editable
  },
  props: {
    todo: {
      type: Object,
      required: true
    },
    onRemove: {
      type: Function,
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
    },
    toggleTodo() {
      this.todo.toggle();
    },
    removeTodo() {
      this.onRemove();
    }
  }
};
</script>

<style scoped>
.root {
  margin-bottom: 16px;
  padding: 10px;
  position: relative;
  height: 100%;
  border: 1px solid #D3DCE6;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);

  &.completed {
    background-color: rgba(76,175,80,.12);
  }
}

.controls {
  display: inline-block;
  animation-duration: 300ms;
  position: absolute;
  right: 10px;

  &>span {
    cursor: pointer;
  }
}
</style>

<style>
.ProjectTodoItem-name {
  width: 100%;
  margin-right: 48px;
  font-size: 24px;
  padding: 0;
  border: 0;
  word-break: break-all;
}
.ProjectTodoItem-input {
  background-color: rgba(33,150,243,.12); 
}
</style>