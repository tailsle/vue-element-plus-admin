import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: () => import('@/layout/default/index.vue'),
		meta: {
			title: '首页',
			requireAuth: true,
		},
	},
	{
		path: '/login',
		component: () => import('@/layout/Login.vue'),
		meta: {
			title: '登录页',
			requireAuth: false,
		},
	},
	{
		path: '/404',
		component: import('@/layout/404.vue'),
		meta: {
			title: '页面找不到了',
			requireAuth: false,
		},
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/404',
	},
];

export default routes;
