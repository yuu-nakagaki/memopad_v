<template>
    <button class="btn" :style="{ 'background-color': bgcolor, color: forecolor }"><span><slot>ボタン</slot></span></button>
</template>

<script>
export default {
    name: "MyButton",
    props: {
        bgcolor: {
            type: String,
            default: "#fff"
        },
        forecolor: {
            type: String,
            default: "#333"
        }
    }
};
</script>

<style scoped>
.btn {
  align-self: center;
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #333;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  letter-spacing: 0.2em;
  outline: none;
  padding: .75rem 1.5rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-family: 'Shippori Mincho B1', serif;
  font-weight: 700;
}

.btn:hover {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
  transform: translate3d(0, 2px, 0);
}

.btn:focus {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
}
</style>