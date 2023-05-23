import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { 
        path: "/admin",
        component: () => import('./components/layouts/Admin.vue'),
        name: 'admin',
        children: [
            {
                path: '/admin/dashbord',
                name: 'admin.dashbord',
                component: () => import('./components/pages/admin/Dashbord.vue')
            },
            {
                path: '/admin/contact',
                name: 'admin.contact',
                component: () => import('./components/pages/admin/contacts/Index.vue')
            },
            {
                path: '/admin/contact/create',
                name: 'admin.contact.create',
                component: () => import('./components/pages/admin/contacts/Create.vue')
            },
            {
                path: '/admin/contact/:id/edit',
                name: 'admin.contact.edit',
                component: () => import('./components/pages/admin/contacts/Edit.vue')
            },
        ]
    },
    // { 
    //     path: "/",
    //     component: () => import('./components/layouts/Master.vue'),
    //     name: 'home',
    //     children: [
    //         {
    //             path: '/',
    //             name: 'home',
    //             component: () => import('./components/pages/admin/Dashbord.vue')
    //         },
    //         {
    //             path: '/admin/contact',
    //             name: 'admin.contact',
    //             component: () => import('./components/pages/admin/contacts/Index.vue')
    //         },
    //     ]
    // },
];

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;