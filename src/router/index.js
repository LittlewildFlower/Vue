//引入路由工具
import store from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import Main from '../views/Main'
import User from '../views/User'

//重写push和replace
let OriginPush = VueRouter.prototype.push
let OriginReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        OriginPush.call(this, location, resolve, reject)
    } else {
        OriginPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        OriginReplace.call(this, location, resolve, reject)
    } else {
        OriginReplace.call(this, location, () => { }, () => { })
    }
}



Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'Main',
            path: '/',
            component: Main,
            redirect: 'Home',
            children: [
                {
                    name: 'Home',
                    path: '/Home',
                    icon: 's-home',
                    component: () => import('../views/Home')

                },
                // {
                //     name: 'User',
                //     path: '/User',
                //     component: () => import('../views/User')

                // },
                // {
                //     name: 'Mall',
                //     path: '/Mall',
                //     component: () => import('../views/Mall')

                // },
                // {
                //     name: 'Page1',
                //     path: '/Page1',
                //     component: () => import('../views/Other/pageOne.vue')

                // },
                // {
                //     name: 'Page2',
                //     path: '/Page2',
                //     component: () => import('../views/Other/pageTwo.vue')

                // },


            ]
        },
        {
            path: '/Login',
            name: 'Login',
            component: () => import('../views/Login/Login.vue')
        }
    ]
})
export default router
//全局前置导航守卫
router.beforeEach((to, from, next) => {
    store.commit('getToken')//预先获取防止页面刷新后丢失token
    const token = store.state.User.token
    //console.log('@token', token,to.name)
    //console.log('@to', to)
    if (!token && to.name !== 'Login') {
        next({ name: 'Login' })
        //当token存在时跳转login直接转到home页面
    }else if(token&&to.name==='Login'){
        next({ name:'Home' })
    }else {
        next()
    }
})