<template>
    <div id="first">
        <h1>{{love}}</h1>
        <input type="text" v-model="love"/>
        <button v-on:click="counter += 1">增加 1</button>
        <p>这个按钮被点击了 {{ counter }} 次。</p>
      <hr/>

      <table style="border:1px solid #76ff41;">
        <tr>
          <td>姓名：</td>
          <td>性别：</td>
          <td>年龄：</td>
          <td>地址：</td>
        </tr>
        <tr v-for="(item,index) in list">
          <td>{{item.name}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.age}}</td>
          <td>{{item.dizhi}}</td>
          <td>{{index}}</td>
        </tr>
      </table>
      <hr />

      <span>年龄总和： {{all}}</span>
    </div>
</template>

<script>
  import Vue from 'vue' // 引入vue
    export default {
        name: "hdx",
        data(){
          return {
            love:"第一个vue",
            counter: 0,
            list:[
              {name:"何东旭",sex:'男',age:10,dizhi:"曲靖罗平"},
              {name:"黄欣欣",sex:'女',age:10,dizhi:"曲靖罗平"},
              {name:"李子菲",sex:'女',age:10,dizhi:"曲靖罗平"},
            ]
          }
        },
      computed:{
        all:function () {
          var total = 0;
          this.list.forEach(function (item) {
            total += item.age
          });
          //return total.toString().replace(/\B(?=(\d{3}) + $)/g,'，')
          return total
        }
      }
    }

</script>

<style scoped>
  table tr td {
    border:1px solid #76ff41;
  }
</style>
