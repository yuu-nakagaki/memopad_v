<template>
  <nav>
    <router-link to="/">メモ一覧</router-link> |
    <router-link to="/new">新規追加</router-link> |
    <router-link to="/about">About変更できてる？</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Shippori Mincho B1', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  /* background: #f00; */
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  text-align: center;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  padding: 10px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  transition: 0.3s;
}

nav a.router-link-exact-active {
  color: #d16552;
}
</style>
