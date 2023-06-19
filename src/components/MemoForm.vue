<template>
  <div>
    <input type="text" v-model="title" />
  </div>
  <div>
    <textarea v-model="content"></textarea>
  </div>
  <div class="center">
    <button @click="save">保存</button>
    <button @click="remove" v-if="memo.id">削除</button>
  </div>
</template>
 /*idがあるとき、つまり編集画面のときだけ削除ボタンが表示されるようv-ifを設定。メモの新規作成画面には不要なので。*/

<script>
export default {
  name: "MemoForm",
  props: ['memo'], /*EditViewから渡ってくる*/
  data() {
    return {
      title: this.memo.title, /*上記propsにEditViewから渡ってくるので、thisでtitleを再現できる*/
      content: this.memo.content
    }
  },
  methods: {
    save() {
      let memo = {
        title: this.title,
        content: this.content,
      };

    /*メモのidが既に存在している場合、そのidも一緒に渡す（上書き保存のような動き）*/
    /*左辺のmemo.idは上記のletのmemoを指し、右辺のthis.memo.idはpropsで渡されているmemoを指す*/
      if (this.memo.id) {
        memo.id = this.memo.id
      }

      this.$store.commit("save", memo),
        this.$router.push(
          '/'
        ) /*保存ボタンを押したら画面をトップページへ戻す命令（重複してメモが登録されるのを防ぐ）*/
    },
    remove () {
        this.$store.commit('delete', this.memo.id)
        this.$router.push(
          '/'
        ) /*削除ボタンを押したら画面をトップページへ戻す命令*/
    }
  },
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
input[type="text"] {
  width: 100%;
}
textarea {
  width: 100%;
  height: 30em;
}
button {
  width: 5em;
  margin: 3px;
}
.center {
  text-align: center;
}
</style>
