import KoaRouter from 'koa-router'
import { omit } from 'lodash'
import moment from 'moment'
import { userList } from '../model/User'
const router = new KoaRouter()
router.post('/login', async (ctx, next) => {
    const { username } = ctx.request.body
    const user = userList.find(i => i.username === username)
    if (user) {
        const maxAge = 2 * 60 * 60 * 1000
        const expires = new Date(moment().add(1, 'hours').valueOf())
        console.log(`当前时间：${moment().format('YYYY-MM-DD hh:mm:ss')}`);
        console.log(`cookie过期时间:${moment().add(1, 'hours').format('YYYY-MM-DD hh:mm:ss')}`);
        const _u_id_ = `__id_u_${Number(Math.random().toFixed(6)).toString(36)}_vite2_vue3__plus_${user.email}`
        ctx.cookies.set('_u_id_', _u_id_, { maxAge, expires, httpOnly: false })
        ctx.body = {
            code: 0,
            message: 'ok',
            data: '_access_token__' + user?.email
        }
    } else {
        ctx.body = {
            code: 404,
            message: '用户名错误'
        }
    }

})

router.post('/logout', async (ctx, next) => {
    ctx.body = {
        code: 0,
        message: 'ok',
    }
})

router.post('/userInfo', async ctx => {
    const username = ctx.cookies.get('x-vite-id')
    const user = userList.find(i => i.username === username)
    ctx.body = {
        code: 0,
        message: 'ok',
        data: omit(user, ['id', 'username', 'password'])
    }
})
module.exports = router
