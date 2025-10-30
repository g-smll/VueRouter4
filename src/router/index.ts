import {createRouter, createWebHistory} from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router