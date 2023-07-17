import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home.vue')
    },
    {
        path: '/table',
        name: 'table',
        component: () => import('../views/table.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
