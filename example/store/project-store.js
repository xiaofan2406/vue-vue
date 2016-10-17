import Vue from 'vue';
import TodoStore from './todo-store';


class Project {
  constructor(init) {
    this.name = init.name;
    this.id = init.id;
    this.todoStore = init.todos || TodoStore();
  }

  rename(name) {
    this.name = name;
  }

  addTodo(todo) {
    this.todoStore.addTodo(todo);
  }

  removeTodo(id) {
    this.todoStore.removeTodo(id);
  }
}


export default () => new Vue({
  data() {
    return {
      byId: {}
    };
  },
  methods: {
    addProject(project) {
      Vue.set(this.byId, project.id, new Project(project));
    },
    removeProject(id) {
      Vue.delete(this.byId, id);
    },
    rename(name, id) {
      this.byId[id].rename(name);
    }
  },
  computed: {
    projects() {
      return Object.keys(this.byId).map(id => this.byId[id]);
    }
  }
});
