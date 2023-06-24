<template>
  <nav>
    <router-link to="/">メモ一覧</router-link> |
    <router-link to="/new">新規追加</router-link>
  </nav>
  <router-view />
</template>

<style>

body {
  background-image: linear-gradient(0deg, transparent calc(100% - 1px), #f0f0f0 calc(100% - 1px)),
                    linear-gradient(90deg, transparent calc(100% - 1px), #f0f0f0 calc(100% - 1px));
  background-size: 16px 16px;
  background-repeat: repeat;
  background-position: center center;
  padding: 20px;
}

#app {
  font-family: 'Shippori Mincho B1', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  text-align: center;
}

nav {
  padding: 30px;
  margin-bottom: 20px;
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

<script>
  export default {
    methods: {
      createTitleDesc: function(routeInstance){
        if(routeInstance.meta.title){
          const setTitle = routeInstance.meta.title;
          document.title = setTitle;
        } else {
          document.title = 'PETAMO'
        }

        if(routeInstance.meta.desc){
          const setDesc = routeInstance.meta.desc;
          document.querySelector("meta[name='description']").setAttribute('content', setDesc)
        } else {
          document.querySelector("meta[name='description']").setAttribute('content', 'ディスクリプションはありません')
        }
      }
    },
    mounted: function(){
      const routeInstance = this.$route;
      this.createTitleDesc(routeInstance);
    },
    watch: {
      '$route'(routeInstance) {
        this.createTitleDesc(routeInstance);
      }
    }
  }
</script>