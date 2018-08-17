import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/style/common.css'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }]
})