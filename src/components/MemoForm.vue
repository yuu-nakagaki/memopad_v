<template>
  <div>
    <input type="text" v-model="title" v-bind:class="{'changeColor': changeColor}"/>
  </div>
  <div>
    <textarea v-model="content"></textarea>
  </div>
  <div class="center">
    <MyButton @click="save" class="save"><span>保存</span></MyButton>
    <MyButton @click="changeColor =! changeColor" class="change"><span>ふせん色変更</span></MyButton>
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
      content: this.memo.content,
      // changeColor: this.change(),
      changeColor: false
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
    },
    // change() {
    //   this.changeColor = "changeColor"
    // }
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

input.changeColor {
  border-left: 30px solid #a0f7ac;
}

textarea {
  width: 100%;
  height: 30em;
  background-color: #fff;
  background-image: none;
  border: 1px solid #aaa;
  box-sizing: border-box;
  color: #333;
  margin-bottom: 20px;
}

.save {
  margin-right: 20px;
}

.center {
  text-align: center;
}
</style>
