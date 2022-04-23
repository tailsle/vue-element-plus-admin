import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: () => import('@/layout/default.vue'),
	},
	{
		path: '/login',
		component: () => import('@/layout/Login.vue'),
	},
	{
		path: '/404',
		component: import('@/layout/404.vue'),
		meta: {
			title: '页面找不到了',
			requireAuth: false
		}
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/404'
	}
];

export default routes;
