import Vue from 'vue';
import TodoStore from './todo-store';


class Project {
  constructor(init) {
    this.name = init.name;
    this.id = init.id;
    this.todoStore = init.todos || new TodoStore();
  }

  rename(name) {
    this.name = name;
  }

  get activeCount() {
    return this.todoStore.todos.filter(todo => !todo.completed).length;
  }
}


export default class ProjectStore {
  constructor(init) {
    if (init) {
      this.byId = init.byId || {};
    } else {
      this.byId = {};
    }
  }

  addProject(project) {
    Vue.set(this.byId, project.id, new Project(project));
  }

  removeProject(id) {
    Vue.delete(this.byId, id);
  }

  rename(id, name) {
    this.byId[id].rename(name);
  }

  get projects() {
    return Object.keys(this.byId).map(id => this.byId[id]);
  }
}
