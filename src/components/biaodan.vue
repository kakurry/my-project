<template>
  <div>
    <p>单个复选框：</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <p>多个复选框：</p>
    <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
    <label for="runoob">Runoob</label>
    <input type="checkbox" id="google" value="Google" v-model="checkedNames">
    <label for="google">Google</label>
    <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
    <label for="taobao">taobao</label>
    <br>
    <span>选择的值为: {{ checkedNames }}</span>
    <hr />
    <input type="radio" id="runoob" value="Runoob" v-model="picked">
    <label for="runoob">Runoob</label>
    <br>
    <input type="radio" id="google" value="Google" v-model="picked">
    <label for="google">Google</label>
    <br>
    <span>选中值为: {{ picked }}</span>
    <hr />
    <select v-model="selected" name="fruit">
      <option value="">选择一个网站</option>
      <option value="www.runoob.com">Runoob</option>
      <option value="www.google.com">Google</option>
    </select>

    <div id="output">
      选择的网站是: {{selected}}
    </div>
    <hr />
    <h1>输入值不会改变，得回车之后才会动态的双向数据绑定</h1>
    <input v-model.lazy="msg" >
    <span>{{msg}}</span>
    <hr />
    <h1>去除空格</h1>
    <input v-model.trim="hhhA">
    <span>{{hhhA}}</span>
  </div>

</template>

<script>
    export default {
        name: "biaodan",
      data(){
          return{
            checked : false,
            checkedNames: [],
            picked : 'Runoob',
            selected: '',
            msg:"0",
            hhhA:"2"
          }
      }
    }
</script>

<style scoped>

</style>
