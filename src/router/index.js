import Vue from 'vue' // 引入vue
import Router from 'vue-router' // 引入路由 插件
import UserList from '@/components/List' // 引入写的组件
import UserDetails from '@/components/UserDetails' // 引入写的组件
import Layout from '@/components/HelloWorld' // 引入写的组件 Layout布局
import Button from '@/components/Element' // 引入写的组件
import Select from '@/components/Select' // 引入写的组件
import Upload from '@/components/Upload' // 引入写的组件
import NavMenu from '@/components/NavMenu' // 引入写的组件
import Vue1 from '@/components/Vue' // 引入写的组件
import Vue2 from '@/components/Vue1' // 引入写的组件
import hdx from '@/components/hdx' // 引入写的组件
import studyvue from '@/components/studyvue' // 引入写的组件
import jianting from '@/components/jianting' // 引入写的组件
import shijianchuliqi from '@/components/shijianchuliqi' // 引入写的组件
import biaodan from '@/components/biaodan' // 引入写的组件
import zujian from '@/components/zujian' // 引入写的组件
import zidingyizhiling from '@/components/zidingyizhiling' // 引入写的组件

Vue.use(Router);  // 注册路由

export default new Router({
    routes: [{
            path: '/',
            component: UserList
        },
        {
            path: "/details",
            component: UserDetails
        },
        {
            path: "/he",
            component: Layout
        },
        {
            path: "/button",
            component: Button
        },
        {
            path: "/select",
            component: Select
        },
        {
            path: "/upload",
            component: Upload
        },
        {
            path: "/NavMenu",
            component: NavMenu
        },
        {
            path:'/text',
            component:Vue1
        },
        {
          path:'/text1',
          component:Vue2

        },
        {
          path:'/hdx',
          component:hdx

        },
        {
          path:'/studyvue',
          component:studyvue

        },
        {
          path:'/jianting',
          component:jianting

        },
        {
          path:'/shijianchuliqi',
          component:shijianchuliqi
        },
        {
          path:'/biaodan',
          component:biaodan
        },
        {
          path:'/zujian',
          component:zujian
        },
        {
          path:'/zidingyizhiling',
          component:zidingyizhiling
        }
    ]
})
