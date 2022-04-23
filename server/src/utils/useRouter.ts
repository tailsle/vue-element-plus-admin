import KoaRouter from 'koa-router'
import fs from 'fs'
export default (router:KoaRouter,path:string)=>{
    const dirs = fs.readdirSync(path,{encoding:'utf-8'});
    dirs.forEach((name:string)=>{
        const fileName = name.replace('.ts','');
        const route:KoaRouter = require(`${path}/${name}`)
        router.use(`/${fileName}`,route.routes(),route.allowedMethods())
    })
}
