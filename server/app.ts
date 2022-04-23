import Koa from 'koa'
import KoaRouter from 'koa-router'
import cors from 'koa-cors'
import logger from 'koa-logger'
import koaBodyparser from 'koa-bodyparser'
import path from 'path'
import consola from 'consola'
import registerRouter from './src/utils/useRouter'
const app = new Koa()
const router = new KoaRouter({ prefix: '/api' })
const port = 9000

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(logger())
app.use(koaBodyparser())
registerRouter(router, path.resolve(__dirname, 'src/routes'))
app.use(router.routes())


app.listen(port, () => {
    consola.ready(`server running in http://127.0.0.1:${port}`)
})

export default app
