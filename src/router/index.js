import PageHome from "@/views/PageHome";
import { createRouter, createWebHistory} from 'vue-router'
import PageThreadShow from "@/views/PageThreadShow";
import PageNotFound from "@/views/PageNotFound";
import sourceData from '@/data.json'

const routes =[
    {
        path: '/',
        name: 'Home',
        component: PageHome
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: PageThreadShow,
        props: true,
        beforeEnter (to, from, next) {
            //Check if thread exists
            //If exists continue
            //If it doesnt exist then redirect to not found
            const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)

            if (threadExists) {
                next()
            }else {
                next({
                    name: 'NotFound',
                    params: { pathMatch: to.path.substring(1).split('/')},
                    query: to.query,
                    hash: to.hash,
                })
            }
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: PageNotFound
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})


