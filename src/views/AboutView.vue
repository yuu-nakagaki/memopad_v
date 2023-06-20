<template>
  <div>
    <div class="about">
      <h1>コンポーネント作成テスト</h1>
    </div>
    <div class="buttons">
      <MyButton>保存</MyButton>
      <MyButton bgcolor="#E8421E" forecolor="#fff">削除</MyButton>
    </div>
    <div>
      <draggable>テスト</draggable>
    </div>
  </div>
</template>
<script>
import MyButton from "../components/MyButton.vue";
export default {
  components: {
    MyButton
  }
};
</script>
