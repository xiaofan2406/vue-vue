<template>
  <div class="root">
    <router-link class="link" active-class="link-active" to="/todo" exact >All</router-link>
    <router-link class="link" active-class="link-active" to="/todo/active" exact >Active</router-link>
    <router-link class="link" active-class="link-active" to="/todo/completed" exact >Completed</router-link>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  justify-content: space-around;
}

.link {
  color: #000;
  text-decoration: none;

  &.link-active {
    color: #42b983;
    text-decoration: underline;
  }
}
</style>
