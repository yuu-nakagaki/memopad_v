<template>
  <div>
    <input type="text" v-model="title" v-bind:class="[husenColorClass]" />
  </div>
  <div>
    <textarea v-model="content"></textarea>
  </div>
  <div class="center">
    <MyButton @click="save" class="save"><span>保存</span></MyButton>
    <MyButton @click="changeColor" class="change"><span>ふせん色変更</span></MyButton>
    <MyButton @click="remove" v-if="memo.id" class="delete" bgcolor="#E8421E" forecolor="#fff">削除</MyButton>
  </div>
</template>

<script>
import MyButton from "../components/MyButton.vue";
export default {
  name: "MemoForm",

  computed: {
    husenColorClass() {
      return this.color === 'green' ? 'green' : '';
    }
  },

  components: { MyButton },
  props: ['memo'], 
  data() {
    return {
      title: this.memo.title,
      content: this.memo.content,
      color: this.memo.color || 'yellow'
    }
  },
  methods: {
    save() {
      let memo = {
        title: this.title,
        content: this.content,
        color: this.color,
      };

      if (this.memo.id) {
        memo.id = this.memo.id
      }

      this.$store.commit('save', memo)
      this.$router.push(
        '/'
      ) 
    },
    remove() {
      this.$store.commit('delete', this.memo.id)
      this.$router.push(
        '/'
      ) 
    },
    changeColor() {
      const newColor = this.color === 'yellow' ? 'green' : 'yellow';
      this.color = newColor;
      this.$store.commit('changeHusenColor', { id: this.memo.id, color: newColor });
    },
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

input.green {
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

.center {
  margin: 0 auto 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
}

</style>
