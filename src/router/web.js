/**
 * pc端路由
 */
export const Web = [
    {
        path: '',
        name: 'p_index',
        component: ()=>import('@/views/web/index/index'),
        meta:{ type: 'web' }
    },
]