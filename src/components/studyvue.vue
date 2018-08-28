<template>
    <div>
      <h1>{{first}}</h1>
      <div style="background-color: #2aabd2;" v-html="showhtml">

      </div>

      {{5+5}}<br>
      {{ ok ? 'YES' : 'NO' }}<br>

      <div style="background-color: #d24dcd;" v-if="ok">
        1111111111111111
      </div>

      <a v-bind:href="url">lianjie</a>
      <hr />
      <p>{{ wc }}</p>
      <button v-on:click="back">字符串反转</button>
      <hr />
      <p>{{data | formatDate}}</p>
      <hr />
      <div>
        <div v-if="type === 'A'">
          A
        </div>
        <div v-else-if="type === 'B'">
          B
        </div>
        <div v-else-if="type === 'C'">
          C
        </div>
        <div v-else>
          Not A/B/C
        </div>
      </div>
      <hr />
      <p v-show="showornotshow">阿姨洗铁路</p>
    </div>


</template>

<script>
    var padDate = function (value) {
      return value < 10 ?'0' + value :value
    };
    export default {
        name: "studyvue",
        data(){
          return{
            first:"第一个vue例子展示！",
            showhtml:"<h2>黄欣欣真的6</h2>",
            ok:true,
            chance:true,
            url:"https://www.baidu.com",
            wc:"i love hxx",
            type: "C",
            data:new Date(),
            showornotshow:true
          }
        },
        methods: {
          back: function () {
            this.wc = this.wc.split('').reverse().join('')
          }
        },
        filters:{
          formatDate:function (value) {
            var date = new Date(value);
            var year = date.getFullYear();
            var month = padDate(date.getMonth() +1);
            var day = padDate(date.getDate());
            var hours = padDate(date.getHours());
            var minutes = padDate(date.getMinutes());
            var second  =padDate(date.getSeconds());
            return year + '年' +month+"月"+day +"日" + hours+ '小时' +minutes+ '分' +second +'秒';
          }
        }
    }
</script>

<style scoped>

</style>
