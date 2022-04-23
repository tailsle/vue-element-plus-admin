import { defineStore } from 'pinia';
import { login } from "@/api/user";
import { setToken } from '@/utils/permission';

export default defineStore('user', {
	state: () => {
		return {
			token: '',
		};
	},
	getters: {

	},
	actions: {
		async login(user: LoginUser): Promise<void> {
			// const res = await login(user)
			// const token = res.data;
			// this.token = token
			// setToken(token)
		},

	},
});
