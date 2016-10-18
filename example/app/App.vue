<template>
  <div class="root">
    <div class="header">
      <div class="info">
        <img class="logo" src="./logo.png" />
        <span class="title">VueVue Example</span>
      </div>
      <div class="nav">
        <router-link class="nav-link" active-class="nav-link-active" to="/" exact >Home</router-link>
        <router-link class="nav-link" active-class="nav-link-active" to="/todo">Todo</router-link>
        <router-link class="nav-link" active-class="nav-link-active" to="/project">Project</router-link>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: #000;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 10px;
  justify-content: space-between;
  height: 42px;
}

.info {
  display: flex;
  align-items: center;
}

.title {
  font-size: 18px;
  color: #fff;
  font-family: monospace;
}

.logo {
  height: 40px;
  margin-right: 10px;
}

.nav {
  &>.nav-link {
    text-decoration: none;
    color: #fff;
    display: inline-flex;
    margin-right: 10px;
    height: 40px;
    align-items: center;

    &.nav-link-active {
      border-bottom: 2px solid #FFF;
    }
  }
}

.main {
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