<template>
  <div>
    <input type="text" v-model="title" />
  </div>
  <div>
    <textarea v-model="content"></textarea>
  </div>
  <div class="center">
    <!-- <button @click="save" class="save"><span>SAVE</span></button>
    <button @click="remove" v-if="memo.id" class="delete">DELETE</button> -->
    <MyButton @click="save" class="save"><span>保存</span></MyButton>
    <MyButton @click="remove" v-if="memo.id" class="delete" bgcolor="#E8421E" forecolor="#fff">削除</MyButton>
  </div>
</template>
<!-- idがあるとき、つまり編集画面のときだけ削除ボタンが表示されるようv-ifを設定。メモの新規作成画面には不要なので。 -->

<script>
import MyButton from "../components/MyButton.vue";

export default {
  name: "MemoForm",
  components: {MyButton},
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

      this.$store.commit("save", memo)
      this.$router.push(
        '/'
      ) /*保存ボタンを押したら画面をトップページへ戻す命令（重複してメモが登録されるのを防ぐ）*/
    },
    remove() {
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
  margin-bottom: 1em;
}

input[type="text"] {
  width: 100%;
  height: 3em;
  padding: 0.5em 1em;
  border: 1px solid #aaa;
  border-left: 30px solid #f7eaa0;
  background-color: #fff;
  box-sizing: border-box;
  color: #333;
}

textarea {
  width: 100%;
  height: 30em;
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border: 2px dotted #333;
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #333;
  margin-bottom: 20px;
}

.save {
  margin-right: 20px;
}

/* button {
  width: 8em;
  margin: 9px;
  font-size: 14px;
  overflow: hidden;
  padding: 0.4em 0.8em;
  border-radius: 0;
  letter-spacing: 0.2em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: 0.4s;
} */

/* button.save {
  color: #fff;
  background: #5d5f86;
}

button:hover {
  color: #5d5f86;
  background: #fff;
}

button span {}

button:before {}

button:hover:before {} */

.center {
  text-align: center;
}
</style>
