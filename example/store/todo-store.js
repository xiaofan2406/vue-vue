import Vue from 'vue';


class Todo {
  constructor(init) {
    this.id = init.id;
    this.name = init.name;
    this.completed = init.completed || false;
  }

  rename(name) {
    this.name = name;
  }

  toggle() {
    this.completed = !this.completed;
  }
}


export default class TodoStore {
  constructor(init) {
    if (init) {
      this.byId = init.byId || {};
      this.filter = init.filter || '';
      this.search = init.search || '';
    } else {
      this.byId = {};
      this.filter = '';
      this.search = '';
    }
  }

  addTodo(newTodo) {
    Vue.set(this.byId, newTodo.id, new Todo(newTodo));
  }
  removeTodo(id) {
    Vue.delete(this.byId, id);
  }
  renameTodo(id, name) {
    this.byId[id].rename(name);
  }
  toggleTodo(id) {
    this.byId[id].toggle();
  }
  setSearch(search) {
    this.search = search;
  }
  setFilter(filter) {
    this.filter = filter;
  }

  get todos() {
    return Object.keys(this.byId).map(id => this.byId[id]);
  }

  get visibleTodos() {
    let filtered = [];
    switch (this.filter) {
      case '':
        filtered = Object.keys(this.byId).map(id => this.byId[id]);
        break;
      case 'active':
        filtered = Object.keys(this.byId).filter(id => this.byId[id].completed === false)
          .map(id => this.byId[id]);
        break;
      case 'completed':
        filtered = Object.keys(this.byId).filter(id => this.byId[id].completed === true)
          .map(id => this.byId[id]);
        break;
      default:
        filtered = Object.keys(this.byId).map(id => this.byId[id]);
        break;
    }
    const reg = new RegExp(this.search);
    return filtered.filter(todo => reg.test(todo.name));
  }
}


// export default () => new Vue({
//   data() {
//     return {
//       byId: {},
//       filter: '',
//       search: ''
//     };
//   },
//   methods: {
//     addTodo(newTodo) {
//       Vue.set(this.byId, newTodo.id, new Todo(newTodo));
//     },
//     removeTodo(id) {
//       Vue.delete(this.byId, id);
//     },
//     renameTodo(id, name) {
//       this.byId[id].rename(name);
//     },
//     toggleTodo(id) {
//       this.byId[id].toggle();
//     },
//     setSearch(search) {
//       this.search = search;
//     },
//     setFilter(filter) {
//       this.filter = filter;
//     }
//   },
//   computed: {
//     todos() {
//       return Object.keys(this.byId).map(id => this.byId[id]);
//     },
//     visibleTodos() {
//       let filtered = [];
//       switch (this.filter) {
//         case '':
//           filtered = Object.keys(this.byId).map(id => this.byId[id]);
//           break;
//         case 'active':
//           filtered = Object.keys(this.byId).filter(id => this.byId[id].completed === false)
//             .map(id => this.byId[id]);
//           break;
//         case 'completed':
//           filtered = Object.keys(this.byId).filter(id => this.byId[id].completed === true)
//             .map(id => this.byId[id]);
//           break;
//         default:
//           filtered = Object.keys(this.byId).map(id => this.byId[id]);
//           break;
//       }
//       const reg = new RegExp(this.search);
//       return filtered.filter(todo => reg.test(todo.name));
//     }
//   }
// });
