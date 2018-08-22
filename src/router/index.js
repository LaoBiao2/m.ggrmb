import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/style/common.css'
import Index from '@/components/index'
import Download from '@/components/download'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/download',
        name: 'Download',
        component: Download
    }]
})