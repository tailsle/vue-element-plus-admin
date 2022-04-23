import { getToken } from '@/utils/permission';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const token = getToken()
	console.log(token);
	document.title = to.meta.title as string
	if (!token) {
		next({path:'/login'})
	} else {
		if (to.path === '/login') next({path:'/'})
		else next()
	}
	next()
});

// router.afterEach((to,from,next)=>{
// })

export default router;
