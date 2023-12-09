import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes,  //路由规则
    //添加高亮
    linkActiveClass: "active",
    linkExactActiveClass: "exactactive"
}) 

export default router


