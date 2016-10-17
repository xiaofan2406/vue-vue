<template>
  <div class="App-root">
    <div class="App-header">
      <img class="App-logo" src="./logo.png" />
      <span class="App-title">VueVue Example</span>
      <div class="App-nav">
        <router-link class="App-nav-link" active-class="App-nav-link-active" to="/" exact >Home</router-link>
        <router-link class="App-nav-link" active-class="App-nav-link-active" to="/todo">Todo</router-link>
        <router-link class="App-nav-link" active-class="App-nav-link-active" to="/project">Project</router-link>
      </div>
    </div>
    <div class="App-main">
      <router-view></router-view>
    </div>
  </div>
</template>


<style scoped>
.App-header {
  background-color: #000;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 10px;
  justify-content: space-between;
  height: 42px;
}

.App-title {
  font-size: 18px;
  color: #fff;
  font-family: monospace;
}

.App-logo {
  height: 40px;
}

.App-nav {
  &>.App-nav-link {
    text-decoration: none;
    color: #fff;
    display: inline-flex;
    margin-right: 10px;
    height: 40px;
    align-items: center;

    &.App-nav-link-active {
      border-bottom: 2px solid #FFF;
    }
  }
}

.App-main {
  display: flex;
  justify-content: center;
}
</style>

<style>
html {
  box-sizing: border-box;
}
*, *::after, *::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: sans-serif;
}
</style>