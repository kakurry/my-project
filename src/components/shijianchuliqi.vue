<template>
  <div id="app">
    <button v-on:click="counter += 1">增加 1</button>
    <p>这个按钮被点击了 {{ counter }} 次。</p>
    <hr />
    <button @click="aa(true)">点我呀</button>
    <hr />
    <button  @keyup.enter="submit">监听按键</button>
  </div>


</template>

<script>
    export default {
        name: "shijianchuliqi",
        data(){
          return{
            counter:"0"
          }
        },
        methods:{
          aa:function(message){
            if (message ==true){
              alert("宝贝你会了！")
            }
          }
        }/*,
      computed:{
          submit:function (event){
            debugger;
              alert("监听enter事件！！")
          }
      }*/
    }
</script>

<style scoped>

</style>
