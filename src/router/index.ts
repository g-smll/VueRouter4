import { createRouter, createWebHistory } from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'
import sourceData from '@/db/data.json'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () => import('@/views/DestinationShow.vue'),
        props: (route: RouteLocationNormalized) => ({
            ...route.params,
            id: Number(route.params.id)
        }),
        beforeEnter: (to: RouteLocationNormalized) => {
            const exists = sourceData.destinations.find(
                destination => destination.id === Number(to.params.id)
            );
            if (!exists) {
                return {
                    name: 'NotFound',
                    params: { 
                        pathMatch: to.path.split('/').slice(1),
                        originalId: to.params.id,
                        originalSlug: to.params.slug
                    },
                    query: { 
                        ...to.query,
                        error: 'destination-not-found'
                    },
                    hash: to.hash
                };
            }
        },
        children: [
            {
                path: ':experienceSlug',
                name: 'experience.show',
                component: () => import('@/views/ExperienceShow.vue'),
                props: (route: RouteLocationNormalized) => ({
                    ...route.params,
                    id: Number(route.params.id)
                })
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/protected',
        name: 'Protected',
        component: () => import('@/views/Protected.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => resolve({ top: 0 ,behavior: 'smooth'}), 300)
        })
    }
})

router.beforeEach((to, _from, next) => {
    if (to.meta.requiresAuth && !window.user) {
        return next({ name: 'Login' })
    }
    
    next()
})

export default router