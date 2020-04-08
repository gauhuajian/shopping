import VueRouter from 'vue-router'
import vue from 'vue'
vue.use(VueRouter)

const home = () => import('../views/home/Home.vue')
const category = () => import('../views/category/Category.vue')
const shoppingcart = () => import('../views/shoppingcart/Shoppingcart.vue')
const profile = () => import('../views/profile/Profile.vue')

const routes = [

    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/shoppingcart',
        component: shoppingcart
    },
    {
        path: '/profile',
        component: profile
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})
router.beforeEach((to, from, next) => {
    next()
})


export default router