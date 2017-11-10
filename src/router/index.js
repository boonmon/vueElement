import Vue from 'vue'
import Router from 'vue-router'
import content from '@/page/content'
import index from '@/page/index'
import badge from '@/page/badge'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/content/:id',
            name: 'content',
            component: content
        },
        {
            path: '/badge',
            name: 'content',
            component: badge
        }
    ]
})