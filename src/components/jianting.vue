<template>
    <div>
      <input v-model="aa"/>
      <input v-model="bb"/>
      <span>{{aa}}"一起摇摆"{{bb}}</span>
      <hr />
      <h2>内联样式</h2>
      <div v-bind:style="yangshi">黄欣欣</div>
      <div v-bind:style="[yangshi1,yangshi2]">李子菲</div>
      <div v-bind:style="{color:yangshi3,fontSize:yangshi4 + 'px'}">卜冠今</div>
    </div>
</template>

<script>
    export default {
        name: "jianting",
        data(){
            return{
              aa:"00",
              bb:"000",
              yangshi:{
                color:"red"
              },
              yangshi1:{
                color:"red"
              },
              yangshi2:{
                "background-color":"#d24dcd"
              },
              yangshi3:"red",
              yangshi4:"20"
            }
        },
        watch : {
          aa:function(val) {
            this.aa = val;
            this.bb = val * 1000;
          },
          bb : function (val) {
            this.aa = val/ 1000;
            this.bb = val;
          }
        }
    }
</script>

<style scoped>

</style>
