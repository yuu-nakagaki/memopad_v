<template>
    <MemoForm v-if="memo" :memo="memo" />
    <p v-else>指定されたメモはありません</p>
</template>
    /*v-if="memo"は「メモがあれば表示」という条件*/
    /*MemoForm.vueでpropsとして定義したmemoを属性として使用し値を受け渡す。※""内のmemoは下のcomputedのmemoを指す*/

<script>
import MemoForm from '@/components/MemoForm.vue';
export default {
  name: "EditView",
  components: {
    MemoForm
  },
  computed: {
    memo() {
      const id = parseInt(
        this.$route.params.id
      ); /*文字としてではなく数字として下の行に渡す為にparseInt()で囲む*/
      return this.$store.getters.getMemoById(id);
    },
  },
};
</script>
