<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" v-bind:key="memo.id">
        <router-link :to="{ name: 'edit', params: { id: memo.id } }" :style="getHusenStyle(memo)">
          {{ memo.title }}
        </router-link>
      </li>
    </ul>
    <p v-else>メモはまだありません。</p>
  </div>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

li a {
  width: 80%;
  margin: 0 auto 0.6em;
  display: block;
  position: relative;
  padding: 0.5em 1em;
  border: 1px solid #aaa;
  border-left: 30px solid #f7eaa0;
  background-color: #fff;
  color: #333;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
}

li a::before {
  position: absolute;
  right: 1px;
  bottom: 10px;
  width: 50%;
  height: 50%;
  box-shadow: 0 10px 15px #aaa;
  transform: rotate(4deg);
  z-index: -1;
  content: '';
}
</style>

<script>
export default {
  name: "HomeView",
  computed: {
    hasMemos() {
      return this.$store.getters
        .getCount; /*getters（storeフォルダのindex.js）の中のgetCountを取得*/
    },
    memos() {
      return this.$store.getters
        .getAll; /*データが保存されているstoreから引っ張ってきて渡す*/
    },
  },
  methods: {
    getHusenStyle(memo) {
      const colorMap = {
        yellow: "#f7eaa0",
        green: "#a0f7ac"
      };
      const color = colorMap[memo.color] || "";
      return {
        borderLeft: `30px solid ${color}`
      };
    }
  }
};
</script>
