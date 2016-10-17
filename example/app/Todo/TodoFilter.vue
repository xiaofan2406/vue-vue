<template>
  <div class="TodoFilter-root">
    <router-link class="TodoFilter-link" active-class="TodoFilter-link-active" to="/todo" exact >All</router-link>
    <router-link class="TodoFilter-link" active-class="TodoFilter-link-active" to="/todo/active" exact >Active</router-link>
    <router-link class="TodoFilter-link" active-class="TodoFilter-link-active" to="/todo/completed" exact >Completed</router-link>
  </div>
</template>

<style scoped>
.TodoFilter-root {
  display: flex;
  justify-content: space-around;
}

.TodoFilter-link {
  color: #000;
  text-decoration: none;
}

.TodoFilter-link-active {
  color: #42b983;
  text-decoration: underline;
}
</style>